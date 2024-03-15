import Image from 'next/image'
import React from 'react'
import Content1 from './Content1'

const Photos = () => {
  return (
    <div className='mx-20'>
    <div className=' my-14'>
        <Image src={'/banner1.avif'} alt='banner1' width={200} height={200} className='w-full h-80'/>
    </div>
    <div className='mb-20'>
    <Image src={'/banner2.avif'} alt='banner1' width={200} height={200} className='w-full h-40'/>
    </div>
    <Content1/>
    </div>
  )
}

export default Photos