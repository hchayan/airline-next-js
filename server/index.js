const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev: false });
const handle = app.getRequestHandler();

const PORT = 443;

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`서버 실행중 port ${PORT}`);
  });
});
