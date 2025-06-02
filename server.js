const http = require('http');

const todos =  [
    { id: 1, text: "Todo One"   },
    { id: 2, text: "Todo Two"   },
    { id: 3, text: "Todo Three" }
];

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // const {headers, url, method } = req;
    // console.log(`Request Method: ${method}`);
    // console.log(`Request URL: ${url}`);
    // console.log('Headers:', headers);
    
    res.setHeader("Content-Type","application/json");
    res.setHeader("X-Powered-By","Node.js");
    res.end(JSON.stringify({
        success: true,
        data: todos
    }));
}); 

// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     const {headers, url, method } = req;
//     console.log(headers, url, method);

//     console.log(`Request Method: ${method}`);
//     console.log(`Request URL: ${url}`);
//     console.log('Headers:', headers);

//     // ìst die Anfrage die ich bekomme vom client ein GET prüfe ich und gebe eine Response zurück in diesem Fall zum Test eine HTML text
//     if (method === 'GET') {
//         // HTML-Antwort
//         const html = `
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Hello World</title>
//             </head>
//             <body>
//                 <h1>Hello, World!</h1>
//                 <p>Welcome to my Node.js server.</p>
//             </body>
//             </html>
//         `;

//         // HTTP-Header für HTML setzen und HTML senden
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(html);
//     } else {
//         // Andere Methoden behandeln
//         res.writeHead(405, { 'Content-Type': 'text/plain' });
//         res.end('Method not allowed');
//     }

//     res.end();
// }); 

const P0RT = 5000;

server.listen(P0RT, () => console.log(`Server running on port ${P0RT}`));