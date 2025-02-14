const fs = require('fs');
const axios = require('axios');

async function sendReport() {
  const report = fs.readFileSync('./playwright-report/index.html', 'utf8');
  try {
    const response = await axios.post(process.env.AZURE_ENDPOINT, { data: report }, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY,
      },
    });
    console.log('Azure AI response:', response.data);
  } catch (error) {
    console.error('Error sending report:', error);
    process.exit(1);
  }
}

sendReport();
