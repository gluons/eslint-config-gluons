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
		name: 'vue/html-indent',
		url: 'https://eslint.vuejs.org/rules/html-indent',
		severity: 'error',
		config: 'tab',
		description:
			'Enforce tab indentation in HTML templates of Vue single-file components.'
	},
	{
		name: 'vue/script-indent',
		url: 'https://eslint.vuejs.org/rules/script-indent',
		severity: 'error',
		config: 'tab, switchCase: 1',
		description:
			'Enforce tab indentation in the `<script>` block of Vue single-file components, with one extra indent for `case` clauses.'
	},
	{
		name: 'vue/html-closing-bracket-newline',
		url: 'https://eslint.vuejs.org/rules/html-closing-bracket-newline',
		severity: 'error',
		config: 'multiline: always',
		description:
			'Require a newline before the closing bracket of multiline HTML elements.'
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
		<h2>Vue Rules</h2>
		<p class="rules-intro">
			Vue-specific rules from the
			<a
				href="https://eslint.vuejs.org/"
				target="_blank"
				rel="noopener noreferrer"
				><code>eslint-plugin-vue</code></a
			>
			plugin.
		</p>
		<BTable :data="rules" striped hoverable narrowed>
			<BTableColumn field="name" label="Rule" width="300">
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
