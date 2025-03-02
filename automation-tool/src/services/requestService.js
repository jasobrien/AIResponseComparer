const axios = require('axios');

async function sendRequests(endpoint1, endpoint2, payload, payload1) {
    const headers = {
        'Content-Type': 'text/xml',
        'SOAPAction': 'http://tempuri.org/Multiply' // Add the appropriate SOAPAction if required
    };

    const request1 = axios.post(endpoint1, payload, { headers });
    const request2 = axios.post(endpoint2, payload1, { headers });

    const [response1, response2] = await Promise.all([request1, request2]);
    return [response1.data, response2.data];
}

module.exports = { sendRequests };