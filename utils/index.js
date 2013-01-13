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
var hciDir = path.resolve(__dirname,'../hci');


var postCache = function(callback){

  var page_cache = {};
  var title_cache = [];
  var blog_toc= [];
  var hci_toc = {
    homework: [],
    readings: [],
    projects: []
  };

  var filenames = fs.readdirSync(postsBaseDir);
  var hci = fs.readdirSync(hciDir);

  var hciFiles = {};

  for (var y = 0, v = hci.length; y<v; y++){
    if(hci[y] !== '.DS_Store')
      hciFiles[hci[y]]= fs.readdirSync(hciDir + '/' + hci[y]);
  }
  
  for (var i = 0; i< filenames.length; i++) {
    if(path.extname(filenames[i]) !== '.md' ){
      filenames.splice(i,i+1);
      i--;
    }else{
      filenames[i] = path.basename(filenames[i], '.md');
    }
  }

  body = {};

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
    var data = fs.readFileSync(file +'.md');
    //var markup = marked(data);
    //console.log(markup);
    var markup = md(data.toString()).replace(/<h1>(.*?)<\/h1>/, function(a, h1){
      title = h1;
       // turn the title into something that we can use as a link.
      id = h1.replace(/[^a-zA-Z0-9_\-]/g, '-');

      // add a link to the article to the table of contents.
      blog_toc.push('<div><a href="' + id + '">' + h1 +
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

    if(currentID) {
      console.log('generated: '+ currentID);
      partialize('blog',{post: markup},'single', function(err,output){
        page_cache[currentID] = output;
        title_cache[currentID] = title;
        body.blog ={};
        body.blog.page_cache = page_cache;
        body.blog.title_cache = title_cache;
        body.blog.toc = blog_toc;
        
      });
    }
  });
  
  for(var key in hciFiles){
    hciFiles[key].sort(function(date1,date2){
      date1 = path.basename(date1, '.md');
      date2 = path.basename(date2, '.md');

      date1 = new Date(Date.parse(date1));
      date2 = new Date(Date.parse(date2));
      if (date1 > date2){ 
        return -1;
      }else if(date1 < date2){
        return 1;
      }

      return 0;
    }).forEach(function(file){
      var date = path.basename(file, '.md'),
          id = '',
          title = '';
      var currentID;
      var currentTitle;
    
      file = path.join(hciDir,key,file);
      var data = fs.readFileSync(file);
      //var markup = marked(data);
      //console.log(markup);
      var markup = md(data.toString()).replace(/<h1>(.*?)<\/h1>/, function(a, h1){
        title = h1;
         // turn the title into something that we can use as a link.
        id = h1.replace(/[^a-zA-Z0-9_\-]/g, '-');

        // add a link to the article to the table of contents.
        hci_toc[key].push({'link':'<div class="toc_link"><a href="/hci/' +key+'/'+ id + '">' + h1 +
        '</a><span class="date">' + date + '</span></div>'});

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

      if(currentID) {
        console.log('generated: '+ currentID);
        partialize('hci',{post: markup},'single', function(err,output){
          page_cache[currentID] = output;
          title_cache[currentID] = title;
          body.hci ={};
          body.hci.page_cache = page_cache;
          body.hci.title_cache = title_cache;
          body.hci.toc = hci_toc;
          callback(null,body);
        });
      }
    });
  }
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
