const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const btnNewQuote = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote() {
    // Pick a random quote from apiQuotes array.
    const index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];

    // Check if Author is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';    
    } else {
        authorText.textContent = quote.author;    
    }
    // Check Quote Length to determine styling
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;    
}

// Get Quotes From API.
async function getQuotes() {
    const url = "https://type.fit/api/quotes";
    try {
        const response = await fetch(url);
        apiQuotes = await response.json();
        console.log(newQuote());        
    } catch (error) {
        console.log("Hubo un error " + error);
    }
}

// On Load Page.
getQuotes();