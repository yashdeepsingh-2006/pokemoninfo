"use client"

import React, { useState } from 'react'
import { useSearch } from '../context/SearchContext'
import { getPokemonSuggestion } from '../utils/ai'

export default function Search() {
  const { setSearchQuery } = useSearch();
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSuggestion(null);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      setLoading(true);
      try {
        const aiResult = await getPokemonSuggestion(inputValue);
        if (aiResult) {
          setSuggestion(aiResult);
          setSearchQuery(aiResult.name.toLowerCase());
        } else {
          setSearchQuery(inputValue.toLowerCase());
        }
      } catch (error) {
        console.error("Search error:", error);
        setSearchQuery(inputValue.toLowerCase());
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative lg:mr-16">
        <input
          placeholder="Search Pokémon..."
          className="input shadow-lg text-black bg-white border focus:border border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 md:focus:w-96 outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          disabled={loading}
          type="search"
        />
        {loading ? (
          <div className="absolute top-3 right-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <svg className="size-6 absolute top-3 right-3 text-gray-500" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
            <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
        )}
      </div>
    </div>
  )
}