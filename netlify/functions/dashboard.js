const axios = require("axios");

console.log("axios checked");

exports.handler = async function(event, context) {
    const API_KEY = process.env.TESTING_KEY;    
    console.log('API_KEY:', API_KEY); // checking correctness
    try {
      const response = await axios.get('https://plausible.io/api/v1/stats/realtime/visitors?site_id=doorstopped.org', {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      });
  
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      };
    } catch (error) {
      console.error('Axios request failed:', error);
  
      // Return the error message in the response
      return {
        statusCode: 500,
        body: `Error: ${error.message || error}`
      };
    }
  }
  