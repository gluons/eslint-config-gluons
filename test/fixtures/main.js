import { readFileSync } from 'node:fs';

const readText = (filePath) => {
	const buffer = readFileSync(filePath);

	return buffer.toString();
};

const logContent = () => {
	const content = readText('./sample.txt');
	console.info(content.trim());
};

logContent();
