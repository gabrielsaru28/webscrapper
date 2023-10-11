document.getElementById('scrape-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('https://wsa-test.vercel.app/').value;
    const response = await fetch(`/scrape?url=${url}`);
    const data = await response.json();
    displayResults(data);
});

function displayResults(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = JSON.stringify(data, null, 2);
}
