# Git Commit Message Instructions

## Overview

Generate commit messages following the [Gitmoji](https://gitmoji.dev/) guide. All commit messages must use **actual emoji characters** (not shortcodes like `:sparkles:`).

## Format

```
<emoji> <subject>

[optional body]

[optional footer]
```

## Rules

1. **Emoji Usage**: Use actual emoji characters (e.g., ✨, 🐛, 📝) instead of shortcodes
2. **Code Formatting**: Wrap file names, package names, and code snippets in backticks
   - Examples: `package.json`, `eslint`, `someFunction()`, `README.md`
3. **Subject Line**: 
   - Keep it concise (50 characters or less preferred)
   - Use imperative mood ("Add feature" not "Added feature")
   - Don't end with a period
4. **Body** (optional):
   - Explain what and why, not how
   - Wrap at 72 characters
   - Use backticks for technical terms
5. **Footer** (optional):
   - Reference issues/PRs if applicable
   - Breaking changes should be noted

## Complete Gitmoji Guide

| Emoji | Code | Purpose |
|-------|------|---------|
| 🎨 | `:art:` | Improve structure / format of the code |
| ⚡️ | `:zap:` | Improve performance |
| 🔥 | `:fire:` | Remove code or files |
| 🐛 | `:bug:` | Fix a bug |
| �️ | `:ambulance:` | Critical hotfix |
| ✨ | `:sparkles:` | Introduce new features |
| �📝 | `:memo:` | Add or update documentation |
| 🚀 | `:rocket:` | Deploy stuff |
| 💄 | `:lipstick:` | Add or update the UI and style files |
| 🎉 | `:tada:` | Begin a project |
| ✅ | `:white_check_mark:` | Add, update, or pass tests |
| 🔒️ | `:lock:` | Fix security or privacy issues |
| 🔐 | `:closed_lock_with_key:` | Add or update secrets |
| 🔖 | `:bookmark:` | Release / Version tags |
| 🚨 | `:rotating_light:` | Fix compiler / linter warnings |
| 🚧 | `:construction:` | Work in progress |
| 💚 | `:green_heart:` | Fix CI Build |
| ⬇️ | `:arrow_down:` | Downgrade dependencies |
| ⬆️ | `:arrow_up:` | Upgrade dependencies |
| 📌 | `:pushpin:` | Pin dependencies to specific versions |
| 👷 | `:construction_worker:` | Add or update CI build system |
| 📈 | `:chart_with_upwards_trend:` | Add or update analytics or track code |
| ♻️ | `:recycle:` | Refactor code |
| ➕ | `:heavy_plus_sign:` | Add a dependency |
| ➖ | `:heavy_minus_sign:` | Remove a dependency |
| 🔧 | `:wrench:` | Add or update configuration files |
| 🔨 | `:hammer:` | Add or update development scripts |
| 🌐 | `:globe_with_meridians:` | Internationalization and localization |
| ✏️ | `:pencil2:` | Fix typos |
| 💩 | `:poop:` | Write bad code that needs to be improved |
| ⏪️ | `:rewind:` | Revert changes |
| 🔀 | `:twisted_rightwards_arrows:` | Merge branches |
| 📦️ | `:package:` | Add or update compiled files or packages |
| 👽️ | `:alien:` | Update code due to external API changes |
| 🚚 | `:truck:` | Move or rename resources (e.g.: files, paths, routes) |
| 📄 | `:page_facing_up:` | Add or update license |
| 💥 | `:boom:` | Introduce breaking changes |
| 🍱 | `:bento:` | Add or update assets |
| ♿️ | `:wheelchair:` | Improve accessibility |
| 💡 | `:bulb:` | Add or update comments in source code |
| 🍻 | `:beers:` | Write code drunkenly |
| 💬 | `:speech_balloon:` | Add or update text and literals |
| 🗃️ | `:card_file_box:` | Perform database related changes |
| 🔊 | `:loud_sound:` | Add or update logs |
| 🔇 | `:mute:` | Remove logs |
| 👥 | `:busts_in_silhouette:` | Add or update contributor(s) |
| 🚸 | `:children_crossing:` | Improve user experience / usability |
| 🏗️ | `:building_construction:` | Make architectural changes |
| 📱 | `:iphone:` | Work on responsive design |
| 🤡 | `:clown_face:` | Mock things |
| 🥚 | `:egg:` | Add or update an easter egg |
| 🙈 | `:see_no_evil:` | Add or update a `.gitignore` file |
| 📸 | `:camera_flash:` | Add or update snapshots |
| ⚗️ | `:alembic:` | Perform experiments |
| 🔍️ | `:mag:` | Improve SEO |
| 🏷️ | `:label:` | Add or update types |
| 🌱 | `:seedling:` | Add or update seed files |
| 🚩 | `:triangular_flag_on_post:` | Add, update, or remove feature flags |
| 🥅 | `:goal_net:` | Catch errors |
| 💫 | `:dizzy:` | Add or update animations and transitions |
| 🗑️ | `:wastebasket:` | Deprecate code that needs to be cleaned up |
| 🛂 | `:passport_control:` | Work on code related to authorization, roles and permissions |
| 🩹 | `:adhesive_bandage:` | Simple fix for a non-critical issue |
| 🧐 | `:monocle_face:` | Data exploration/inspection |
| ⚰️ | `:coffin:` | Remove dead code |
| 🧪 | `:test_tube:` | Add a failing test |
| 👔 | `:necktie:` | Add or update business logic |
| 🩺 | `:stethoscope:` | Add or update healthcheck |
| 🧱 | `:bricks:` | Infrastructure related changes |
| 🧑‍💻 | `:technologist:` | Improve developer experience |
| 💸 | `:money_with_wings:` | Add sponsorships or money related infrastructure |
| 🧵 | `:thread:` | Add or update code related to multithreading or concurrency |
| 🦺 | `:safety_vest:` | Add or update code related to validation |
| ✈️ | `:airplane:` | Improve offline support |

## Examples

### Good Examples

```
✨ Add support for ESLint v9 in `index.ts`

Implement new flat config format for ESLint v9 compatibility.
Update `package.json` dependencies to support both v8 and v9.
```

```
🐛 Fix type error in `someFunction()` method

The `someFunction()` was throwing TypeScript error due to
incorrect return type annotation in `src/utils.ts`.
```

```
⬆️ Upgrade `eslint` from 8.x to 9.x

BREAKING CHANGE: Requires Node.js 18.18.0 or higher.
Migration guide: See `MIGRATION.md` for details.
```

```
📝 Update installation instructions in `README.md`
```

```
🔧 Update `tsconfig.json` with stricter type checking
```

```
♻️ Refactor `parseConfig()` to improve readability
```

### Bad Examples (DO NOT USE)

```
:sparkles: Add new feature
// ❌ Using shortcode instead of actual emoji
```

```
✨ update package.json
// ❌ Not using backticks around file name
// ❌ Not using imperative mood
```

```
🐛 fixed the bug in someFunction
// ❌ Not using backticks around function name
// ❌ Past tense instead of imperative
```

```
Updated stuff.
// ❌ No emoji
// ❌ Vague description
```

## Additional Guidelines

- Choose the most appropriate emoji from the Gitmoji guide
- When in doubt between multiple emojis, pick the one that best represents the primary purpose
- For dependency updates, use ⬆️ for upgrades, ⬇️ for downgrades, 📌 for pinning
- For breaking changes, consider using 💥 or mention "BREAKING CHANGE:" in the footer
- Keep commits atomic - one logical change per commit
- Always use backticks for technical terms: file names, package names, functions, classes, etc.
