import Image from 'next/image'
import React from 'react'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie'

const Header1 = () => {
  return (
    <div className='flex justify-between  border-b-2 border-gray-300  items-center h-24 px-10 '>
      <Link href={"/"}>
      <Image src={'/resto.png'} alt='logo' width={200} height={200} className='h-24 w-28' />
      </Link>
      <div className=' border-gray-300 h-full flex'>
      <Block title={'Become a member'} para={'Additional 10% off on stays'}/>
      <Block title={'Resto For Business'} para={'Trusted by 5000 corporates'}/>
      <Block title={'List your property'} para={'Start earning in 30 mints'}/>
      <Block title={'987654321'} para={'Call us to book now'}/>
      <div className='flex items-center px-3'>
      <Image src={"/demo.svg"} alt='demo' width={200} height={200} className='w-10 h-10 rounded-full mr-5'/>
      <Link href={'/login'}>
      <h3 className='font-bold'>Login/Signup</h3>
      </Link>
      </div>
      </div>
      
    </div>
  )
}

export default Header1