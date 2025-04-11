"use client"

import React from 'react'
import { useState } from 'react'
import { useSearch } from '../context/SearchContext'

export default function Search() {
    const { searchTerm, setSearchTerm } = useSearch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

    return (
        <div>
            <div className="relative lg:mr-16">
                <input
                    placeholder="Search..."
                    className="input shadow-lg text-black border focus:border border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 md:focus:w-96 outline-none"
                    value={searchTerm}
                    onChange={handleSearch}
                    name="search"
                    type="search"
                />
                <svg
                    className="size-6 absolute top-3 right-3 text-gray-500"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </div>

        </div>
    )
}