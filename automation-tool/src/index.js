const axios = require('axios');
const { sendRequests } = require('./services/requestService');
const { compareResponses } = require('./utils/compareResponses');
require('dotenv').config();

const endpoint1 = 'https://securetrading.onrender.com';
const endpoint2 = 'https://securetrading.onrender.com/api/stocks';
const requestPayload = {
    key: 'value'
};

async function main() {
    try {
        //use for post
      //  const [response1, response2] = await sendRequests(endpoint1, endpoint2, requestPayload);

        //use for get
        const [response1, response2] = await sendRequests(endpoint1, endpoint2);
        const comparisonResult = await compareResponses(response1, response2);
        console.log('Comparison Result:', comparisonResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();