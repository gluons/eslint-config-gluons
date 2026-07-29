---
description: Commit staged changes
agent: plan
---

Commit staged changes with a message following the Gitmoji convention.
Always refer to the official Gitmoji JSON source (https://github.com/carloscuesta/gitmoji/blob/master/packages/gitmojis/src/gitmojis.json) to select the appropriate emoji for the commit message.
Always use the real emoji character itself, not the emoji shortcode (e.g., use `🐛` instead of `:bug:`).

When referencing file names, code snippets, functions, or other code elements in commit messages, always wrap them in backticks (`` ` ``). Examples:

- File names: Update `package.json` configuration
- Functions: Fix `calculateTotal()` function logic
- Variables: Rename `MAX_RETRIES` constant
- Code snippets: Change `const x = 5` to `const x = 10`
- Properties: Update `user.email` validation
- Module names: Import `lodash` utilities
- File paths: Modified `src/validators.ts` file

Do NOT execute `git commit` immediately. Show the user the proposed commit message first and wait for their confirmation before running the commit.

After committing, do NOT push the changes to the remote. Only commit locally.
