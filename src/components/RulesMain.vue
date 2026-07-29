<script setup lang="ts">
import { BTable, BTableColumn, BTag } from 'buefy';

interface RuleEntry {
	name: string;
	severity: string;
	config: string;
	description: string;
}

const rules: RuleEntry[] = [
	{
		name: 'arrow-body-style',
		severity: 'error',
		config: 'as-needed, requireReturnForObjectLiteral: true',
		description:
			'Require braces around arrow function body only when needed, and require return statements in object literals.'
	},
	{
		name: 'curly',
		severity: 'error',
		config: 'all',
		description: 'Require curly braces for all control statements.'
	},
	{
		name: 'func-name-matching',
		severity: 'warn',
		config: '',
		description:
			'Warn when a function name does not match the variable or property to which it is assigned.'
	},
	{
		name: 'no-array-constructor',
		severity: 'error',
		config: '',
		description: 'Disallow the `Array` constructor.'
	},
	{
		name: 'no-console',
		severity: 'error (production) / off (development)',
		config: 'Conditional on NODE_ENV',
		description: 'Disallow `console` calls in production; allow in development.'
	},
	{
		name: 'no-debugger',
		severity: 'error (production) / off (development)',
		config: 'Conditional on NODE_ENV',
		description:
			'Disallow `debugger` statements in production; allow in development.'
	},
	{
		name: 'no-duplicate-imports',
		severity: 'error',
		config: '',
		description: 'Disallow duplicate module imports.'
	},
	{
		name: 'no-empty',
		severity: 'error',
		config: 'allowEmptyCatch: true',
		description: 'Disallow empty block statements, except for empty catch blocks.'
	},
	{
		name: 'no-object-constructor',
		severity: 'error',
		config: '',
		description: 'Disallow the `Object` constructor.'
	},
	{
		name: 'no-unused-vars',
		severity: 'error',
		config: 'argsIgnorePattern: "^_"',
		description:
			'Disallow unused variables, but allow unused function arguments prefixed with `_`.'
	},
	{
		name: 'no-useless-concat',
		severity: 'warn',
		config: '',
		description:
			'Warn when string concatenation can be replaced with a template literal.'
	},
	{
		name: 'no-useless-escape',
		severity: 'warn',
		config: '',
		description: 'Warn when an escape sequence is unnecessary.'
	},
	{
		name: 'no-var',
		severity: 'error',
		config: '',
		description: 'Require `let` or `const` instead of `var`.'
	},
	{
		name: 'object-shorthand',
		severity: 'error',
		config: 'always, avoidQuotes: true',
		description:
			'Require shorthand syntax for object literals, avoiding shorthand when the key is a string literal.'
	},
	{
		name: 'prefer-spread',
		severity: 'warn',
		config: '',
		description:
			'Warn when `.apply()` can be replaced with the spread operator.'
	},
	{
		name: 'prefer-template',
		severity: 'error',
		config: '',
		description: 'Require template literals instead of string concatenation.'
	},
	{
		name: 'yoda',
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
	return severity.startsWith('error') ? 'error' : severity === 'warn' ? 'warn' : 'off';
}
</script>

<template>
	<section class="rules-section">
		<h2>Core JavaScript Rules</h2>
		<p class="rules-intro">
			Base JavaScript and Node.js rules from <code>eslint-config-gluons</code>.
		</p>
		<BTable
			:data="rules"
			striped
			hoverable
			narrowed
		>
			<BTableColumn field="name" label="Rule" width="280">
				<template #default="props">
					<code>{{ props.row.name }}</code>
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
</style>
