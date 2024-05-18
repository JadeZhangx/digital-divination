document.addEventListener('DOMContentLoaded', function() {
    // Check if moonForm exists
    const moonForm = document.getElementById('moonForm');
    if (moonForm) {
        moonForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userObservation = document.getElementById('moonInput').value;
            localStorage.setItem('userMoonObservation', userObservation);  // Store user input
            window.location.href = 'moonphase.html';  // Redirect to the moon phase page
        });
    }

    // Check if quoteButton exists
    const quoteButton = document.getElementById('quoteButton');
    if (quoteButton) {
        quoteButton.addEventListener('click', function() {
            window.location.href = 'quotes.html'; // Redirect to the Quotes page
        });
    }

document.addEventListener('DOMContentLoaded', function() {
    // Use your Glitch project URL here
    const api_url = "https://your-project-name.glitch.me/https://zenquotes.io/api/random/";

    async function fetchQuote() {
        try {
            const response = await fetch(api_url);
            const quotes = await response.json();
            if (quotes.length > 0) {
                document.getElementById('quote').textContent = `"${quotes[0].q}"`;
                document.getElementById('author').textContent = `- ${quotes[0].a}`;
            }
        } catch (error) {
            console.error('Failed to fetch quote:', error);
            document.getElementById('quote').textContent = 'Failed to load quote.';
        }
    }

    document.getElementById('newQuoteButton').addEventListener('click', fetchQuote);

    // Fetch a new quote when the page loads
    fetchQuote();
});

});




