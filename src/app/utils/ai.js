import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function getPokemonSuggestion(userInput) {
  if (!userInput) return null;
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Given the user input "${userInput}" which might be a misspelled Pokémon name:
      1. Suggest the most likely correct Pokémon name
      2. Provide a brief, engaging description (max 150 characters)
      3. Provide an evolution stage (e.g., "1st stage", "2nd stage", "3rd stage") along with their names.
      4. Return in JSON format: {"name": "correct name", "description": "brief description", "evolution": "evolution stage"}
      If not similar to any Pokémon name, return null.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textResult = response.text();

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
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Provide a brief, three-sentence description of the Pokémon "${pokemonName}".
      Include its type and most notable characteristic.
      Keep it under 200 characters.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("AI description error:", error);
    return null;
  }

}
