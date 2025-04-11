"use client"

import React, { useEffect } from 'react'
import { useSearch } from '../context/SearchContext'

export default function Home() {
  const { searchTerm, pokemonData, setPokemonData, loading, setLoading, error, setError } = useSearch();

  useEffect(() => {
    console.log("Search term changed:", searchTerm); // Debug log

    if (!searchTerm) {
      console.log("No search term, skipping fetch"); // Debug log
      return;
    }

    const fetchPokemon = async () => {
      setLoading(true);
      try {
        console.log("Fetching data for:", searchTerm); // Debug log
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        
        if (!res.ok) throw new Error('Pokémon not found');
        
        const data = await res.json();
        console.log("Fetched data:", data); // Debug log
        setPokemonData(data);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err); // Debug log
        setError(err.message);
        setPokemonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [searchTerm, setPokemonData, setError, setLoading]);

  console.log("Current pokemonData:", pokemonData); // Debug log outside useEffect

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className='flex flex-col lg:flex-row items-center justify-center bg-white text-black lg:h-screen'>
      {/* Image */}
      <div className='lg:w-[45%] w-[75%] md:w-[65%] lg:mt-0 h-full pt-20 lg:py-20 lg:pl-40 '>
        <div className='flex items-center justify-center h-full w-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl lg:shadow-xl border lg:border-r-0 border-gray-100'>
          <img
            src={pokemonData?.sprites?.other?.['official-artwork']?.front_default || "/Home_logo.png"}
            alt={pokemonData?.name || "Pokémon"}
            className='object-contain h-60'
          />
        </div>
      </div>

      {/* Info Section */}
      <div className='w-[75%] md:w-[65%] lg:w-[55%] h-full lg:mt-20 lg:py-20 mb-20 lg:pr-40 '>
        <div className='flex items-center justify-center h-full w-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:shadow-xl border lg:border-l-0 border-gray-100'>

          <div className='flex flex-col items-center mt-20 h-full w-full'>
            {/* Title */}
            <div className='text-4xl font-bold border-b border-gray-800 capitalize'>
              {pokemonData?.name || 'Pokemon'}
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


