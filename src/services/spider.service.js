import Spider from "node-spider";
import fs from "fs";
 
var pageCount = 0;

var spider = new Spider({
    // How many requests can be run in parallel
    concurrent: 5,
    // How long to wait after each request
    delay: 0,
    // A stream to where internal logs are sent, optional
    logs: process.stderr,
    // Re-visit visited URLs, false by default
    allowDuplicates: false,
    // If `true` all queued handlers will be try-catch'd, errors go to `error` callback
    catchErrors: true,
    // If `true` the spider will set the Referer header automatically on subsequent requests
    addReferrer: false,
    // If `true` adds the X-Requested-With:XMLHttpRequest header
    xhr: false,
    // If `true` adds the Connection:keep-alive header and forever option on request module
    keepAlive: false,
    // Called when there's an error, throw will be used if none is provided
    error: function(err, url) {
    },
    // Called when there are no more requests
    done: function() {
    },
 
    //- All options are passed to `request` module, for example:
    headers: { 'user-agent': 'node-spider' },
    encoding: 'utf8'
});
 
var handleRequest = function(doc) {
    // new page crawled
    // console.log(doc);
    // console.log("=======================================================================================================================================");
    if(pageCount >= 10000){
        spider.full();
        return 0;
    }
    pageCount++;
    // console.log(doc.res); // response object
    // console.log(doc.url); // page url
    const contentType = doc.res.headers['content-type'].split("=");
    var encode = contentType[1];
    if(encode === "ISO-8859-1"){
        encode = "latin1";
    }
    console.log(encode);
    fs.writeFile("pageDump/page" + pageCount + ".txt", JSON.stringify(doc.res), encode, function (err,data){
        if (err) {
            return console.log(err);    
        }
        console.log(data);
        console.log("File created");
    })
    // uses cheerio, check its docs for more info
    doc.$('a').each(function(i, elem) {
        // do stuff with element
        var href = doc.$(elem).attr('href').split('#')[0];
        var url = doc.resolve(href);
        // crawl more
        spider.queue(url, handleRequest);
    });
};

// start crawling
export function spiderStart(search){
    spider.queue('https://www.google.com.br/search?q=' + search, handleRequest);
}