# Web Scraping API Service

Welcome to the Web Scraping API Service project! This service allows you to scrape content from web pages, perform sentiment analysis, and more. It's built with Node.js, Express, and advanced sentiment analysis techniques.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Sentiment Analysis](#sentiment-analysis)
- [Customizing Sentiment Analysis](#customizing-sentiment-analysis)
- [Example](#example)
- [API Endpoints](#api-endpoints)
- [Advanced Sentiment Analysis](#advanced-sentiment-analysis)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Web Scraping**: Scrapes content (title, short description, images, and more) from web pages.
- **Sentiment Analysis**: Analyzes the sentiment of scraped text (positive, negative, or neutral).
- **Word Count**: Counts the number of words in the scraped text.
- **Customizable**: Extend the functionality and adapt it to your needs.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. ### Clone the repository:

   ```bash
   git clone https://github.com/gabrielsaru28/web-scraping-api.git
   cd web-scraping-api
   
2. ### Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Open a web browser and go to http://localhost:3000 to access the web application.

3. ### Usage
Enter a URL into the input field and click the "Scrape" button.
The scraped data, including title, short description, sentiment analysis, and word count, will be displayed in JSON format.
Sentiment Analysis
The sentiment analysis is performed using a combination of techniques. It categorizes text into three sentiments: positive, negative, or neutral. The sentiment is determined based on specific keywords and an advanced scoring system.

Customizing Sentiment Analysis
You can customize the sentiment analysis logic by modifying the src/sentiment.js file. The file contains the sentiment analysis function, analyzeSentiment, which you can enhance with more advanced algorithms or custom word lists.

4. ### Example
For an example of the sentiment analysis function with advanced logic, please refer to the src/sentiment.js file in the repository.

5. ### API Endpoints
The API provides the following endpoints:

/scrape?url=<URL>: Scrape a web page and return scraped data in JSON format.

6. ### Advanced Sentiment Analysis
The sentiment analysis logic has been enhanced using the natural library. It tokenizes text, performs stemming, and uses the AFINN-111 wordlist to provide more accurate sentiment analysis results.

7. ### Contributing
Contributions are welcome! If you have ideas for improvements or new features, feel free to create a pull request.

8. ### License
This project is licensed under the MIT License.

Feel free to customize and expand this documentation to include more information, guidelines, and details specific to your project. This comprehensive guide will help users understand and make the best use of your Web Scraping API Service.