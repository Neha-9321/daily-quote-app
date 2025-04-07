let quotes = [];

async function fetchQuotes() {
  try {
    const response = await fetch('https://dailyquotestorageneha123.blob.core.windows.net/quotes2/quotes.json');
    quotes = await response.json();
    showRandomQuote();
  } catch (error) {
    console.error('Error fetching quote:', error);
    document.getElementById('quote').textContent = 'Failed to load quote.';
    document.getElementById('author').textContent = '';
  }
}

function showRandomQuote() {
  if (quotes.length === 0) return;
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  document.getElementById('quote').textContent = quote.text;
  document.getElementById('author').textContent = `— ${quote.author}`;
}

document.getElementById('new-quote').addEventListener('click', showRandomQuote);

window.onload = fetchQuotes;
