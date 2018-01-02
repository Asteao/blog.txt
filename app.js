const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('-----asteao-----\n');
  fs.readFile('/vagrant/post1', printFile);
  function printFile (error, file) {
    if (error) console.error('error!', error)
    else res.write(file);
    res.end();
  };
});



server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
