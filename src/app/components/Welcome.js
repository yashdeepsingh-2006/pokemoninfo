"use client"

import React from 'react';
import { useSearch } from '../context/SearchContext';

const POPULAR_POKEMON = [
  { name: 'pikachu', type: 'electric' },
  { name: 'charizard', type: 'fire' },
  { name: 'mewtwo', type: 'psychic' },
  { name: 'bulbasaur', type: 'grass' },
  { name: 'gyarados', type: 'water' },
  { name: 'dragonite', type: 'dragon' }
];

export default function Welcome() {
  const { setSearchQuery } = useSearch();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100'>
      <div className='bg-white rounded-3xl shadow-xl p-8 text-center max-w-2xl mx-4'>
        <img 
          src="/Home_logo.png" 
          alt="Pokemon Logo" 
          className='w-48 h-48 mx-auto mb-6 animate-bounce-slow'
        />
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Welcome to Pokémon Info Explorer
        </h1>
        <p className='text-xl text-gray-600 mb-8'>
          Discover detailed information about your favorite Pokémon!
        </p>
        
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Popular Searches</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto'>
            {POPULAR_POKEMON.map(({ name, type }) => (
              <button
                key={name}
                onClick={() => setSearchQuery(name)}
                className='bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md 
                         transition-all duration-300 transform hover:-translate-y-1'
              >
                <p className='capitalize text-gray-700 font-medium'>{name}</p>
                <span className='text-sm text-gray-500 capitalize'>{type}</span>
              </button>
            ))}
          </div>
        </div>

        <div className='text-center text-gray-600'>
          <p className='text-sm'>
            Use the search bar above to explore more Pokémon!
          </p>
        </div>
      </div>
    </div>
  );
}