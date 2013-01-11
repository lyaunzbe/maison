var union = require('union'),
    ecstatic = require('ecstatic'),
    director = require('director'),
    routes = require('./routes'),
    util = require('./utils');

util.postCache(function(err, body){
  console.log(body);
});
var router = new director.http.Router(routes);

router.attach(function () {
    this.page_cache = [];
});

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
