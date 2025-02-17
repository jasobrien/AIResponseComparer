require('dotenv').config(); 
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}); 


const openai = new OpenAIApi(configuration);

async function compareResponses(response1, response2) {
    const prompt = `Compare the following two API responses and provide a csv response  with
    percentage match, the pass grade based on the following criteria : If the match is 
    above 95%, return "pass", otherwise return "fail".  Add a comment if there are any differences.
    \nResponse 1: ${JSON.stringify(response1)}\nResponse 2: ${JSON.stringify(response2)}`;

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 100
        });

        const resultText = response.data.choices[0].message.content.trim();
        console.log("AI Response:", resultText); // Log the AI response

        // Extract percentage match and pass/fail result from the response
        const percentageMatch = resultText.match(/(\d+)%/);
        const passFailMatch = resultText.match(/pass|fail/i);


        return {
            comparison: resultText,
            percentageMatch: percentageMatch ? parseInt(percentageMatch[1]) : null,
            result: passFailMatch ? passFailMatch[0].toLowerCase() : "unknown"
        };
        
        //response.data.choices[0].message.content.trim();
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || error.message);
    }
}

module.exports = { compareResponses };