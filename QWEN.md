# eslint-config-gluons
This project is a shareable [ESLint](https://eslint.org/) configuration for JavaScript, [TypeScript](https://www.typescriptlang.org/), and [Vue](https://vuejs.org/).  
It uses [typescript-eslint](https://typescript-eslint.io/) for TypeScript support and [eslint-plugin-vue](https://eslint.vuejs.org/) for Vue support.

## Project Structure
- `src/`: Contains the source code for the ESLint configuration.
- `src/rules/`: Contains individual rule configurations.
- `tests/`: Contains test cases for the ESLint configuration.
- `fixtures/`: Contains fixture files used in tests.

## Package Manager
This project uses [Yarn](https://yarnpkg.com/) as its package manager. To install dependencies, run:

```bash
yarn install
```

## Code Style
This project follows a specific code style.
- Uses single quotes for strings.
- Uses semicolons at the end of statements.
- Does not allow trailing commas.
- Uses tabs for indentation.

## Commit Messages
This project follows the [gitmoji](https://gitmoji.dev/) convention for commit messages. Each commit message should start with an appropriate gitmoji.  
Use actual emojis characters instead of shortcodes. For example, use "✨" instead of ":sparkles:".

Use backticks around file names, package names, and code snippets in commit messages for clarity.
For example, use `package.json`, `eslint`, `someFunction()`.

## Language
The code is written in TypeScript.
