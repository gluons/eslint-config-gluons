# eslint-config-gluons Docs — Agent Guide

## Project Overview

This is the documentation website for the [`eslint-config-gluons`](https://github.com/gluons/eslint-config-gluons) npm package — a personal ESLint shareable config. The docs are built from the ESLint rules defined in that package.

## Tech Stack

- **Package manager:** Yarn (v4, with `yarn.lock`)
- **Framework:** Vue 3 (Composition API, `<script setup lang="ts">`)
- **Build tool:** Vite
- **Language:** TypeScript
- **UI library:** [Buefy v3](https://buefy.org/) (Bulma-based Vue 3 components)
- **Icons:** Font Awesome Free (`@fortawesome/fontawesome-free`)
- **Formatter:** Prettier (config: `@gluons/prettier-config`)
- **Style:** Tabs for indentation, single quotes, semicolons required

## Commands

| Command                 | Purpose                                             |
| ----------------------- | --------------------------------------------------- |
| `yarn dev`              | Start Vite dev server                               |
| `yarn build`            | Type-check (`vue-tsc -b`) then build (`vite build`) |
| `yarn preview`          | Preview production build locally                    |
| `yarn format`           | Format all files with Prettier                      |
| `yarn add <package>`    | Add a dependency                                    |
| `yarn add -D <package>` | Add a dev dependency                                |

## Architecture

- **`src/main.ts`** — Vue app entry point (mounts `App`)
- **`src/App.vue`** — Root component
- **`src/components/`** — Vue single-file components
- **`src/style.css`** — Global styles (CSS custom properties, light/dark mode via `prefers-color-scheme`)
- **`src/assets/`** — Static images/icons
- **`public/`** — Static files served at root (`favicon.svg`, `icons.svg`)
- **`node_modules/eslint-config-gluons/dist/`** — The installed ESLint config package whose rules are documented

## Key Conventions

1. **Vue components** use `<script setup lang="ts">` syntax (Composition API + TypeScript).
2. **Indentation:** Tabs (not spaces), enforced by ESLint (`@stylistic/indent: tab`).
3. **Quotes:** Single quotes preferred; double quotes only to avoid escaping.
4. **Semicolons:** Required everywhere.
5. **Trailing commas:** Required (enforced by `@stylistic/comma-dangle`).
6. **Naming:** camelCase for variables/functions, PascalCase for components.
7. **Unused variables:** Variables prefixed with `_` are allowed (e.g., `_unused`).
8. **Formatting:** Run `npm run format` (Prettier) before committing — the ESLint config includes `eslint-plugin-prettier`.
9. **CSS:** Custom properties for theming (light/dark mode). Buefy/Bulma utility classes available.

## Buefy Usage

- Import components from `buefy` (e.g., `import { BButton, BField, BInput } from 'buefy';`).
- Buefy v3 uses the Composition API and is tree-shakable.
- Requires Bulma's CSS (included via Buefy).
- See [Buefy documentation](https://buefy.org/) for component API.

## ESLint Config Structure

The `eslint-config-gluons` package exports four configs:

| Export                        | Use Case         |
| ----------------------------- | ---------------- |
| `eslint-config-gluons`        | Plain JS/Node    |
| `eslint-config-gluons/ts`     | TypeScript       |
| `eslint-config-gluons/vue`    | Vue (JS)         |
| `eslint-config-gluons/vue-ts` | Vue + TypeScript |

The docs site should cover/enumerate all rules from each of these configs.

## Documentation Generation

This site documents the rules from the `eslint-config-gluons` package. The rule definitions can be imported/generated from:

- `node_modules/eslint-config-gluons/dist/rules/main.js` — core JS rules
- `node_modules/eslint-config-gluons/dist/rules/stylistic.js` — stylistic rules
- `node_modules/eslint-config-gluons/dist/rules/ts.js` — TypeScript rules
- `node_modules/eslint-config-gluons/dist/rules/vue.js` — Vue rules
