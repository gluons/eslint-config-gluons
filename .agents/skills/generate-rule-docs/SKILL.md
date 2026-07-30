---
name: generate-rule-docs
description: 'Generate Vue documentation page components from eslint-config-gluons rule definitions. Use when: updating the docs site after the package changes, scaffolding a new rule category page, or rebuilding all rule docs from scratch.'
argument-hint: 'Category: all, main, stylistic, ts, vue — or leave empty for interactive selection'
---

# Generate ESLint Rule Documentation

Generates Vue single-file components that document the rules from the `eslint-config-gluons` package. Each rule category gets its own page with formatted tables, severity badges, and rule-level details.

## When to Use

- After updating the `eslint-config-gluons` dependency to a new version
- Scaffolding a new rule category page for the docs site
- Rebuilding all rule documentation from scratch
- Adding a new rule category type

## Procedure

### 1. Determine Scope

- **`all`** — Generate pages for all four rule categories
- **`main`** — Core JS rules only
- **`stylistic`** — Stylistic/formatting rules only
- **`ts`** — TypeScript rules only
- **`vue`** — Vue rules only

If no argument is provided, generate all four by default.

### 2. Read Rule Definitions

Load the appropriate source files from the installed package:

| Category        | Source File                                                 |
| --------------- | ----------------------------------------------------------- |
| main (core JS)  | `node_modules/eslint-config-gluons/dist/rules/main.js`      |
| stylistic       | `node_modules/eslint-config-gluons/dist/rules/stylistic.js` |
| ts (TypeScript) | `node_modules/eslint-config-gluons/dist/rules/ts.js`        |
| vue             | `node_modules/eslint-config-gluons/dist/rules/vue.js`       |

Extract each rule entry (key-value pairs under the `rules` object). Note the rule name, severity (`'error'`, `'warn'`, `'off'`), and any configuration options.

### 3. Fetch Rule Descriptions

For each rule, look up its description from ESLint's official documentation:

| Rule Source                | Docs URL                                           |
| -------------------------- | -------------------------------------------------- |
| Built-in ESLint rules      | `https://eslint.org/docs/latest/rules/<rule-name>` |
| `@stylistic` rules         | `https://eslint.style/rules/<rule-name>`           |
| `@typescript-eslint` rules | `https://typescript-eslint.io/rules/<rule-name>`   |
| `eslint-plugin-vue` rules  | `https://eslint.vuejs.org/rules/<rule-name>`       |

Fetch the description from the docs page. If the page is unavailable, derive a concise description from the rule name and its configuration.

### 4. Create Vue Page Component

For each category, create (or update) a component in `src/pages/`:

| Category  | Component                       | Purpose          |
| --------- | ------------------------------- | ---------------- |
| main      | `src/pages/RulesMain.vue`      | Core JS rules    |
| stylistic | `src/pages/RulesStylistic.vue` | Stylistic rules  |
| ts        | `src/pages/RulesTs.vue`        | TypeScript rules |
| vue       | `src/pages/RulesVue.vue`       | Vue rules        |

Each component must:

- Use `<script setup lang="ts">` (Composition API + TypeScript)
- Use **tabs** for indentation
- Use **single quotes** and **semicolons**
- Import Buefy components (e.g., `{ BTable, BTag, BMessage, BIcon }` from `'buefy'`)
- Import Font Awesome icon CSS if needed (`@fortawesome/fontawesome-free/css/all.css`)
- Present rules in a **Buefy table** (`<BTable>`) with columns:
    - **Rule** — The rule name (e.g., `'no-console'`, `'@stylistic/indent'`)
    - **Severity** — A badge/tag showing `error`, `warn`, or `off`
    - **Config** — A summary of the configuration values
    - **Description** — A brief explanation fetched from ESLint docs

### 5. Register Route and Add Navbar Item

**Register the route** in `src/router.ts` — add an entry to the `routes` array with the path, name, and imported component:

```ts
{
	path: '/rules/<category>',
	name: 'rules-<category>',
	component: Rules<Category>
}
```

**Add a navbar item** in `src/App.vue` inside the `<b-navbar-dropdown>` (Rules dropdown):

```vue
<b-navbar-item
	tag="router-link"
	to="/rules/<category>"
	:active="route.name === 'rules-<category>'"
>
	<Category>
</b-navbar-item>
```

No manual imports are needed in `App.vue` — Vue Router handles component resolution via the route definition.

### 6. Run Dev Server

Run `yarn dev` to verify the output renders correctly in the browser.

## Conventions

- **Component names:** `Rules<Category>.vue` (PascalCase)
- **File names:** `Rules<Category>.vue` matching the component name
- **Rule order:** Preserve the order they appear in the source file
- **Severity display:** Use `BTag` with `type="is-danger"` for error, `type="is-warning"` for warn, `type="is-light"` for off
- **Rule name:** Display in a monospace font (can wrap in `<code>` or use Buefy tag styling)

## Reference

- [AGENTS.md](../../../AGENTS.md) — Project conventions, routing table, and navbar setup
- [Vue Router](https://router.vuejs.org/) — SPA routing
- [Buefy Navbar](https://buefy.org/documentation/navbar) — Navigation bar with dropdowns
- [Buefy Table](https://buefy.org/documentation/table) — Component for displaying rules
- [Buefy Tag](https://buefy.org/documentation/tag) — Severity badges
- [Buefy Message](https://buefy.org/documentation/message) — Info boxes for rule descriptions
- [eslint-config-gluons package](../../../node_modules/eslint-config-gluons/) — Rule definitions
