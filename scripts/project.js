document.getElementById('quoteButton').addEventListener('click', async function() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3373cd5f2emsh51a631eaf79823bp167761jsnb8459d72f3fd',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const quoteData = await response.json();
        const quoteContent = quoteData.content;
        let quoteAuthor = '';
        if (typeof quoteData.originator === 'object') {
            quoteAuthor = quoteData.originator.name || 'Unknown';
        } else {
            quoteAuthor = quoteData.originator || 'Unknown';
        }
        document.getElementById('quoteContent').textContent = quoteContent;
        document.getElementById('quoteAuthor').textContent = 'Author: ' + quoteAuthor;
        if (quoteData.media) {
            document.getElementById('quoteImage').src = quoteData.media;
            document.getElementById('quoteImage').style.display = 'block';
        } else {
            document.getElementById('quoteImage').style.display = 'none';
        }
        document.getElementById('quoteSource').href = quoteData.url;
    } catch (error) {
        console.error(error);
    }
});
