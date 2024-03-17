import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleHotel = () => {
  return (
    <div className='w-7/12 mx-auto my-10'>
         <Image
          src={
            "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=360&t=st=1710612120~exp=1710612720~hmac=1484c60c805da88266ed6a9bd4cd87efad864be511d4907081c21c06adc82058"
          }
          alt="hotel"
          width={2000}
          height={2000}
          className="h-large-box  w-full my-5"
        />
        <div className=''>
            <h3 className='text-3xl font-bold line-clamp-1 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui provident, saepe aliquid.
            </h3>
            <p className='text-xl my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam expedita aliquid cum maiores, qui, deserunt possimus voluptatem incidunt debitis maxime beatae dolor. Eligendi ipsum officia impedit similique, nemo porro eum illo omnis cum quasi nam hic enim sed dolores iste soluta deleniti praesentium sint. Omnis aspernatur minima veniam laborum.</p>
            <button className="w-60 h-14 rounded-lg bg-orange-400 text-lg">Price : 5000</button>
            <p className='text-3xl font-bold my-5'>Facilities :</p>
            <ul className='flex text-xl justify-between'>
                <li>Swimming Pool</li>
                <li>Dogs</li>
                <li>Cricket</li>
                <li>Laundry</li>
                <li>Garden</li>
            </ul>
            <button className="w-60 h-14 my-5 rounded-lg bg-indigo-500 text-lg">Book Now</button>
        </div>
    </div>
  )
}

export default SingleHotel