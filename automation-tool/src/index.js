const axios = require('axios');
const { sendRequests } = require('./services/requestService');
const { compareResponses } = require('./utils/compareResponses');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const endpoint1 = 'http://www.dneonline.com/calculator.asmx';
const endpoint2 = 'http://www.dneonline.com/calculator.asmx';


// const endpoint1 = 'https://securetrading.onrender.com';
// const endpoint2 = 'https://securetrading.onrender.com/api/stocks';
const requestPayload = fs.readFileSync(path.join(__dirname, 'requests', 'multiple.xml'), 'utf8');

async function main() {
    try {
        //use for post
        const [response1, response2] = await sendRequests(endpoint1, endpoint2, requestPayload);

        //use for get
        //const [response1, response2] = await sendRequests(endpoint1, endpoint2);
         const comparisonResult = await compareResponses(response1, response2);
        console.log('Comparison Result:', comparisonResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();