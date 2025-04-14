// This file containg footer of the project 

"use client"

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pokeinfo. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yashdeepsingh2006" className="hover:text-gray-400">Yashdeep Singh</a>
          <a href="https://github.com/om-Kamboj1409" className="hover:text-gray-400">Om Kamboj</a>
          <a href="https://github.com/QuantumG0D" className="hover:text-gray-400">Rakshit Sharma</a>
          <a href="https://github.com/Tarshit-Gupta" className="hover:text-gray-400">Tarshit Gupta</a>
          <a href="https://github.com/rehankhanchi" className="hover:text-gray-400">Rehan Khanchi</a>
        </div>
        <div className="mt-2 space-x-4">
          <Link href="/direct/about" className="hover:text-gray-400">About</Link>
          <Link href="/direct/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}