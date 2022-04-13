import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import EmailPassForm from '../EmailPassForm/EmailPassForm';

const AuthenticateUser = () => {
    const { user, handleGoogleSignIn, handleGithubSignIn, handleSignOut, handleFacebookSignin } = useFirebase();

    const { photoURL, displayName, email, uid, emailVerified } = user?user:'';
    return (
        <div>
            <div>
                <div className={`flex justify-center ${uid ? 'block py-5' : 'hidden'}`}>
                    <div className='border-4 rounded-xl w-2/4 p-8'>
                        {
                            uid ? <h1 className='text-3xl font-bold pb-5'>Welcome</h1> : <></>
                        }
                        <div className='flex justify-center'>
                            <img className='' src={photoURL} alt="" />
                        </div>
                        <h1 className='text-2xl font-bold text-green-500'>{displayName}</h1>
                        <p className='text-lg text-purple-600'>{email}</p>
                        <p className='text-lg text-red-600'>{emailVerified ? "Verified" : "Email Not Verified Yet"}</p>
                    </div>
                </div>
                {
                    uid ?
                        <button onClick={handleSignOut} className='bg-blue-500 text-white py-2 px-5 border-2 rounded-xl hover:bg-orange-500 font-bold my-3'>Sign Out</button>
                        :
                        <div className='flex flex-col mx-20 my-10'>
                            <button onClick={handleGoogleSignIn} className='bg-blue-500 text-white py-2 px-5 border-2 rounded-xl hover:bg-orange-500 font-bold my-3'>SignIn / Register with Google</button>
                            <button onClick={handleGithubSignIn} className='bg-blue-500 text-white py-2 px-5 border-2 rounded-xl hover:bg-orange-500 font-bold my-3 ml-3'>SignIn / Register with GitHub</button>
                            <Link to='emaillogin' className='bg-blue-500 text-white py-2 px-5 border-2 rounded-xl hover:bg-orange-500 font-bold my-3 ml-3'>SignIn / Register with E-mail</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default AuthenticateUser;