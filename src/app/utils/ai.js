import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyApfa-kBQ55wrcIQDMkPXu4UYluVEF9XM8");

export async function getPokemonSuggestion(userInput) {
  if (!userInput) return null;
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Given the user input "${userInput}" which might be a misspelled Pokémon name:
      1. Suggest the most likely correct Pokémon name
      2. Provide a brief, engaging description (max 150 characters)
      3. Return in JSON format: {"name": "correct name", "description": "brief description"}
      If not similar to any Pokémon name, return null.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const textResult = await response.text();

    try {
      const cleanJson = textResult.replace(/[\r\n\t]/g, '').match(/\{.*\}/)?.[0];
      if (!cleanJson) return null;
      
      const parsedResult = JSON.parse(cleanJson);
      
      if (!parsedResult.name || !parsedResult.description) {
        return null;
      }

      return parsedResult;
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      return null;
    }
  } catch (error) {
    console.error("AI suggestion error:", error);
    return null;
  }
}

export async function getPokemonDescription(pokemonName) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Provide a brief, two-sentence description of the Pokémon "${pokemonName}".
      Include its type and most notable characteristic.
      Keep it under 100 characters.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("AI description error:", error);
    return null;
  }
}
