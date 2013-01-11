var util = require('../utils');



function blogIndex(){

}

function blogArchiveYear(year){
}

function blogArchiveMonth(year,month){
}

function singlePost(postID, req, res){
  var that = this;
  console.log(this.page_cache);
  util.singlePost({id:postID}, function(err,output){
    if(err){
      console.log(err);
    }else{
      that.res.writeHead(200, { 'content-type': 'text/html' });
      that.res.end(output);

    }
  });
}

function me(){
  var that = this;
  util.mainPage('me', function(err, output){
    if(err){
      console.log(err);
    }else{
      that.res.writeHead(200, { 'content-type': 'text/html' });
      that.res.end(output);
    }
  });
}

function lab(){
  var that = this;
  util.mainPage('lab', function(err, output){
    if(err){
      console.log(err);
    }else{
      that.res.writeHead(200, { 'content-type': 'text/html' });
      that.res.end(output);
    }
  });
}

var routes = {
  '/blog':{
    get: blogIndex,
    '/(\[A-Za-z0-9-]+)':{
      get: singlePost
    }
  },
  '/me':{
    get: me
  },
  '/lab':{
    get: lab
  }
};

module.exports = routes;
