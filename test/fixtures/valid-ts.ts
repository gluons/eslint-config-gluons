// Valid TypeScript file
interface User {
	name: string;
	age: number;
}

const greeting: string = 'Hello, World!';

function greet(user: User): string {
	return `${greeting} ${user.name}, age ${user.age}`;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map((n: number) => n * 2);

export { greet, doubled };
export type { User };
