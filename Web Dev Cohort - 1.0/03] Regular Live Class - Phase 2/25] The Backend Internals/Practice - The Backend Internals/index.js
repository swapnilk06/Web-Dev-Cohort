const fs = require('fs');

fs.writeFile('./test.txt', 'Hello World', () => {}); // blocking code

console.log({ __filename, __dirname });
