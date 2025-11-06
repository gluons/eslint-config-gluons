// Invalid TypeScript file with linting errors
interface User {
	name: string; // Wrong indentation, missing semicolon
	age: number;
}

const greeting: string = 'Hello, World!'; // Wrong quotes, missing semicolon

function greet(user: User): string {
	return `${greeting} ${user.name}`; // Wrong indentation, missing semicolon
}

var oldStyle: string = 'use const or let'; // Using var

const unused: string = 'This variable is never used';

export { greet };
