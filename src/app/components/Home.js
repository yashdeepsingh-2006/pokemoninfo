import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center bg-white text-black lg:h-screen'>
        {/* Image */}
        <div className='lg:w-[45%] w-[75%] md:w-[65%] lg:mt-0 h-full pt-20 lg:py-20 lg:pl-40 '>
          <div className='flex items-center justify-center h-full w-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl lg:shadow-xl border lg:border-r-0 border-gray-100'>
            <img src={"/Home_logo.png"} alt="..." />
          </div>
        </div>

        {/* Other info */}
        <div className='w-[75%] md:w-[65%] lg:w-[55%] h-full lg:mt-20 lg:py-20 mb-20 lg:pr-40 '>
          <div className='flex items-center justify-center h-full w-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:shadow-xl border lg:border-l-0 border-gray-100'>

            {/* div containing all the info */}
            <div className='flex flex-col items-center mt-20 h-full w-full'>

              {/* Title */}
              <div className='text-4xl font-bold border-b border-gray-800'>
                Pokemon
              </div>

              <div className='flex flex-col self-start ml-4 md:ml-14 mb-6 md:mb-8 lg:mb-4 lg:ml-20 mt-20 lg:mt-14'>

                {/* Owner */}
                <div className='text-base'>
                  <span className='font-bold'>Type: </span>fire, normal, grass, water
                </div>

                {/* Category */}
                <div className='text-base mt-2'>
                  <span className='font-bold'>Abilities: </span>abilities
                </div>

                {/* Base experience */}
                <div className='text-base mt-2'>
                  <span className='font-bold'>Base experience: </span>exp
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}
