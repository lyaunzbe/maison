var util = require('../utils');



function blogIndex(){

}

function blogArchiveYear(year){
  console.log(year);
}

function blogArchiveMonth(year,month){
  console.log(year+' :: '+month);
}

function singlePost(year, month, postID, req, res){
  var that = this;
  console.log(year+' :: '+month+' :: '+postID);
  util.singlePost({year:year,month:month,id:postID}, function(err,output){
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
    '/(\\d{4})':{
      get: blogArchiveYear,
      '/(\\d{2})':{
        get: blogArchiveMonth,
        '/(\[A-Za-z0-9-]+)':{
          get: singlePost
        }
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
