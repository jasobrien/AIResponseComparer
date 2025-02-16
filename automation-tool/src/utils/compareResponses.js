require('dotenv').config(); 
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}); 


const openai = new OpenAIApi(configuration);

async function compareResponses(response1, response2) {
    const prompt = `Compare the following two responses and highlight the differences:\nResponse 1: ${JSON.stringify(response1)}\nResponse 2: ${JSON.stringify(response2)}`;

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 100
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || error.message);
    }
}

module.exports = { compareResponses };