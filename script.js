const textFileUrl = 'lol.txt';

fetch(textFileUrl)
    .then(response => response.text())
    .then(textData => {
        // Process the text data here
        console.log(textData);
    })
    .catch(error => console.error('Error fetching text file:', error));
