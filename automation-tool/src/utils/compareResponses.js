require('dotenv').config(); 
const { Configuration, OpenAIApi } = require('openai');
const fs = require('fs');
const path = require('path');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}); 

const openai = new OpenAIApi(configuration);

async function compareResponses(soapResponse1, soapResponse2) {
    const promptPath = path.join(__dirname, 'prompt');
    const wsdlPath = path.join(__dirname, 'wsdl', 'multiple.wsdl');
    const wsdlContent = fs.readFileSync(wsdlPath, 'utf-8');

    const prompt = fs.readFileSync(promptPath, 'utf-8')
        .replace('<!-- Insert SOAP Response 1 here -->', soapResponse1)
        .replace('<!-- Insert SOAP Response 2 here -->', soapResponse2)
        .replace('<!-- Insert WSDL Definition here -->', wsdlContent);

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 1000
        });
       // console.log("PROMPT: " +prompt);

        const resultText = response.data.choices[0].message.content.trim();
        console.log("AI Response:", resultText); // Log the AI response

        // Extract pass/fail result from the response
       const passFailMatch = resultText.match(/result:\s*(pass|fail)/i);
        // console.log( "passFailMatch:", passFailMatch ) ;

        return {
            comparison: resultText,
           result: passFailMatch ? passFailMatch[1].toLowerCase() : "unknown"
         };
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || error.message);
    }
}

module.exports = compareResponses;