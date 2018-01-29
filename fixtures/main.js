var fs = require('fs');

(function () {
	var someContent = fs.readFileSync('./someFile.txt');
	console.log(someContent.toString());
}());
