import { Avatar } from '@heroui/react';
import React from 'react';

const Profile = () => {
    return (
        <div className='container mx-auto bg-black text-white p-5'>
            <div className='text-2xl font-bold text-center'>
                My Profile information
            </div>
            <div className='  mx-auto mt-3 rounded-3xl bg-white p-5 space-y-4'>
                <div className='flex justify-center '><Avatar className='w-30 h-30'>
        <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      
     </div>
      <h1 className='bg-amber text-center font-bold text-2xl text-warning'>Name:</h1>
      <p className='text-black text-center'>Email:</p>
      <button className='btn w-full btn-warning rounded-full font-bold text-xl '>Update</button>
     <div>
         
     </div>
            </div>
        </div>
    );
};

export default Profile;