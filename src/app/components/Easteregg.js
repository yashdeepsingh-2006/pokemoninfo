"use client"

import React, { useState, useEffect } from 'react';
import { useSearch } from '../context/SearchContext';
import characterData from '../utils/easteregg.json';

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
  fairy: 'bg-pink-300',
  healing: 'bg-pink-400',
  racing: 'bg-orange-500',
  varied: 'bg-purple-400',
  support: 'bg-green-400',
  "law enforcement": 'bg-blue-700'
};

export default function Easteregg() {
  const { searchQuery } = useSearch();
  const [activeCharacter, setActiveCharacter] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      // Clean and normalize the search query
      const normalizedQuery = searchQuery.toLowerCase().trim();
      
      // Find character with fuzzy matching
      const foundCharacter = characterData.find(char => {
        const charName = char.name.toLowerCase();
        // Check for exact match
        if (charName === normalizedQuery) return true;
        // Check for partial match at start
        if (charName.startsWith(normalizedQuery)) return true;
        // Check if query is at least 3 chars and matches 80% of name
        if (normalizedQuery.length >= 3 && charName.includes(normalizedQuery)) return true;
        return false;
      });

      console.log("Search query:", normalizedQuery);
      console.log("Found character:", foundCharacter);

      if (foundCharacter) {
        setActiveCharacter(foundCharacter);
      } else {
        setActiveCharacter(null);
      }
    } else {
      setActiveCharacter(null);
    }
  }, [searchQuery]);

  console.log("Active character:", activeCharacter);

  if (!activeCharacter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Character Not Found</h2>
          <p className="text-gray-600">Please try searching for a different character</p>
        </div>
      </div>
    );
  }

  console.log(activeCharacter)
  console.log(activeCharacter.role)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-black p-4 lg:p-8">
      {/* Character Details */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src={activeCharacter.image}
              alt={activeCharacter.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{activeCharacter.name}</h1>
            <div className="space-y-4">
              <div>
                <h2 className="font-bold mb-2">Role</h2>
                <span className={`${TYPE_COLORS[activeCharacter.role.toLowerCase()]} text-white px-3 py-1 rounded-full text-sm`}>
                  {activeCharacter.role}
                </span>
              </div>

              <div>
                <h2 className="font-bold mb-2">Location</h2>
                <p>{activeCharacter.location}</p>
              </div>

              <div>
                <h2 className="font-bold mb-2">Description</h2>
                <p className="text-gray-700">{activeCharacter.description}</p>
              </div>

              {activeCharacter.team && activeCharacter.team.length > 0 && (
                <div>
                  <h2 className="font-bold mb-2">Pokémon Team</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {activeCharacter.team.map((pokemon, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded-lg">
                        <p className="font-medium">{pokemon.pokemon}</p>
                        <p className="text-sm text-gray-600">Level {pokemon.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeCharacter.type_specialty && activeCharacter.type_specialty.length > 0 && (
                <div>
                  <h2 className="font-bold mb-2">Type Specialty</h2>
                  <div className="flex flex-wrap gap-2">
                    {activeCharacter.type_specialty.map((type, index) => (
                      <span
                        key={index}
                        className={`${TYPE_COLORS[type.toLowerCase()]} text-white px-3 py-1 rounded-full text-sm`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}