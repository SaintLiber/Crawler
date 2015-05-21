var system = require('system');
var webcrawler = require('./lib/crawler.js');
var url='';
if (system.args.length === 1) {
    console.log('Try to pass some args when invoking this script!');
	phantom.exit();
} else {
    url = system.args[1];
    console.log(url);
    webcrawler.crawler(url);
	
}