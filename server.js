var union = require('union')
    , ecstatic = require('ecstatic')
    , director = require('director')
    , routes = require('./routes');

var router = new director.http.Router(routes);

var server = union.createServer({
  before: [
    ecstatic({ root: __dirname + '/public', autoIndex:true }),
    function (req, res) {
      var found = router.dispatch(req, res);
      if (!found) {
        res.emit('next');
      }
    }
  ]
});

//BLOG ROUTES

server.listen(8080);


console.log('Listening on :8080');
