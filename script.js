const textFileUrl = 'lol.txt';

fetch(textFileUrl)
    .then(response => response.text())
    .then(textData => {
        // Process the text data here
        const data = textData.split("\r\n")
        console.log(data);
    })
    .catch(error => console.error('Error fetching text file:', error));
