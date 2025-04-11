"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <SearchContext.Provider
    value={{
      searchTerm,
      setSearchTerm,
      searchQuery,
      setSearchQuery,
      pokemonData,
      setPokemonData,
      loading,
      setLoading,
      error,
      setError,
    }}    
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
