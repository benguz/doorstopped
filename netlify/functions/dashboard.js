const axios = require("axios");

exports.handler = async function(event, context) {
    const API_KEY = process.env.TESTING_KEY;    
    // event:props:culture
    // https://plausible.io/api/v1/stats/breakdown?site_id=doorstopped.org&period=6mo&property=event:props:method&filters=event:name%3D%3DDownload'
    const params = {
      site_id: 'doorstopped.org',
      period: '6mo',
      property: 'event:name',
      metrics: 'events',
      filters: 'event:name==culture'
    };
    // https://plausible.io/api/v1/stats/breakdown
    // we can get visit duration with visit_duration, which can be added as a metric below
    // couple with property= event:page==/doorstops**	
    try {
      const response = await axios.get('https://plausible.io/api/v1/stats/breakdown?site_id=doorstopped.org&period=12mo&property=event:name&metrics=visitors,events', {
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
  