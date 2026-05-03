"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';
import { UpdateProfile } from './UpdateProfile';


const Profile = () => {
    const userData = authClient.useSession() 
    const user=userData?.data
    console.log(user)
    return (
        <div className='container mx-auto bg-black text-white p-5'>
            <div className='text-2xl font-bold text-center'>
                My Profile information
            </div>
            <div className='  mx-auto mt-3 rounded-3xl bg-white p-5 space-y-4'>
                <div className='flex justify-center '><Avatar className='w-30 h-30'>
        <Avatar.Image alt="John Doe" src={user?.user?.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      
     </div>
      <h1 className='bg-amber text-center font-bold text-2xl text-warning'>Name: {user?.user?.name}</h1>
      <p className='text-black text-center'>Email: {user?.user?.email}</p>
     
     <div>
        <UpdateProfile/> 
     </div>
            </div>
        </div>
    );
};

export default Profile;