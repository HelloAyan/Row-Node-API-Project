/*
 * Title: Handle Request Response
 * Description: Handle Request and response
 * Author: Ayan Ahmed Rabbi
 * Date: 27-04-2022
 * 
*/

// dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) =>{
    // request handle

    // get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace( /^\/+|\/+$/g, '');
    const queryStringObject = parseUrl.query;
    const headerOnject = req.headers;

    const decoder = new StringDecoder('utf-8');
    var realData = '';
    
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);

    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);

        // response handle
        res.write(`Hello world`);
        res.end();
    });
   
}

module.exports = handler;