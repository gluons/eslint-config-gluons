import * as fs from 'fs';

(function () {
	fs.readFile('./someFile.txt', (err, data) => {
		let content = data.toString();
		console.log(content);
	});
}());
