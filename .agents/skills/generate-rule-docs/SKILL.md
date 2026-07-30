---
name: generate-rule-docs
description: 'Generate Vue documentation page components from eslint-config-gluons rule definitions. Use when: updating the docs site after the package changes, scaffolding a new rule category page, or rebuilding all rule docs from scratch.'
argument-hint: 'Category: all, main, stylistic, ts, vue — or leave empty for interactive selection'
---

# Generate ESLint Rule Documentation

Generates Vue single-file components that document the rules from the `eslint-config-gluons` package. Each rule category gets its own page with formatted tables, severity badges, clickable rule links, and rule-level details.

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

Each file uses `defineConfig()` and exports an array of config objects. The rules live under the `rules` property of one of those config objects (typically the last one). Extract each rule entry as key-value pairs.

**Rule value formats:**

| Format                              | Meaning                                 |
| ----------------------------------- | --------------------------------------- |
| `'error'` or `'warn'` or `'off'`    | Simple severity string                  |
| `['error', 'as-needed']`            | Severity + config as array              |
| `['error', { before: true }]`       | Severity + object config                |
| `isProd ? 'error' : 'off'`          | Conditional severity based on `NODE_ENV`|

Map each rule to a `RuleEntry` object with these fields:

| Field        | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `name`       | Full rule name including prefix (e.g., `'@stylistic/indent'`)               |
| `url`        | Link to official docs (see URL patterns below)                             |
| `severity`   | Severity string. For conditional rules use `'error (production) / off (development)'` |
| `config`     | Human-readable summary of config options, or empty string `''` if none      |
| `description`| Brief explanation fetched from or derived from official docs               |

**URL patterns** (strip the prefix from the rule name to form the URL):

| Rule Prefix             | Docs URL Pattern                                       | Example                                                   |
| ----------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| (built-in ESLint)       | `https://eslint.org/docs/latest/rules/<name>`          | `no-console` → `https://eslint.org/docs/latest/rules/no-console` |
| `@stylistic/`           | `https://eslint.style/rules/<name>`                    | `@stylistic/indent` → `https://eslint.style/rules/indent` |
| `@typescript-eslint/`   | `https://typescript-eslint.io/rules/<name>`            | `@typescript-eslint/no-unused-vars` → `https://typescript-eslint.io/rules/no-unused-vars` |
| `vue/`                  | `https://eslint.vuejs.org/rules/<name>`                | `vue/html-indent` → `https://eslint.vuejs.org/rules/html-indent` |

### 3. Fetch Rule Descriptions

For each rule, look up its description from the official documentation URL (see URL patterns above). Fetch the description from the docs page. If the page is unavailable, derive a concise description from the rule name and its configuration.

### 4. Create Vue Page Component

For each category, create (or update) a component in `src/pages/`:

| Category  | Component                       | Purpose          |
| --------- | ------------------------------- | ---------------- |
| main      | `src/pages/RulesMain.vue`      | Core JS rules    |
| stylistic | `src/pages/RulesStylistic.vue` | Stylistic rules  |
| ts        | `src/pages/RulesTs.vue`        | TypeScript rules |
| vue       | `src/pages/RulesVue.vue`       | Vue rules        |

Each component must use the following template pattern:

#### Script Section (`<script setup lang="ts">`)

```ts
import { BTable, BTableColumn, BTag } from 'buefy';

interface RuleEntry {
	name: string;
	url: string;
	severity: string;
	config: string;
	description: string;
}

const rules: RuleEntry[] = [
	// ... extracted rules
];

function severityType(severity: string): string {
	if (severity.startsWith('error')) {
		return 'is-danger';
	}
	if (severity.startsWith('warn')) {
		return 'is-warning';
	}
	return 'is-light';
}

function displaySeverity(severity: string): string {
	return severity.startsWith('error')
		? 'error'
		: severity === 'warn'
			? 'warn'
			: 'off';
}
```

**Notes:**
- Use `severity.startsWith()` for conditional severities (e.g., `'error (production) / off (development)'`).
- Use `displaySeverity()` to extract the short label from conditional severity strings.
- Import `BTableColumn` (not just `BTable`) — it is needed for column definitions.

#### Template Section

```vue
<section class="rules-section">
	<h2><Category Name> Rules</h2>
	<p class="rules-intro">
		Intro paragraph with a link to the plugin's homepage.
	</p>
	<BTable :data="rules" striped hoverable narrowed>
		<BTableColumn field="name" label="Rule" width="280">
			<template #default="props">
				<a
					:href="props.row.url"
					target="_blank"
					rel="noopener noreferrer"
					class="rule-link"
				>
					<code>{{ props.row.name }}</code>
				</a>
			</template>
		</BTableColumn>
		<BTableColumn field="severity" label="Severity" width="200">
			<template #default="props">
				<BTag :type="severityType(props.row.severity)">
					{{ displaySeverity(props.row.severity) }}
				</BTag>
			</template>
		</BTableColumn>
		<BTableColumn field="config" label="Config">
			<template #default="props">
				<span v-if="props.row.config">{{ props.row.config }}</span>
				<span v-else class="no-config">—</span>
			</template>
		</BTableColumn>
		<BTableColumn field="description" label="Description">
			<template #default="props">
				{{ props.row.description }}
			</template>
		</BTableColumn>
	</BTable>
</section>
```

**Important:**
- The rule name is wrapped in `<a>` with `:href="props.row.url"` and `class="rule-link"` — it must open the official docs in a new tab.
- Rules with empty config show `—` (using span with class `no-config`).
- Use `#default="props"` (not `#default="{ row }"`) for slot access.
- The `BTable` uses `striped hoverable narrowed` props.
- Set `width` on the Rule and Severity columns for consistent layout.

#### Style Section

No scoped styles needed in the component — shared styles live in `src/styles/rules-shared.css` (already globally imported). That file provides:

| Class            | Purpose                                       |
| ---------------- | --------------------------------------------- |
| `.rules-section` | Padding and text alignment for the page       |
| `.rules-intro`   | Bottom margin for the intro paragraph         |
| `.no-config`     | Dimmed dash for rules without configuration   |
| `.rule-link`     | Link styling; inherits color, accent on hover |

### 5. Register Route and Add Navbar Item

#### Route Registration (`src/router.ts`)

Import the component at the top of the file, then add a route entry:

```ts
import Rules<Category> from './pages/Rules<Category>.vue';
```

Route names follow the pattern `rules-<category>` with these exact values:

| Category  | Path                  | Route Name         |
| --------- | --------------------- | ------------------ |
| main      | `/rules/main`         | `rules-main`       |
| stylistic | `/rules/stylistic`    | `rules-stylistic`  |
| ts        | `/rules/typescript`   | `rules-ts`         |
| vue       | `/rules/vue`          | `rules-vue`        |

Add to the `routes` array:

```ts
{
	path: '/rules/<category>',
	name: 'rules-<category>',
	component: Rules<Category>
}
```

**Note:** The TypeScript route uses path `/rules/typescript` but name `rules-ts` (intentional).

#### Navbar Item (`src/App.vue`)

Add a `BNavbarItem` inside the existing `<b-navbar-dropdown>` (Rules dropdown):

```vue
<b-navbar-item
	tag="router-link"
	to="/rules/<category>"
	:active="route.name === 'rules-<category>'"
>
	<Category Label>
</b-navbar-item>
```

Where `<Category Label>` is the display text:
- Main
- Stylistic
- TypeScript
- Vue

**Important:** Do NOT add manual imports in `App.vue` — Vue Router handles component resolution via the route definition. The existing navbar uses `BNavbar`, `BNavbarItem`, and `BNavbarDropdown` from Buefy. The dropdown has `hoverable` prop and a dynamic `:label` bound to `currentRuleLabel`.

#### Navbar Active State

The existing navbar uses a `nav-dropdown-active` class on the dropdown when a rule page is active. This is defined in `App.vue`'s scoped CSS:

```css
:deep(.navbar-item.nav-dropdown-active > .navbar-link) {
	color: var(--accent) !important;
	background: var(--accent-bg) !important;
}
```

No changes needed to this — just ensure `:class="{ 'nav-dropdown-active': isRuleActive }"` is on the `<b-navbar-dropdown>`.

### 6. Run Dev Server

Run `yarn dev` to verify the output renders correctly in the browser.

## Known Issues & Fixes

- **Dropdown text alignment:** The Buefy navbar dropdown items may be center-aligned by default. If text appears centered, add `text-align: left` to the dropdown items via CSS. This can be done by adding a rule to `src/styles/style.css` or scoped in `App.vue`.
- **Memory notes:** Do NOT create unrelated memory notes in `/memories/repo/` during this task — only modify project files.
- **Dot files:** Do NOT create unrelated shell/config dot files (`.bashrc`, `.gitconfig`, etc.) during this task.

## Conventions

- **Component names:** `Rules<Category>.vue` (PascalCase)
- **File names:** `Rules<Category>.vue` matching the component name
- **Rule order:** Preserve the order they appear in the source file
- **Severity display:** Use `BTag` with `type="is-danger"` for error, `type="is-warning"` for warn, `type="is-light"` for off
- **Rule name:** Display in `<code>` inside a clickable `<a>` link
- **Empty config:** Show `—` with class `no-config` (dimmed)
- **Conditional severity:** Use descriptive string like `'error (production) / off (development)'` and handle with `severity.startsWith()` in helpers

## Reference

- [AGENTS.md](../../../AGENTS.md) — Project conventions, routing table, and navbar setup
- [Vue Router](https://router.vuejs.org/) — SPA routing
- [Buefy Navbar](https://buefy.org/documentation/navbar) — Navigation bar with dropdowns
- [Buefy Table](https://buefy.org/documentation/table) — Component for displaying rules
- [Buefy Tag](https://buefy.org/documentation/tag) — Severity badges
- [Buefy Message](https://buefy.org/documentation/message) — Info boxes for rule descriptions
- [eslint-config-gluons package](../../../node_modules/eslint-config-gluons/) — Rule definitions
- [Shared rule styles](../../../src/styles/rules-shared.css) — CSS classes for rule pages
