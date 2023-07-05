// netlify/functions/hello.js
exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({message: "Hello, World"})
    };
  }

// EXAMPLE. 
// REQUIRES NODE + npm install google-spreadsheet
//   const { GoogleSpreadsheet } = require('google-spreadsheet');

// exports.handler = async function(event, context) {
//     if(event.httpMethod !== 'POST') {
//         return { statusCode: 405, body: 'Method Not Allowed' }
//     }

//     const doc = new GoogleSpreadsheet('your-google-sheet-id');
//     await doc.useServiceAccountAuth({
//         client_email: 'your-service-account-email',
//         private_key: 'your-service-account-private-key',
//     });

//     await doc.loadInfo();
//     const sheet = doc.sheetsByIndex[0];
//     const data = JSON.parse(event.body);

//     const newRow = await sheet.addRow({
//         'Category': data.category
//     });

//     return {
//         statusCode: 200,
//         body: JSON.stringify({success: true}),
//     };
// }