const fs = require('fs');

(function () {
	const someContent = fs.readFileSync('./someFile.txt');
	console.log(someContent.toString());
})();
