const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const scraper = require('./scraper');
const sentiment = require('./sentiment');

app.use(express.json());

app.get('/scrape', async (req, res) => {
    try {
        const url = req.query.url;
        const scrapedData = await scraper.scrape(url);
        const sentimentData = sentiment.analyzeSentiment(scrapedData.short_description);

        const responseData = {
            title: scrapedData.title,
            short_description: scrapedData.short_description,
            image: scrapedData.image,
            href: url,
            sentiment: sentimentData,
            words: sentimentData.words,
        };

        res.json([responseData]);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
