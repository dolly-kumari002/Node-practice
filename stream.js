const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('error', (err) => {
  console.error(" Error reading file:", err.message);
});

writeStream.on('error', (err) => {
  console.error(" Error writing file:", err.message);
});

readStream.pipe(writeStream);

console.log("Data streaming from input.txt to output.txt...");
