// server.js
const express = require('express');
const next = require('next');
// const apiRoutes = require('./src/express-api/app.js');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
console.log(dev)
const app = next({ dev, dir: '.' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Use your Express API routes under the `/api` namespace
  // server.use('/api', apiRoutes);
  server.use('/public', express.static(path.join(__dirname, '/public')));

  // Handle all other Next.js routes
  // Express 5 + path-to-regexp v6: use a regex wildcard instead of "*"
  server.all(/.*/, (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Error preparing Next.js application:', err);
});
