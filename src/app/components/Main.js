import React from 'react'
import Search from './Search'
import Home from './Home'

export default function Main() {
  return (
    <div className='flex flex-col justify-center items-center bg-white text-black'>

      {/* div containing search for small screens */}
      <div className="md:hidden mt-14">
        <Search />
      </div>

      {/* div containing homepage */}
      <Home />

    </div>
  )
}