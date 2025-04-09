"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {


  const { id } = useParams();

  const output = {
    tokenId: "1",
    owner: "0x123",
    tokenName: "NFT1",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIX05zbEojjZaOjUeiQ1wkjkYhGEMj8PpYQ&s",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
    category: "Art",
    auction: "true"
  }

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center bg-white text-black lg:h-screen'>
      {/* Image */}
      <div className='lg:w-[45%] w-[75%] md:w-[65%] lg:mt-0 h-full pt-20 lg:py-20 lg:pl-40 '>
        <div className='flex items-center justify-center h-full w-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl lg:shadow-xl border lg:border-r-0 border-gray-100'>
          <img src={output.Image} alt="..." />
        </div>
      </div>

      {/* Other info */}
      <div className='w-[75%] md:w-[65%] lg:w-[55%] h-full lg:mt-20 lg:py-20 mb-20 lg:pr-40 '>
        <div className='flex items-center justify-center h-full w-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:shadow-xl border lg:border-l-0 border-gray-100'>

          {/* div containing all the info */}
          <div className='flex flex-col items-center mt-20 h-full w-full'>

            {/* Title */}
            <div className='text-4xl font-bold border-b border-gray-800'>
              {output.tokenName}
            </div>

            {/* Description */}
            <div className='text-base mt-8 py-6 px-4 md:mx-10 lg:mx-16 text-justify h-40 overflow-y-scroll'>
              {output.description}
            </div>



            <div className='flex flex-col self-start ml-4 md:ml-14 mb-6 md:mb-8 lg:mb-4 lg:ml-20 mt-20 lg:mt-14'>

              {/* Owner */}
              <div className='text-base mt-2'>
                <span className='font-bold'>Owner: </span>{output.owner}
              </div>

              {/* Category */}
              <div className='text-base'>
                <span className='font-bold'>Category: </span>{output.category}
              </div>
            </div>


            {/* Page changing buttons */}
            <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden">
              <button className="px-4 py-2 text-blue-500 border-r hover:bg-blue-500 hover:text-white border-blue-500">
                -
              </button>
              <span className="px-6 py-2 text-blue-500">{output.tokenId}</span>
              <button className="px-4 py-2 text-blue-500 border-l hover:bg-blue-500 hover:text-white border-blue-500">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}