const axios = require('axios');


async function sendRequests(endpoint1, endpoint2, payload) {
    // const request1 = axios.post(endpoint1, payload);
    // const request2 = axios.post(endpoint2, payload);

     const request1 = axios.get(endpoint1);
     const request2 = axios.get(endpoint2);

    const [response1, response2] = await Promise.all([request1, request2]);
    return [response1.data, response2.data];
}

module.exports = { sendRequests };