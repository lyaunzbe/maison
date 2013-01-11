var Hogan = require('hogan.js'),
    fs = require('fs'),
    path = require('path'),
    md = require('marked');

md.setOptions({
  gfm: true,
  pedantic: false,
  sanitize: true
 });


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

var postCache = function(callback){

  var post_cache = {};
  var toc= [];

  var filenames = fs.readdirSync(postsBaseDir);
  for (var i = 0, l = filenames.length; i<l; i++) {
    if(path.extname(filenames[i]) !== '.md' ){
      filenames.splice(i,i+1);
    }else{
      filenames[i] = path.basename(filenames[i], '.md');
    }
  }

  filenames.sort(function(date1,date2){
    date1 = new Date(Date.parse(date1));
    date2 = new Date(Date.parse(date2));

    if (date1 > date2) return -1;
    else if (date1 < date2) return 1;

    return 0;
  }).forEach(function(file){
    var date = file,
        id = '',
        title = '';
    
    var currentID;
    var currentTitle;

    file = path.join(postsBaseDir,file);
    
    var data = fs.readFileSync(file);
    //var markup = marked(data);
    //console.log(markup);
    var output = md(data.toString()).replace(/<h1>(.*?)<\/h1>/, function(a, h1){
       // turn the title into something that we can use as a link.
      id = h1.replace(/[^a-zA-Z0-9_\-]/g, '-');

      // add a link to the article to the table of contents.
      toc.push('<div><a href="' + id + '">' + h1 +
      '</a><span class="date">' + date + '</span></div>');

      //
      // First header
      //
      if(!currentID) {
        currentID = id;
        currentTitle = title;
      }

      // return the new version of the header.
      return '<a id="' + id + '"><h1><a href="#' + id + '">' + h1 +
        '</a></h1>';    
    });
    console.log(toc);
  });

  callback(null, filenames);
};

exports.postCache = postCache;


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
