const express = require('express');
const http = require('http');

const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });

  const server = express();

  server.get('*', (req, res) => {
    res.redirect('https://' + req.header.host + req.path);
  });

  server.listen(443, () => {
    console.log('서버 실행중');
  });
});
