const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");

async function generateQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
    const data = await response.json();
    const randomInd = Math.floor(Math.random() * data.length);
    const quote = data[randomInd].text + " - " + data[randomInd].author;
    quoteElement.innerHTML = quote;
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
}

generateButton.addEventListener('click', generateQuote);
