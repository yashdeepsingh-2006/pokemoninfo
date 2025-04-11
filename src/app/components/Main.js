import React from 'react'
import Search from './Search'
import Home from './Home'
import { SearchProvider } from '../context/SearchContext'

export default function Main() {
  return (
    <SearchProvider>
      <div className='flex flex-col justify-center items-center bg-white text-black'>
        {/* div containing search for small screens */}
        <div className="md:hidden mt-14">
          <Search />
        </div>

        {/* div containing homepage */}
        <Home />
      </div>
    </SearchProvider>
  )
}