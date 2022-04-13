import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Orders = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1 className='text-2xl'>Hey! <span className='text-red-500'>{user?.uid? user.displayName:'Nobody'} </span>,Wanna See the orders???</h1> 
        </div>
    );
};

export default Orders;