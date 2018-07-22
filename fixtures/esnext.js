import { readFile } from 'fs';

(function () {
	readFile('./someFile.txt', (err, data) => {
		let content = data.toString();
		console.log(content);
	});
}());
