var util = require('../utils'),
    path = require('path');



function blogIndex(){

}

function blogArchiveYear(year){
}

function blogArchiveMonth(year,month){
}

function hciMain(req,res){
  var that =this;
  util.partialize('hci', null, 'me', function(err, output){
    that.res.writeHead(200, { 'content-type': 'text/html' });
    that.res.end(output);
    
  });
}

function hciPost(postID,req,res){
  var section = path.basename(path.dirname(this.req.url));
  if(this.body.hci.page_cache[postID]){
    this.res.writeHead(200, { 'content-type': 'text/html' });
    this.res.end(this.body.hci.page_cache[postID]);

  }
}


function rIndex(req,res){
  var that = this;
  console.log(this.body.hci.toc['readings']);
  context = {indexPage : {
    toc: this.body.hci.toc['readings'],
    page: 'Readings'
  }};
  util.partialize('hci',context , 'index', function(err, output){
    that.res.writeHead(200, { 'content-type': 'text/html' });
    that.res.end(output);
  });
}

function pIndex(req,res){
  var that = this;
  context = {indexPage : {
    toc: this.body.hci.toc['projects'],
    page: 'Projects'
  }};
  util.partialize('hci',context , 'index', function(err, output){
    that.res.writeHead(200, { 'content-type': 'text/html' });
    that.res.end(output);
  });
}

function hIndex(req,res){
  var that = this;
  context = {indexPage : {
    toc: this.body.hci.toc['homeworks'],
    page: 'Homeworks'
  }};
  util.partialize('hci',context , 'index', function(err, output){
    that.res.writeHead(200, { 'content-type': 'text/html' });
    that.res.end(output);
  });
}



function singlePost(postID, req, res){
  var that = this;
  console.log(this.body.hci);
  if(this.body.blog.page_cache[postID]){
    that.res.writeHead(200, { 'content-type': 'text/html' });
    that.res.end(this.body.blog.page_cache[postID]);
  }
  //util.singlePost({id:postID}, function(err,output){
    //if(err){
      //console.log(err);
    //}else{
      //that.res.writeHead(200, { 'content-type': 'text/html' });
      //that.res.end(output);

    //}
  //});
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
  '/hci':{
    get: hciMain,
    '/readings':{
      get: rIndex,
      '/(\[A-Za-z0-9-]+)':{
        get: hciPost
      }
    },
    '/homework':{
      get: hIndex,
      '/(\[A-Za-z0-9-]+)':{
        get: hciPost
      }
    },
    '/projects':{
      get: pIndex,
      '/(\[A-Za-z0-9-]+)':{
        get: hciPost
      }
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
