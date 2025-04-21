"use client"

import React, { useState } from 'react';

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

export default function Easteregg() {
  const [activeView, setActiveView] = useState('official');

  const data = {
    name: "muslmon",
    type: ["fire", "flying", "poison"],
    abilities: ["Levitate", "blast Shield"],
    base_stats: {
      hp: 80,
      attack: 30,
      defense: 100,
      special_attack: 200,
      special_defense: 90,
      speed: 100,
    },
    height: 1.5,
    weight: 56.5,
    description:
      "muslmon is a mystical Pokémon that soars through the skies, using its psychic powers to calm storms and protect its habitat.",
    evolution: {
      stage: "2nd stage",
      pre_evolution: "helimulla",
      next_evolution: null,
    },
    moves: ["Psychic", "building Slash", "timebomb", "backflip"],
    sprites: {
      official: "https://i.pinimg.com/736x/10/e0/a5/10e0a55ee5a2be141a896c61d846db58.jpg",
      front: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2b4a7nLH-Ir8Zf17_fImxPMV0Oapt3uYV-Q&s",
      back: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQLwaSX-WqQU4UQX7F0f5BNioAJ8pZkaNXA&s"
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center text-black p-4 lg:p-8">
      {/* Left section - Pokemon Image */}
      <div className="lg:w-1/2 w-full max-w-xl lg:pr-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 flex items-center justify-center">
          <img
            src={
              activeView === 'official'
                ? data.sprites.official
                : activeView === 'front'
                ? data.sprites.front
                : data.sprites.back
            }
            alt={`${data.name} - ${activeView} view`}
            className="object-contain h-72 lg:h-96 w-auto transition-all duration-300"
          />
        </div>
        {/* Sprite Selection */}
        <div className="flex gap-2 mt-4 justify-center">
          <button
            onClick={() => setActiveView('official')}
            className={`p-1 rounded-lg transition-all duration-300 ${
              activeView === 'official' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={data.sprites.official}
              alt="Official artwork"
              className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-2"
            />
          </button>
          <button
            onClick={() => setActiveView('front')}
            className={`p-1 rounded-lg transition-all duration-300 ${
              activeView === 'front' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={data.sprites.front}
              alt="Front view"
              className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-2"
            />
          </button>
          <button
            onClick={() => setActiveView('back')}
            className={`p-1 rounded-lg transition-all duration-300 ${
              activeView === 'back' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={data.sprites.back}
              alt="Back view"
              className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-2"
            />
          </button>
        </div>
      </div>

      {/* Right section - Pokemon Information */}
      <div className="lg:w-1/2 w-full max-w-xl lg:pl-8 mt-8 lg:mt-0">
        <div className="bg-white rounded-3xl shadow-xl h-[600px] flex flex-col">
          {/* Pokemon Name Header - Fixed */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-3xl font-bold text-center capitalize">{data.name}</h1>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 p-6 custom-scrollbar">
            {/* Description */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="italic text-gray-700">{data.description}</p>
            </div>

            {/* Evolution Chain */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-2">Evolution</h2>
              <p className="text-gray-700">Stage: {data.evolution.stage}</p>
              <p className="text-gray-700">
                Pre-Evolution: {data.evolution.pre_evolution || "None"}
              </p>
              <p className="text-gray-700">
                Next Evolution: {data.evolution.next_evolution || "None"}
              </p>
            </div>

            {/* Type and Abilities */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h2 className="font-bold mb-2">Type</h2>
                <div className="flex gap-2 flex-wrap">
                  {data.type.map((t, index) => (
                    <span
                      key={index}
                      className={`${TYPE_COLORS[t.toLowerCase()]} text-white px-3 py-1 rounded-full text-sm capitalize`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h2 className="font-bold mb-2">Abilities</h2>
                <p className="capitalize">{data.abilities.join(", ")}</p>
              </div>
            </div>

            {/* Physical Characteristics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <h2 className="font-bold mb-2">Height</h2>
                <p>{data.height}m</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <h2 className="font-bold mb-2">Weight</h2>
                <p>{data.weight}kg</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-4">Base Stats</h2>
              {Object.entries(data.base_stats).map(([stat, value]) => (
                <div key={stat} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{stat.replace("_", " ")}</span>
                    <span>{value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(value / 255) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Moves Section */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-4">Moves</h2>
              <div className="grid grid-cols-2 gap-2">
                {data.moves.map((move, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded-lg">
                    <p className="capitalize text-sm">{move}</p>
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
