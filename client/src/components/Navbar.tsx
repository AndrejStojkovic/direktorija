import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full bg-white shadow-sm'>
      <div className='container max-w-screen-lg screen mx-auto flex justify-between items-center'>
        <Link to='/' className='text-3xl font-semibold font-mono p-3'>Direktorija</Link>

        <div className='flex items-center'>
          <Link to='/' className='text-lg rounded-sm p-4 hover:bg-gray-100'>Home</Link>
          <Link to='/' className='text-lg rounded-sm p-4 hover:bg-gray-100'>Button</Link>
          <Link to='/' className='text-lg rounded-sm p-4 hover:bg-gray-100'>Help</Link>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar;