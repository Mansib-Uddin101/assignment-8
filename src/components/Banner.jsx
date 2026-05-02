import Image from 'next/image'
import React from 'react'
import banner from "@/assets/banner.jpg"
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='w-full py-4'>
      <div className='relative w-5/6 mx-auto h-110 overflow-hidden rounded-xl'>
        <Image
          src={banner}
          alt='banner'
          fill
          className='object-cover'
          priority
        />

        <div className='absolute inset-0 flex flex-col justify-center px-16 bg-black/10'>
          <h2 className='text-4xl md:text-6xl font-bold text-white leading-tight'>
            FIND YOUR <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              NEXT
            </span> READ
          </h2>
          <div className='mt-6'>
            <Link
              href='/all-books'
              className='text-lg md:text-xl px-6 md:px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition inline-block'
            >
              Browse Now
            </Link>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Banner