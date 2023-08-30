const axios = require("axios");

exports.handler = async function(event, context) {
    const API_KEY = process.env.TESTING_KEY;    
    const payload = JSON.parse(event.body);
    const { page } = payload;
    let request = 'https://plausible.io/api/v1/stats/breakdown?site_id=doorstopped.org&property=event:name&filters=event:name==' + page + '-likes&metrics=visitors,events';
    console.log(page);
    try {
      const response = await axios.get(request, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        },
        // params: params
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
  