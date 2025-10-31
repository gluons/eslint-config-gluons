// Invalid JavaScript file with linting errors
const greeting = "Hello, World!" // Missing semicolon, wrong quotes

function greet(name) {
  return `${greeting} ${name}` // Wrong indentation, missing semicolon
}

var oldStyle = 'use const or let'; // Using var

const unused = 'This variable is never used';

export { greet };
