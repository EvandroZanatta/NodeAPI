var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(process.env.PORT, process.env.IP, function() {
  console.log('%s ouvindo em %s:%s', server.name, process.env.IP, process.env.PORT);
});