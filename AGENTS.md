# eslint-config-gluons
This project is a shareable [ESLint](https://eslint.org/) configuration for JavaScript, [TypeScript](https://www.typescriptlang.org/), and [Vue](https://vuejs.org/).  
It uses [typescript-eslint](https://typescript-eslint.io/) for TypeScript support and [eslint-plugin-vue](https://eslint.vuejs.org/) for Vue support.  
For stylistic rules, it uses [ESLint Stylistic](https://eslint.style/).

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
This project follows the [gitmoji](https://gitmoji.dev/) convention for commit messages.

### Format
```
<emoji> <subject>

<body>

<footer>
```

### Rules
1. **Use actual emoji characters**, not shortcodes (e.g., `✨` not `:sparkles:`)
2. **One emoji per commit** - choose the most relevant one
3. **Use imperative mood** - "add" not "added"
4. **Keep subject under 50 characters** - be concise
5. **Use backticks** around file names, package names, and code snippets (e.g., `package.json`, `eslint`, `someFunction()`)
6. **Explain why, not what** - the body should explain reasoning
7. **Reference issues** - use `Closes #123` or `Fixes #456` in the footer
8. **Mark breaking changes** - use `BREAKING CHANGE:` footer

### Common Gitmoji
| Emoji | Description | Use Case |
|-------|-------------|----------|
| ✨ | Introduce new features | New functionality |
| 🐛 | Fix a bug | Bug fixes |
| 📝 | Add/update documentation | Docs, README, comments |
| ♻️ | Refactor code | Code refactoring |
| ✅ | Add/update/pass tests | Test-related changes |
| ⬆️ | Upgrade dependencies | Upgrading packages |
| 🔧 | Add/update config files | Configuration changes |
| 💚 | Fix CI build | CI/CD fixes |
| 🎨 | Improve structure/format | Refactoring, code structure |

For the full list of gitmoji, see: https://github.com/carloscuesta/gitmoji/blob/master/packages/gitmojis/src/gitmojis.json

## Language
The code is written in TypeScript.
