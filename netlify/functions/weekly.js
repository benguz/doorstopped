const axios = require("axios");
exports.handler = async function(event, context) {
    const API_KEY = process.env.TESTING_KEY;
  
    // Calculate the start date (6 months ago)
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 6);
  
    const responses = [];
  
    // Fetch data for each week
    for (let weekStart = startDate; weekStart < Date.now(); weekStart.setDate(weekStart.getDate() + 7)) {
      let weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
  
      if (weekEnd > Date.now()) {
        weekEnd = new Date();  // make sure we don't request data for the future
      }
  
      const params = {
        site_id: 'doorstopped.org',
        period: 'custom',
        date: `${weekStart.toISOString().split('T')[0]},${weekEnd.toISOString().split('T')[0]}`,
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
          weekStart: weekStart.toISOString().split('T')[0],
          weekEnd: weekEnd.toISOString().split('T')[0],
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
  