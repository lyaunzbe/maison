var Hogan = require('hogan.js'),
    fs = require('fs'),
    path = require('path'),
    md = require('node-markdown').Markdown;

var findit = require('findit');

var viewBaseDir = path.resolve(__dirname,'../views');

/**
 * Given a view directory, a variable context, and partial,
 * return a compiled, rendered template.
 *
 * @param {String} viewDir Name of the view directory to operate on
 * @param {String} context A JSON object containing the data context for
 *                         the template
 * @param {String} partial Name of the partial file
 */

var partialize = function(viewDir,context, partial,callback){
  fs.readFile(viewBaseDir+'/'+viewDir+'/layout.hogan', function(err, data){
      if(err){
        callback(err);
      }else{
        var template = Hogan.compile(data.toString());
        fs.readFile(viewBaseDir+'/'+viewDir+'/'+partial+'.hogan', function(err, dataPartial){
          if(err){
            callback(err);
          }else{
            var p = {};
            p[partial] = dataPartial.toString();
            var output = template.render(context,p);
            callback(null,output);
            
          }
        });
      }
  });
};

exports.partialize = partialize;

var postsBaseDir = path.resolve(__dirname,'../posts');

var md2html = function(path, callback){
  fs.readFile(path, function(err, data){
    if(err){
      callback(err);
    }else{
      var html = md(data.toString());
      callback(null, html);

    }
  });
};

exports.md2html = md2html;

var singlePost = function(post, callback){

  var path = postsBaseDir + '/' +
             post.year    + '/' +
             post.month   + '/' +
             post.id      + '.md' ;

  md2html(path, function(err, html){
    if(err){
      callback(err);
    }else{
      partialize('blog', {singlePost:{post:html}}, 'single', function(err,output){
        if(err){
          callback(err);
        }else{
          callback(null, output);
        }
      });
    }
  });

};

exports.singlePost = singlePost;

var yearArchive = function(year, callback){

};

exports.yearArchive = yearArchive;

var monthArchive = function(month, callback){

};

exports.monthArchive = monthArchive;

var indexPage = function(limit, offset, callback){
  
};

exports.indexPage = indexPage;


var mainPage = function(page, callback){
  partialize('main_site',null,page, function(err, output){
    if(err){
      callback(err);
    }else{
      callback(null,output);
    }
  });
};

exports.mainPage = mainPage;
