"use client"

import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Pokémon Info Explorer</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Pokémon Info Explorer aims to be your go-to resource for quick and comprehensive Pokémon information. 
            We&apos;ve created a seamless experience where trainers can easily access detailed stats, abilities, 
            and characteristics of any Pokémon with just a simple search.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Instant search with Enter key functionality</li>
            <li>Comprehensive Pokémon statistics</li>
            <li>Official artwork and sprites</li>
            <li>Responsive design for all devices</li>
            <li>Real-time data from PokéAPI</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Next.js 14 for modern web development</li>
            <li>Tailwind CSS for responsive styling</li>
            <li>React Context API for state management</li>
            <li>PokéAPI for reliable data sourcing</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Yashdeep Singh"
              role="Project Lead & Core Development"
              contributions={[
                "Initial project setup",
                "AI integration with Gemini API",
                "Core features implementation",
                "Bug fixes and maintenance"
              ]}
            />
            
            <TeamMember
              name="Om Kamboj"
              role="Backend & Integration"
              contributions={[
                "Contact and About pages",
                "Easter egg component",
                "Data restructuring",
                "Evolution data management"
              ]}
            />
            
            <TeamMember
              name="Rakshit Sharma"
              role="UI/UX & Frontend Features"
              contributions={[
                "Home component updates",
                "Loading states implementation",
                "Frontend features enhancement",
                "Global styling and layouts"
              ]}
            />
            
            <TeamMember
              name="Rehan Khanchi"
              role="Search & Navigation"
              contributions={[
                "Search functionality",
                "Navigation components",
                "Character database",
                "Documentation (README)"
              ]}
            />
            
            <TeamMember
              name="Tarshit Gupta"
              role="Frontend & Asset Management"
              contributions={[
                "File structure optimization",
                "Navigation bar updates",
                "Global CSS styling",
                "Asset management"
              ]}
            />
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg">
            Have questions or suggestions? We&apos;d love to hear from you!<br />
            Contact us at: <a href="mailto:contact@pokemoninfo.com" className="text-blue-600 hover:underline">
              contact@pokemoninfo.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

// Team Member Component
function TeamMember({ name, role, contributions }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {contributions.map((contribution, index) => (
          <li key={index}>{contribution}</li>
        ))}
      </ul>
    </div>
  );
}