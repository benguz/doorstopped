const axios = require("axios");
exports.handler = async function(event, context) {
    const API_KEY = process.env.TESTING_KEY;
  
    // Calculate the start date (2 weeks ago)
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 14);
  
    const responses = [];
    // Instead of all these requests I should switch to timeseries
    // 'https://plausible.io/api/v1/stats/timeseries?site_id=$SITE_ID&period=6mo'
    // https://plausible.io/docs/stats-api
    
    // Fetch data for each day
    for (let day = startDate; day < Date.now(); day.setDate(day.getDate() + 1)) {
  
      const params = {
        site_id: 'doorstopped.org',
        period: 'day',
        date: `${day.toISOString().split('T')[0]}`,
        metrics: 'visitors',
        filters: 'event:page==/dashboard',
      };
  
      try {
        const response = await axios.get('https://plausible.io/api/v1/stats/aggregate', {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          },
          params: params
        });
  
        responses.push({
          day: day.toISOString().split('T')[0],
          data: response.data
        });
      } catch (error) {
        console.error('Axios request failed:', error);
  
        // Return the error message in the response
        return {
          statusCode: 500,
          body: `Error: ${error.message || error}`
        };
      }
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify(responses)
    };
}
