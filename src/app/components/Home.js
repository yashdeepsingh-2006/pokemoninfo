// Home.js - Main component for displaying Pokemon information
// This component fetches and displays detailed information about a Pokemon based on user search

"use client"

import React, { useEffect } from 'react'
import { useSearch } from '../context/SearchContext'

export default function Home() {
  // Destructure required values and functions from SearchContext
  const { searchQuery, pokemonData, setPokemonData, setLoading, setError } = useSearch();

  // useEffect hook to fetch Pokemon data whenever search query changes
  useEffect(() => {
    const fetchPokemon = async () => {
      // Skip API call if search query is empty
      if (!searchQuery.trim()) return;

      try {
        setLoading(true); // Show loading state
        // Fetch Pokemon data from PokeAPI
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
        if (!res.ok) throw new Error("Pokemon not found");
        const data = await res.json();
        setPokemonData(data); // Update Pokemon data in context
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error(err);
        setError(err.message); // Set error message
        setPokemonData(null); // Clear Pokemon data on error
      } finally {
        setLoading(false); // Hide loading state
      }
    };

    fetchPokemon();
  }, [searchQuery]);

  return (
    // Main container with responsive layout
    <div className='flex flex-col lg:flex-row items-center justify-center text-black lg:h-screen'>
      {/* Left section - Pokemon Image Display */}
      <div className='lg:w-[45%] w-[75%] md:w-[65%] lg:mt-0 h-full pt-20 lg:py-20 lg:pl-40 '>
        <div className='flex items-center justify-center bg-white h-full w-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl lg:shadow-xl border lg:border-r-0 border-gray-100'>
          {/* Pokemon image or default logo */}
          <img
            src={pokemonData?.sprites?.other?.['official-artwork']?.front_default || "/Home_logo.png"}
            alt={pokemonData?.name || "Pokémon"}
            className='object-contain h-96'
          />
        </div>
      </div>

      {/* Right section - Pokemon Information Display */}
      <div className='w-[75%] md:w-[65%] lg:w-[55%] h-full lg:mt-20 lg:py-20 mb-20 lg:pr-40 '>
        <div className='flex items-center justify-center bg-white h-full w-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:shadow-xl border lg:border-l-0 border-gray-100'>
          <div className='flex flex-col items-center mt-20 h-full w-full'>
            {/* Pokemon Name */}
            <div className='text-4xl font-bold border-b border-gray-800 capitalize'>
              {pokemonData?.name || 'Pokemon'}
            </div>

            {/* Pokemon Description */}
            <div className='text-base text-gray-500 mt-4'>
              {pokemonData?.flavor_text_entries?.[0]?.flavor_text || 'No description available.'}
            </div>

            {/* Pokemon Details Section */}
            <div className='flex flex-col self-start ml-4 md:ml-14 mb-6 md:mb-8 lg:mb-4 lg:ml-20 mt-20 lg:mt-14'>
              {/* Pokemon Type Information */}
              <div className='text-base'>
                <span className='font-bold'>Type: </span>
                {pokemonData?.types?.map((t) => t.type.name).join(', ') || 'N/A'}
              </div>

              {/* Pokemon Abilities List */}
              <div className='text-base mt-2'>
                <span className='font-bold'>Abilities: </span>
                {pokemonData?.abilities?.map((a) => a.ability.name).join(', ') || 'N/A'}
              </div>

              {/* Pokemon Base Experience */}
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