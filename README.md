# eslint-config-gluons
[![license](https://img.shields.io/github/license/gluons/eslint-config-gluons.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-gluons?style=flat-square&logo=npm)](https://www.npmjs.com/package/eslint-config-gluons)
[![Node](https://img.shields.io/node/v/eslint-config-gluons?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![ESLint](https://img.shields.io/badge/ESLint%20Config-gluons-4b32c3?style=flat-square&logo=eslint)
](https://github.com/gluons/eslint-config-gluons)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/gluons/eslint-config-gluons/lint-test.yml?branch=master&style=flat-square&logo=githubactions)](https://github.com/gluons/eslint-config-gluons/actions/workflows/lint-test.yml)

[gluons](https://github.com/gluons)' personal [ESLint](https://eslint.org/) shareable config

A set of my ❤️ favorite rules.

<br>

🌤🌨🚀🌨🌨  
❄️❄️❄️❄️❄️  
❄️❄️❄️❄️❄️  
🎄🎄☃⛷🏔

<br>

## Installation

**Via [npm](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/eslint-config-gluons.png?compact=true)](https://www.npmjs.com/package/eslint-config-gluons)

```bash
npm install -D eslint @eslint/js prettier eslint-config-gluons
```

**Via [pnpm](https://pnpm.js.org/):**

```bash
pnpm install -D eslint @eslint/js prettier eslint-config-gluons
```

**Via [Yarn](https://yarnpkg.com):**

```bash
yarn add -D eslint @eslint/js prettier eslint-config-gluons
```

---

### Using with [TypeScript](https://www.typescriptlang.org)

Install [**TypeScript ESLint**](https://typescript-eslint.io).

**Via [npm](https://www.npmjs.com):**

```bash
npm install -D typescript-eslint
```

**Via [pnpm](https://pnpm.js.org/):**

```bash
pnpm install -D typescript-eslint
```

**Via [Yarn](https://yarnpkg.com):**

```bash
yarn add -D typescript-eslint
```

---

### Using with [Vue](https://vuejs.org)

Install [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue).

**Via [npm](https://www.npmjs.com):**

```bash
npm install -D eslint-plugin-vue
```

**Via [pnpm](https://pnpm.js.org/):**

```bash
pnpm install -D eslint-plugin-vue
```

**Via [Yarn](https://yarnpkg.com):**

```bash
yarn add -D eslint-plugin-vue
```

## Usage

**Normal:**

`eslint.config.js`
```js
import { defineConfig } from 'eslint/config';
import configGluons from 'eslint-config-gluons';

export default defineConfig([
	{
		files: ["**/*.js"],
		extends: [configGluons]
	}
]);
```

**TypeScript:**

`eslint.config.js`
```js
import { defineConfig } from 'eslint/config';
import configGluonsTs from 'eslint-config-gluons/ts';

export default defineConfig([
	{
		files: ["**/*.ts"],
		extends: [configGluonsTs]
	}
]);
```

**Vue:**

`eslint.config.js`
```js
import { defineConfig } from 'eslint/config';
import configGluonsVue from 'eslint-config-gluons/vue';

export default defineConfig([
	{
		files: ["**/*.vue"],
		extends: [configGluonsVue]
	}
]);
```

**Vue + TypeScript:**

`eslint.config.js`
```js
import { defineConfig } from 'eslint/config';
import configGluonsVueTs from 'eslint-config-gluons/vue-ts';

export default defineConfig([
	{
		files: ["**/*.vue", "**/*.ts"],
		extends: [configGluonsVueTs]
	}
]);
```

## Badge

[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9c27b0?style=flat-square&logo=eslint)](https://github.com/gluons/eslint-config-gluons)

```markdown
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9c27b0?style=flat-square&logo=eslint)](https://github.com/gluons/eslint-config-gluons)
```
