import { readFile } from 'fs';

function readFileAsPromise(filePath: string): Promise<string> {
	return new Promise((resolve, reject) => {
		readFile(filePath, (err, data) => {
			if (err) {
				reject(err);

				return;
			}

			resolve(data.toString());
		});
	});
}

(async function () {
	const someContent = await readFileAsPromise('./someFile.txt');

	console.log(someContent);
})();
