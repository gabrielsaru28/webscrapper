const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const Analyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");


/*
*  We use the natural library, a popular NLP library for Node.js, to perform sentiment analysis.
*
* We tokenize the input text into words using the natural.WordTokenizer.
*
* We use the AFINN-111 wordlist for sentiment analysis with the natural.SentimentAnalyzer and the Porter stemmer for stemming words.
*
* The sentiment score is calculated based on the AFINN-111 wordlist. If the sentiment score is significantly positive or negative, we classify it as 'positive' or 'negative', respectively. Otherwise, it's considered 'neutral'.
*
*/

function analyzeSentiment(text) {
    // Tokenize the text into words
    const words = tokenizer.tokenize(text);

    // Analyze the sentiment using AFINN-111 wordlist
    const sentimentScore = analyzer.getSentiment(words);

    let sentiment = 'neutral';

    if (sentimentScore > 0.5) {
        sentiment = 'positive';
    } else if (sentimentScore < -0.5) {
        sentiment = 'negative';
    }

    return { sentiment, words: words.length };
}

module.exports = {
    analyzeSentiment,
};
