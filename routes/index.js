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
  //util.md2html(postID, function(err, html){
    //util.partialize('blog', {singlePost:{post:html}},'single', 
                  //function(err,output){
                    //if(err){
                      //console.log(err);
                    //}else{
                      //that.res.writeHead(200, { 'content-type': 'text/html' });
                      //that.res.end(output);
                    //}});
  //});
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
  }
};

module.exports = routes;
