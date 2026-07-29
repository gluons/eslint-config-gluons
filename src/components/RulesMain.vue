<script setup lang="ts">
import { BTable, BTableColumn, BTag } from 'buefy';

interface RuleEntry {
	name: string;
	url: string;
	severity: string;
	config: string;
	description: string;
}

const rules: RuleEntry[] = [
	{
		name: 'arrow-body-style',
		url: 'https://eslint.org/docs/latest/rules/arrow-body-style',
		severity: 'error',
		config: 'as-needed, requireReturnForObjectLiteral: true',
		description:
			'Require braces around arrow function body only when needed, and require return statements in object literals.'
	},
	{
		name: 'curly',
		url: 'https://eslint.org/docs/latest/rules/curly',
		severity: 'error',
		config: 'all',
		description: 'Require curly braces for all control statements.'
	},
	{
		name: 'func-name-matching',
		url: 'https://eslint.org/docs/latest/rules/func-name-matching',
		severity: 'warn',
		config: '',
		description:
			'Warn when a function name does not match the variable or property to which it is assigned.'
	},
	{
		name: 'no-array-constructor',
		url: 'https://eslint.org/docs/latest/rules/no-array-constructor',
		severity: 'error',
		config: '',
		description: 'Disallow the `Array` constructor.'
	},
	{
		name: 'no-console',
		url: 'https://eslint.org/docs/latest/rules/no-console',
		severity: 'error (production) / off (development)',
		config: 'Conditional on NODE_ENV',
		description:
			'Disallow `console` calls in production; allow in development.'
	},
	{
		name: 'no-debugger',
		url: 'https://eslint.org/docs/latest/rules/no-debugger',
		severity: 'error (production) / off (development)',
		config: 'Conditional on NODE_ENV',
		description:
			'Disallow `debugger` statements in production; allow in development.'
	},
	{
		name: 'no-duplicate-imports',
		url: 'https://eslint.org/docs/latest/rules/no-duplicate-imports',
		severity: 'error',
		config: '',
		description: 'Disallow duplicate module imports.'
	},
	{
		name: 'no-empty',
		url: 'https://eslint.org/docs/latest/rules/no-empty',
		severity: 'error',
		config: 'allowEmptyCatch: true',
		description:
			'Disallow empty block statements, except for empty catch blocks.'
	},
	{
		name: 'no-object-constructor',
		url: 'https://eslint.org/docs/latest/rules/no-object-constructor',
		severity: 'error',
		config: '',
		description: 'Disallow the `Object` constructor.'
	},
	{
		name: 'no-unused-vars',
		url: 'https://eslint.org/docs/latest/rules/no-unused-vars',
		severity: 'error',
		config: 'argsIgnorePattern: "^_"',
		description:
			'Disallow unused variables, but allow unused function arguments prefixed with `_`.'
	},
	{
		name: 'no-useless-concat',
		url: 'https://eslint.org/docs/latest/rules/no-useless-concat',
		severity: 'warn',
		config: '',
		description:
			'Warn when string concatenation can be replaced with a template literal.'
	},
	{
		name: 'no-useless-escape',
		url: 'https://eslint.org/docs/latest/rules/no-useless-escape',
		severity: 'warn',
		config: '',
		description: 'Warn when an escape sequence is unnecessary.'
	},
	{
		name: 'no-var',
		url: 'https://eslint.org/docs/latest/rules/no-var',
		severity: 'error',
		config: '',
		description: 'Require `let` or `const` instead of `var`.'
	},
	{
		name: 'object-shorthand',
		url: 'https://eslint.org/docs/latest/rules/object-shorthand',
		severity: 'error',
		config: 'always, avoidQuotes: true',
		description:
			'Require shorthand syntax for object literals, avoiding shorthand when the key is a string literal.'
	},
	{
		name: 'prefer-spread',
		url: 'https://eslint.org/docs/latest/rules/prefer-spread',
		severity: 'warn',
		config: '',
		description:
			'Warn when `.apply()` can be replaced with the spread operator.'
	},
	{
		name: 'prefer-template',
		url: 'https://eslint.org/docs/latest/rules/prefer-template',
		severity: 'error',
		config: '',
		description:
			'Require template literals instead of string concatenation.'
	},
	{
		name: 'yoda',
		url: 'https://eslint.org/docs/latest/rules/yoda',
		severity: 'error',
		config: 'never, exceptRange: true',
		description:
			'Disallow Yoda conditions, except when comparing against a range.'
	}
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
</script>

<template>
	<section class="rules-section">
		<h2>Core JavaScript Rules</h2>
		<p class="rules-intro">
			Base JavaScript and Node.js rules from
			<a
				href="https://github.com/gluons/eslint-config-gluons"
				target="_blank"
				rel="noopener noreferrer"
				><code>eslint-config-gluons</code></a
			>.
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
					<BTag
						:type="severityType(props.row.severity)"
						:key="props.row.name"
					>
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
</template>

<style scoped>
.rules-section {
	padding: 32px;
	text-align: left;
}

.rules-section h2 {
	margin-bottom: 8px;
}

.rules-intro {
	margin-bottom: 24px;
}

.no-config {
	color: var(--text);
	opacity: 0.5;
}

.rule-link {
	color: inherit;
	text-decoration: none;
}

.rule-link:hover {
	color: var(--accent);
	text-decoration: underline;
}

.rule-link:hover code {
	color: var(--accent);
}
</style>
