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
		name: '@stylistic/arrow-parens',
		url: 'https://eslint.style/rules/arrow-parens',
		severity: 'error',
		config: 'as-needed',
		description:
			'Require parentheses around arrow function arguments only when needed.'
	},
	{
		name: '@stylistic/arrow-spacing',
		url: 'https://eslint.style/rules/arrow-spacing',
		severity: 'error',
		config: 'before: true, after: true',
		description:
			'Enforce consistent spacing before and after the arrow in arrow functions.'
	},
	{
		name: '@stylistic/brace-style',
		url: 'https://eslint.style/rules/brace-style',
		severity: 'error',
		config: '1tbs',
		description: 'Require the "one true brace style" for blocks.'
	},
	{
		name: '@stylistic/comma-dangle',
		url: 'https://eslint.style/rules/comma-dangle',
		severity: 'error',
		config: '',
		description: 'Require trailing commas wherever possible.'
	},
	{
		name: '@stylistic/comma-spacing',
		url: 'https://eslint.style/rules/comma-spacing',
		severity: 'error',
		config: 'before: false, after: true',
		description:
			'Enforce spacing after commas and disallow spacing before them.'
	},
	{
		name: '@stylistic/comma-style',
		url: 'https://eslint.style/rules/comma-style',
		severity: 'error',
		config: 'last',
		description: 'Require commas at the end of lines.'
	},
	{
		name: '@stylistic/dot-location',
		url: 'https://eslint.style/rules/dot-location',
		severity: 'warn',
		config: 'property',
		description: 'Warn when dots are on the same line as the property.'
	},
	{
		name: '@stylistic/generator-star-spacing',
		url: 'https://eslint.style/rules/generator-star-spacing',
		severity: 'error',
		config: 'after',
		description:
			'Require the star in generator functions to be placed after the keyword.'
	},
	{
		name: '@stylistic/indent',
		url: 'https://eslint.style/rules/indent',
		severity: 'error',
		config: 'tab, SwitchCase: 1',
		description:
			'Enforce tab indentation with one extra indent for `case` clauses.'
	},
	{
		name: '@stylistic/key-spacing',
		url: 'https://eslint.style/rules/key-spacing',
		severity: 'error',
		config: 'beforeColon: false, afterColon: true',
		description:
			'Enforce spacing after colons in object literal keys, no spacing before.'
	},
	{
		name: '@stylistic/keyword-spacing',
		url: 'https://eslint.style/rules/keyword-spacing',
		severity: 'error',
		config: 'before: true, after: true',
		description: 'Enforce consistent spacing before and after keywords.'
	},
	{
		name: '@stylistic/no-confusing-arrow',
		url: 'https://eslint.style/rules/no-confusing-arrow',
		severity: 'warn',
		config: 'allowParens: true',
		description:
			'Warn when arrow functions could be confused with comparisons, allowing parentheses.'
	},
	{
		name: '@stylistic/no-trailing-spaces',
		url: 'https://eslint.style/rules/no-trailing-spaces',
		severity: 'warn',
		config: '',
		description: 'Warn when trailing whitespace is present.'
	},
	{
		name: '@stylistic/quotes',
		url: 'https://eslint.style/rules/quotes',
		severity: 'error',
		config: 'single, avoidEscape: true, allowTemplateLiterals: true',
		description:
			'Require single quotes, allow template literals, escape strings when needed.'
	},
	{
		name: '@stylistic/semi',
		url: 'https://eslint.style/rules/semi',
		severity: 'error',
		config: 'always',
		description: 'Require semicolons at the end of statements.'
	},
	{
		name: '@stylistic/semi-spacing',
		url: 'https://eslint.style/rules/semi-spacing',
		severity: 'error',
		config: 'before: false, after: true',
		description: 'Enforce spacing after semicolons, no spacing before.'
	},
	{
		name: '@stylistic/space-before-blocks',
		url: 'https://eslint.style/rules/space-before-blocks',
		severity: 'error',
		config: '',
		description: 'Require a space before blocks.'
	},
	{
		name: '@stylistic/space-before-function-paren',
		url: 'https://eslint.style/rules/space-before-function-paren',
		severity: 'error',
		config: 'anonymous: always, named: never, asyncArrow: always',
		description:
			'Enforce spacing before function parentheses: space for anonymous and async arrow, no space for named functions.'
	},
	{
		name: '@stylistic/space-infix-ops',
		url: 'https://eslint.style/rules/space-infix-ops',
		severity: 'error',
		config: 'int32Hint: false',
		description: 'Require spacing around infix operators.'
	},
	{
		name: '@stylistic/wrap-iife',
		url: 'https://eslint.style/rules/wrap-iife',
		severity: 'error',
		config: 'any',
		description:
			'Require wrapping of immediately-invoked function expressions.'
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
		<h2>Stylistic Rules</h2>
		<p class="rules-intro">
			Code style and formatting rules from the
			<a
				href="https://eslint.style/"
				target="_blank"
				rel="noopener noreferrer"
				><code>@stylistic</code></a
			>
			ESLint plugin.
		</p>
		<BTable :data="rules" striped hoverable narrowed>
			<BTableColumn field="name" label="Rule" width="320">
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
