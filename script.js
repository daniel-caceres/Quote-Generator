const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const btnNewQuote = document.getElementById('new-quote');
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote() {
    // Pick a random quote from apiQuotes array.
    const index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];

    // Check if Author is blank and replace it with 'Unknown'.
    if (!quote.author) {
        authorText.textContent = 'Unknown';    
    } else {
        authorText.textContent = quote.author;    
    }
    // Check Quote Length to determine styling.
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader.
    quoteText.textContent = quote.text;    
    // Hide the loader.
    complete();
}

// Get Quotes From API.
async function getQuotes() {
    // Show the loader.
    loading()
    const url = "https://type.fit/api/quotes";
    try {
        const response = await fetch(url);
        apiQuotes = await response.json();
        newQuote();        
    } catch (error) {
        alert("Hubo un error ");
    }
}

// Tweet Quote.
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    // Open a new window at twitter.
    window.open(twitterUrl,  '_blank');
}

// Event Listeners.
btnNewQuote.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load Page.
getQuotes();