let apiQuotes = [];

function newQuote() {
    // Pick a random quote from apiQuotes array.
    const index = Math.floor(Math.random() * apiQuotes.length);
    const quote = apiQuotes[index];
    
    return quote;
}

// Get Quotes From API.
async function getQuotes() {
    const url = "https://type.fit/api/quotes";
    try {
        const response = await fetch(url);
        apiQuotes = await response.json();
        console.log(newQuote());        
    } catch (error) {
        console.log("Hubo un error");
    }
}

// On Load Page.
getQuotes();