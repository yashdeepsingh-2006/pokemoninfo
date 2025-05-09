"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'

export default function Nav() {
    return (
        <div>
            <nav className='flex flex-row justify-between px-5 py-2 h-20 w-full bg-teal-950 shadow-md'>

                {/* div containing logo */}
                <div className='w-full ml-10 mt-2'>
                    <Link href="/">
                        <Image
                            className='h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity'
                            height={80}
                            width={110}
                            src={"/logo.png"}
                            alt='Logo-mintify'
                        />
                    </Link>
                </div>

                {/* div containing search bar */}
                <div className='hidden md:block mt-1'>
                    <Search />
                </div>
            </nav>
        </div>
    )
}