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
		name: '@typescript-eslint/explicit-function-return-type',
		url: 'https://typescript-eslint.io/rules/explicit-function-return-type',
		severity: 'off',
		config: '',
		description: 'Allow functions without explicit return type annotations.'
	},
	{
		name: '@typescript-eslint/member-ordering',
		url: 'https://typescript-eslint.io/rules/member-ordering',
		severity: 'warn',
		config: 'default: private-static → public-static → constructor → private-instance → public-instance',
		description:
			'Warn when class members are not ordered by a conventional structure (static fields, methods, constructor, instance fields, methods).'
	},
	{
		name: '@typescript-eslint/no-floating-promises',
		url: 'https://typescript-eslint.io/rules/no-floating-promises',
		severity: 'error',
		config: 'ignoreIIFE: true',
		description:
			'Disallow floating Promises, but allow them inside immediately-invoked function expressions.'
	},
	{
		name: '@typescript-eslint/no-unused-vars',
		url: 'https://typescript-eslint.io/rules/no-unused-vars',
		severity: 'error',
		config: 'argsIgnorePattern: "^_"',
		description:
			'Disallow unused variables, but allow unused function arguments prefixed with `_`.'
	},
	{
		name: '@typescript-eslint/triple-slash-reference',
		url: 'https://typescript-eslint.io/rules/triple-slash-reference',
		severity: 'off',
		config: '',
		description: 'Allow triple-slash reference directives.'
	}
];

function severityType(severity: string): string {
	if (severity === 'error') {
		return 'is-danger';
	}
	if (severity === 'warn') {
		return 'is-warning';
	}
	return 'is-light';
}
</script>

<template>
	<section class="rules-section">
		<h2>TypeScript Rules</h2>
		<p class="rules-intro">
			TypeScript-specific rules from the
			<a
				href="https://typescript-eslint.io/"
				target="_blank"
				rel="noopener noreferrer"
				><code>typescript-eslint</code></a
			>
			plugin.
		</p>
		<BTable :data="rules" striped hoverable narrowed>
			<BTableColumn field="name" label="Rule" width="380">
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
			<BTableColumn field="severity" label="Severity" width="120">
				<template #default="props">
					<BTag :type="severityType(props.row.severity)">
						{{ props.row.severity }}
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
