import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className='px-8 max-sm:px-6' >

    <div className="divider">OR</div>
    
          <button className='btn rounded-lg w-full bg-Primary text-white hover:bg-Primary' ><FaGoogle></FaGoogle></button>
          
        </div>
  );
};

export default SocialLogin;