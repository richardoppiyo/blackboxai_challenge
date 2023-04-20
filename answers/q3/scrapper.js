// Make sure your environment can run nodejs. Use npm install and follow prompts to set up th node project
// Install the libraries for web scraping i.e cheerio and axios: npm install axios
// Make a request to the url
// Get the required content
// Extract the  data
//The call back function includes a error block to catch errors


const axios = require('axios');
const cheerio = require('cheerio');

// make a request
const url = 'https://trial.com';
axios.get(url)
  .then(response => {
    // parse the HTML content
    const $ = cheerio.load(response.data);

    // extract data
    const title = $('title').text();
    const paragraphs = $('p').map((i, el) => $(el).text()).get();

    console.log('Title:', title);
    console.log('Paragraphs:', paragraphs);
  })
  .catch(error => {
    console.log(error);
  });
