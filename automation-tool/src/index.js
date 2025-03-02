const axios = require('axios');
const sendRequests = require('./services/requestService').sendRequests;
const compareResponses = require('./utils/compareResponses');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const endpoint1 = 'http://www.dneonline.com/calculator.asmx';
const endpoint2 = 'http://www.dneonline.com/calculator.asmx';

const requestPayload = fs.readFileSync(path.join(__dirname, 'requests', 'multiple.xml'), 'utf8');
const requestPayload1 = fs.readFileSync(path.join(__dirname, 'requests', 'multiple1.xml'), 'utf8');

async function main() {
    try {
        const [response1, response2] = await sendRequests(endpoint1, endpoint2, requestPayload, requestPayload1);
        const comparisonResult = await compareResponses(response1, response2);
       console.log(`Comparison Result:`, comparisonResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();