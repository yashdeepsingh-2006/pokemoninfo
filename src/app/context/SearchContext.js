import { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <SearchContext.Provider value={{ 
            searchTerm, 
            setSearchTerm,
            pokemonData,
            setPokemonData,
            loading,
            setLoading,
            error,
            setError
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}