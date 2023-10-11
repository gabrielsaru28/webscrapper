const axios = require('axios');
const cheerio = require('cheerio');

async function scrape(url) {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Scrape the title and short description
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content');

    // You can add logic to scrape additional data here
    const image = '...'; // Extract the image URL

    return {
        title,
        short_description: description,
        image,
    };
}

module.exports = {
    scrape,
};
