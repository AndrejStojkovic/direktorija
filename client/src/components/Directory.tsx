import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Directory = () => {
  return (
    <>
      <div className='container max-w-screen-lg mx-auto my-3'>
        <div className='flex gap-4'>
          <div className='w-64 bg-white shadow-sm rounded-sm p-4'>
            <div className='relative w-full'>
              <input type='text' className='block p-2 w-full z-20 text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder='Search...' />
              <button type='submit' className='absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none'><svg aria-hidden='true' className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg></button>
            </div>

            <div className='flex flex-col mt-4 space-y-1 text-center'>
              <div className='w-full p-2 border-1 rounded-sm shadow-sm text-lg font-semibold hover:bg-gray-50 hover:cursor-pointer'>All</div>
              <div className='w-full p-2 border-1 rounded-sm shadow-sm text-lg font-semibold hover:bg-gray-50 hover:cursor-pointer'>A</div>
              <div className='w-full p-2 border-1 rounded-sm shadow-sm text-lg font-semibold hover:bg-gray-50 hover:cursor-pointer'>B</div>
              <div className='w-full p-2 border-1 rounded-sm shadow-sm text-lg font-semibold hover:bg-gray-50 hover:cursor-pointer'>C</div>
            </div>
          </div>
          
          <div className='flex-1 bg-white shadow-sm rounded-sm p-4'>
            <div>
              test
              <Routes>
                {/* add routes */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Directory;