const https = require('https');

// making a request to a server, ordering the book online
https.get('https://qa1-aws.oceaniacruises.com/request-brochure', (response) => {
    // prepare to receive data, prepare to receive the book, making space on the shelf
    let data = '';

    // receiving data, receiving the book by each chapter, then adding it to the shelf, data
    response.on('data', (chunk) => {
        data += chunk;
    });

    // all data has been received, the book is complete
    response.on('end', () => {
        console.log(data);
    });

}).on('error', (error) => {
    console.error(error);
});