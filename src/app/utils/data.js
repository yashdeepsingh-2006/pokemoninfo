export const fetchPokemonData = async (setPokemonData, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await fetch('YOUR_API_URL_HERE');
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPokemonData(data);
        setError(null);
    } catch (err) {
        setError(err.message);
        setPokemonData([]);
    } finally {
        setLoading(false);
    }
};