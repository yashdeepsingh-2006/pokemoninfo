// Home.js - Main component for displaying Pokemon information
// This component fetches and displays detailed information about a Pokemon based on user search

"use client"

import React, { useEffect, useState } from 'react'
import { useSearch } from '../context/SearchContext'
import { getPokemonSuggestion } from '../utils/ai'
import Welcome from './Welcome'
import Loading from './Loader';

// Add this utility function after imports
const formatPokemonName = (name) => {
  if (!name) return '';
  
  return name
    // Handle special character cases
    .replace(/nidoran♀/gi, 'nidoran-f')
    .replace(/nidoran♂/gi, 'nidoran-m')
    .replace(/farfetch'd/gi, 'farfetchd')
    .replace(/mr\. mime/gi, 'mr-mime')
    .replace(/mime jr\./gi, 'mime-jr')
    .replace(/type: null/gi, 'type-null')
    .replace(/flabébé/gi, 'flabebe')
    .replace(/porygon-z/gi, 'porygon-z')
    .replace(/kommo-o/gi, 'kommo-o')
    // Convert HTML entities back for display
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#9792;/g, '♀')
    .replace(/&#9794;/g, '♂')
    .replace(/&eacute;/g, 'é');
};

const TYPE_COLORS = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-600',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300'
};

const NotFoundMessage = () => (
  <div className='min-h-screen flex flex-col items-center justify-center p-4'>
    <div className='bg-white rounded-3xl shadow-xl p-8 text-center max-w-md'>
      <img 
        src="/Home_logo.png" 
        alt="Pokemon Logo" 
        className='w-32 h-32 mx-auto mb-4'
      />
      <h2 className='text-2xl font-bold text-gray-800 mb-2'>Pokemon Not Found</h2>
      <p className='text-gray-600'>Please try searching for a different Pokemon</p>
    </div>
  </div>
);

export default function Home() {
  const { searchQuery, pokemonData, setPokemonData, loading, setLoading, setError } = useSearch();
  const [aiData, setAiData] = useState(null);
  const [activeView, setActiveView] = useState('official');

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery.trim()) return;

      try {
        setLoading(true);
        
        // Format the name before making the API call
        const formattedName = formatPokemonName(searchQuery.toLowerCase());
        
        // Fetch Pokemon data from PokeAPI
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedName}`);
        if (!res.ok) {
          setPokemonData(null);
          setAiData(null);
          return;
        }
        
        const data = await res.json();
        
        // Fetch AI-generated data
        const aiResult = await getPokemonSuggestion(formattedName);
        setAiData(aiResult);

        setPokemonData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setPokemonData(null);
        setAiData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  if (!searchQuery) {
    return <Welcome />;
  }

  if (searchQuery && !pokemonData) {
    return <NotFoundMessage />;
  }

  console.log(aiData)

  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center text-black p-4 lg:p-8'>
      {/* Left section - Pokemon Image */}
      <div className='lg:w-1/2 w-full max-w-xl lg:pr-8'>
        <div className='bg-white rounded-3xl shadow-xl p-8 flex items-center justify-center'>
          <img
            src={
              activeView === 'official'
                ? pokemonData?.sprites?.other?.['official-artwork']?.front_default
                : activeView === 'front'
                ? pokemonData?.sprites?.front_default
                : pokemonData?.sprites?.back_default || "/Home_logo.png"
            }
            alt={`${pokemonData?.name || "Pokémon"} - ${activeView} view`}
            className='object-contain h-72 lg:h-96 w-auto transition-all duration-300'
          />
        </div>
        {/* Sprite Selection */}
        <div className='flex gap-2 mt-4 justify-center'>
          {pokemonData?.sprites && (
            <>
              <button
                onClick={() => setActiveView('official')}
                className={`p-1 rounded-lg transition-all duration-300 ${
                  activeView === 'official' ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={pokemonData.sprites.other?.['official-artwork']?.front_default}
                  alt="Official artwork"
                  className='w-16 h-16 object-contain bg-gray-50 rounded-lg p-2'
                />
              </button>
              {pokemonData.sprites.front_default && (
                <button
                  onClick={() => setActiveView('front')}
                  className={`p-1 rounded-lg transition-all duration-300 ${
                    activeView === 'front' ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={pokemonData.sprites.front_default}
                    alt="Front view"
                    className='w-16 h-16 object-contain bg-gray-50 rounded-lg p-2'
                  />
                </button>
              )}
              {pokemonData.sprites.back_default && (
                <button
                  onClick={() => setActiveView('back')}
                  className={`p-1 rounded-lg transition-all duration-300 ${
                    activeView === 'back' ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={pokemonData.sprites.back_default}
                    alt="Back view"
                    className='w-16 h-16 object-contain bg-gray-50 rounded-lg p-2'
                  />
                </button>
              )}
            </>
          )}
        </div>
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
              <div>{aiData.evolution} </div>
            )}

            {/* Type and Abilities */}
            <div className='grid grid-cols-2 gap-4 my-6'>
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
  );
}