var page = require('webpage').create();

function crawler(url){

	page.open(url, function (status) {
		var title = page.evaluate(function () {
			var plist = document.querySelectorAll("a");
			var li='[';
			for(var i=0;i<plist.length;i++){
				var _href = plist[i].href;
				if(_href){
					if(_href!==url){
						li+=_href+']\r\n[';
					}
				}
			}
			li+=']\r\n';
			return li;
		});
		console.log(title);
		/*
		console.log(title.length);
		title.forEach(function(data){
			console.log(data);
		});
		*/
		//return title;
	});
}
exports.crawler = crawler;