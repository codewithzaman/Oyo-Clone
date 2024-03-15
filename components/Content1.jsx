'use client'
import Image from 'next/image'
import React from 'react'

const Content1 = () => {
  return (
    <div className='flex my-14 justify-between items-center border-2 rounded border-gray-300 px-5 '>
      <div className='flex items-center'>
      <Image src={'/fire.jpg'} alt='fire' width={200} height={200} className='w-30 h-30 rounded-full mr-5 '/>
      <div className='text-xl'>
        <p className='font-bold'>Get access to exclusive deals</p>
        <p>Only the best deals reachs  your inbox</p>
      </div>
      </div>
      <div className='flex'>
        <input type="email" className='px-6 py-3 w-80 h-14 rounded-lg mr-5 outline-none border border-gray-300 ' placeholder='e.g john@gmail.com' />
        <button type="submit" className='w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer'>Notify</button>
      </div>
    </div>
  )
}

export default Content1