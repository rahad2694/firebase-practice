import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const {user} = useFirebase();
    return (
        <div className="sticky top-0 z-50">
            <nav className='grid grid-cols-2 py-3 bg-blue-500'>
                <div className='flex justify-start ml-10'>
                    <h1 className='text-white text-3xl font-bold'>Online Shop</h1>
                </div>
                <div className='md:flex-row flex flex-col justify-between mx-5'>
                    <Link className='hover:text-red-500 text-xl text-white' to='/'>Home</Link>
                    <Link className='hover:text-red-500 text-xl text-white' to='/orders'>Orders</Link>
                    <Link className='hover:text-red-500 text-xl text-white' to='/offers'>Offers</Link>
                    <Link className='hover:text-red-500 text-xl text-white' to='/aboutus'>About Us</Link>
                    <Link className='hover:text-red-500 text-xl text-white' to='/signin'>{user?.uid? user.displayName:'Sign-In'}</Link>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header; <nav>
    <h1>Online Shop</h1>
    <div>

    </div></nav>