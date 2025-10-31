// Valid JavaScript file
const greeting = 'Hello, World!';

function greet(name) {
	return `${greeting} ${name}`;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

export { greet, doubled };
