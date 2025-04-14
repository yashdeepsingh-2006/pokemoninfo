"use client"

import React, { useEffect } from 'react'
import { useSearch } from '../context/SearchContext'

export default function Home() {
  const { searchQuery, pokemonData, setPokemonData, setLoading, setError } = useSearch();


  useEffect(() => {
    const fetchPokemon = async () => {
      if (!searchQuery.trim()) return;

      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
        if (!res.ok) throw new Error("Pokemon not found");
        const data = await res.json();
        setPokemonData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setPokemonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [searchQuery]);


  return (
    <div className='flex flex-col lg:flex-row items-center justify-center text-black lg:h-screen'>
      {/* Image */}
      <div className='lg:w-[45%] w-[75%] md:w-[65%] lg:mt-0 h-full pt-20 lg:py-20 lg:pl-40 '>
        <div className='flex items-center justify-center bg-white h-full w-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl lg:shadow-xl border lg:border-r-0 border-gray-100'>
          <img
            src={pokemonData?.sprites?.other?.['official-artwork']?.front_default || "/Home_logo.png"}
            alt={pokemonData?.name || "Pokémon"}
            className='object-contain h-96'
          />
        </div>
      </div>

      {/* Info Section */}
      <div className='w-[75%] md:w-[65%] lg:w-[55%] h-full lg:mt-20 lg:py-20 mb-20 lg:pr-40 '>
        <div className='flex items-center justify-center bg-white h-full w-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:shadow-xl border lg:border-l-0 border-gray-100'>

          <div className='flex flex-col items-center mt-20 h-full w-full'>
            {/* Title */}
            <div className='text-4xl font-bold border-b border-gray-800 capitalize'>
              {pokemonData?.name || 'Pokemon'}
            </div>

            {/* Description */}
            <div className='text-base text-gray-500 mt-4'>
              {pokemonData?.flavor_text_entries?.[0]?.flavor_text || 'No description available.'}
            </div>

            <div className='flex flex-col self-start ml-4 md:ml-14 mb-6 md:mb-8 lg:mb-4 lg:ml-20 mt-20 lg:mt-14'>
              {/* Type */}
              <div className='text-base'>
                <span className='font-bold'>Type: </span>
                {pokemonData?.types?.map((t) => t.type.name).join(', ') || 'N/A'}
              </div>

              {/* Abilities */}
              <div className='text-base mt-2'>
                <span className='font-bold'>Abilities: </span>
                {pokemonData?.abilities?.map((a) => a.ability.name).join(', ') || 'N/A'}
              </div>
              {/* Right section - Pokemon Information with Scroll */}
      <div className='lg:w-1/2 w-full max-w-xl lg:pl-8 mt-8 lg:mt-0'>
        <div className='bg-white rounded-3xl shadow-xl h-[600px] flex flex-col'>
          {/* Pokemon Name Header - Fixed */}
          <div className='p-6 border-b border-gray-100'>
            <h1 className='text-3xl font-bold text-center capitalize'>
              {pokemonData?.name || 'Pokemon'}
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className='overflow-y-auto flex-1 p-6 custom-scrollbar'>
            {/* AI Description */}
            {aiData && (
              <div className='bg-gray-50 rounded-xl p-4 mb-6'>
                <p className='italic text-gray-700'>{aiData.description}</p>
              </div>
            )}

            {/* Evolution Chain */}
            {aiData?.evolution && (
              <div className='mb-6'>
                <h2 className='font-bold text-lg mb-2'>Evolution</h2>
                <p className='text-gray-700'>{aiData.evolution}</p>
              </div>
            )}

            {/* Type and Abilities */}
            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div className='bg-gray-50 p-4 rounded-xl'>
                <h2 className='font-bold mb-2'>Type</h2>
                <div className='flex gap-2 flex-wrap'>
                  {pokemonData?.types?.map(t => (
                    <span
                      key={t.type.name}
                      className={`${TYPE_COLORS[t.type.name]} text-white px-3 py-1 rounded-full text-sm capitalize`}
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className='bg-gray-50 p-4 rounded-xl'>
                <h2 className='font-bold mb-2'>Abilities</h2>
                <p className='capitalize'>{pokemonData?.abilities?.map(a => a.ability.name).join(', ') || 'N/A'}</p>
              </div>
            </div>

            {/* Physical Characteristics */}
            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div className='bg-gray-50 p-4 rounded-xl text-center'>
                <h2 className='font-bold mb-2'>Height</h2>
                <p>{pokemonData?.height ? `${pokemonData.height / 10}m` : 'N/A'}</p>
              </div>
              <div className='bg-gray-50 p-4 rounded-xl text-center'>
                <h2 className='font-bold mb-2'>Weight</h2>
                <p>{pokemonData?.weight ? `${pokemonData.weight / 10}kg` : 'N/A'}</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className='mb-6'>
              <h2 className='font-bold text-lg mb-4'>Base Stats</h2>
              {pokemonData?.stats?.map((stat) => (
                <div key={stat.stat.name} className='mb-3'>
                  <div className='flex justify-between mb-1'>
                    <span className='capitalize'>{stat.stat.name}</span>
                    <span>{stat.base_stat}</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Moves Section */}
            <div className='mb-6'>
              <h2 className='font-bold text-lg mb-4'>Moves</h2>
              <div className='grid grid-cols-2 gap-2'>
                {pokemonData?.moves?.slice(0, 6).map((move) => (
                  <div key={move.move.name} className='bg-gray-50 p-2 rounded-lg'>
                    <p className='capitalize text-sm'>{move.move.name.replace('-', ' ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              {/* Base Experience */}
              <div className='text-base mt-2'>
                <span className='font-bold'>Base experience: </span>
                {pokemonData?.base_experience || 'N/A'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}