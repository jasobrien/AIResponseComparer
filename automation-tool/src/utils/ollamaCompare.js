const axios = require("axios");

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate"; // Ensure Ollama is running
const MODEL = "llama3.2"; // Change to your model

async function compareTexts(text1, text2) {
    const prompt = `Please compare the following two texts. Provide a percentage match and highlight the differences. If there are any significant discrepancies, explain them. Finally, provide a pass/fail result based on whether the texts are sufficiently similar.\n\nText 1: "${text1}"\nText 2: "${text2}"`;

    try {
        const response = await axios.post(OLLAMA_URL, {
            model: MODEL,
            messages: [{ role: "user", content: prompt }],
           // prompt: prompt,
            max_tokens: 150
        });

        console.log("Ollama Response:", response.data); // Log full response

        // Check if the response has the expected structure
        if (!response.data || !response.data.choices || !response.data.choices[0] || !response.data.choices[0].text) {
            console.error("Unexpected response structure:", response.data);
            throw new Error("Ollama returned an unexpected response structure.");
        }

        const messageContent = response.data.choices[0].text.trim(); // Safely check the content

        if (!messageContent) {
            console.error("Ollama returned an empty response:", response.data);
            throw new Error("Ollama returned an empty response.");
        }

        // Extract pass/fail result from the response
        const passFailMatch = messageContent.match(/pass|fail/i);
        const passFailResult = passFailMatch ? passFailMatch[0].toLowerCase() : "unknown";

        return {
            comparison: messageContent,
            result: passFailResult
        };
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        console.error("Full Error:", error); // Log the full error object
        throw error;
    }
}

module.exports = compareTexts;