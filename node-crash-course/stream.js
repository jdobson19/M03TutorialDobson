const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteSteam('./docs/blog4.txt');

readStream.on('data', (chunk) => {
  console.log('------------New chunk-------------');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeSteam.write(chunk);
});

//Piping
readStream.pipe(writeStream);
