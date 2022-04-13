import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import app from "../firebase.init";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    let navigate = useNavigate();
    const [registered, setRegistered] = useState(false);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const guthubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, guthubProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    } ,[]);
    const handleFacebookSignin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser([]);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }
    const handleNameInput = (event) => {
        setName(event.target.value);
    }
    const handleLoginForm = (event) => {
        setRegistered(event.target.checked);
    }

    const sendVerificationEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setError('Email Sent!');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('Profile Name Updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleRegisterBtn = () => {
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('Must Include a special Charecter!');
            console.log('Not SpQ Found')
            return;
        }
        if (!registered) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(res => {
                    console.log(res.user);
                    setUser(res.user);
                    setError('');
                    sendVerificationEmail();
                    updateName();
                })
                .catch(error => {
                    console.error(error);
                    setError(error.message)
                })
        }
        
        else {
            
            signInWithEmailAndPassword(auth, email, password)
                .then(res => {
                    console.log(res.user);
                    setUser(res.user);
                    setError('');
                    navigate('/signin');
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }
    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('Reset Email Sent!');
                console.log('Reset Email Sent!');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return {
        user,
        setUser, error, setError, registered, handleGoogleSignIn, handleGithubSignIn, handleSignOut, handleFacebookSignin, handleEmailInput, handlePasswordInput, handleNameInput, handleLoginForm, handleRegisterBtn, handleForgetPassword
    }
}

export default useFirebase;