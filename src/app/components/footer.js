import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pokeinfo.All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
        </div>
      </div>
    </footer>
  );
}