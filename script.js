async function fetchQuote() {
    try {
        // Replace with your Blob Storage URL after Step 3
        const response = await fetch('https://dailyquotestoragegeneha123.blob.core.windows.net/quotes2/quotes.json');
        const quotes = await response.json();
        const today = new Date().getDay(); // Use day of week for simplicity
        const quoteOfTheDay = quotes[today % quotes.length]; // Cycle through quotes
        document.getElementById('quote').textContent = quoteOfTheDay.text;
        document.getElementById('author').textContent = `— ${quoteOfTheDay.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').textContent = 'Failed to load quote.';
        document.getElementById('author').textContent = '';
    }
}

window.onload = fetchQuote;



