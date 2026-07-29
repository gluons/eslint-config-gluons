<script setup lang="ts">
import { ref, type Component } from 'vue';
import { BTabs, BTabItem } from 'buefy';

import CodeBlock from './CodeBlock.vue';
import NpmSvg from '@thesvg/vue/npm';
import YarnSvg from '@thesvg/vue/yarn';
import PnpmSvg from '@thesvg/vue/pnpm';

const iconMap: Record<string, Component> = {
	npm: NpmSvg,
	Yarn: YarnSvg,
	pnpm: PnpmSvg
};

const packageManagers = ref([
	{
		name: 'npm',
		command:
			'npm install -D eslint @eslint/js prettier eslint-config-gluons'
	},
	{
		name: 'Yarn',
		command: 'yarn add -D eslint @eslint/js prettier eslint-config-gluons'
	},
	{
		name: 'pnpm',
		command:
			'pnpm install -D eslint @eslint/js prettier eslint-config-gluons'
	}
]);

const tsPackages = ref([
	{
		name: 'npm',
		command: 'npm install -D typescript-eslint'
	},
	{
		name: 'Yarn',
		command: 'yarn add -D typescript-eslint'
	},
	{
		name: 'pnpm',
		command: 'pnpm install -D typescript-eslint'
	}
]);

const vuePackages = ref([
	{
		name: 'npm',
		command: 'npm install -D eslint-plugin-vue'
	},
	{
		name: 'Yarn',
		command: 'yarn add -D eslint-plugin-vue'
	},
	{
		name: 'pnpm',
		command: 'pnpm install -D eslint-plugin-vue'
	}
]);

const normalConfig = `import { defineConfig } from 'eslint/config';
import configGluons from 'eslint-config-gluons';

export default defineConfig([
	{
		files: ['**/*.js'],
		extends: [configGluons]
	}
]);`;

const tsConfig = `import { defineConfig } from 'eslint/config';
import configGluonsTs from 'eslint-config-gluons/ts';

export default defineConfig([
	{
		files: ['**/*.ts'],
		extends: [configGluonsTs]
	}
]);`;

const vueConfig = `import { defineConfig } from 'eslint/config';
import configGluonsVue from 'eslint-config-gluons/vue';

export default defineConfig([
	{
		files: ['**/*.vue'],
		extends: [configGluonsVue]
	}
]);`;

const vueTsConfig = `import { defineConfig } from 'eslint/config';
import configGluonsVueTs from 'eslint-config-gluons/vue-ts';

export default defineConfig([
	{
		files: ['**/*.vue', '**/*.ts'],
		extends: [configGluonsVueTs]
	}
]);`;

const badgeMarkdown = `[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9c27b0?style=flat-square&logo=eslint)](https://github.com/gluons/eslint-config-gluons)`;
const badgeUrl =
	'https://img.shields.io/badge/code%20style-gluons-9c27b0?style=flat-square&logo=eslint';
</script>

<template>
	<section id="center">
		<div>
			<h1>eslint-config-gluons</h1>
			<p>
				<a href="https://github.com/gluons" target="_blank">gluons</a>'
				personal
				<a href="https://eslint.org/" target="_blank">ESLint</a>
				shareable config.
			</p>
			<p>A set of favorite rules.</p>
		</div>
	</section>

	<section id="installation" class="doc-section">
		<h2 id="installation">
			<a
				class="anchor"
				href="#installation"
				aria-hidden="true"
				tabindex="-1"
				>#</a
			>
			Installation
		</h2>
		<p>
			Install
			<a
				href="https://github.com/gluons/eslint-config-gluons"
				target="_blank"
				>eslint-config-gluons</a
			>
			along with its peer dependencies.
		</p>

		<BTabs type="is-boxed">
			<BTabItem
				v-for="pm in packageManagers"
				:key="pm.name"
				:label="pm.name"
			>
				<template #header>
					<component
						:is="iconMap[pm.name]"
						width="20"
						height="20"
						class="tab-header-icon"
					/>
					<span>{{ pm.name }}</span>
				</template>
				<CodeBlock :code="pm.command" lang="shell" />
			</BTabItem>
		</BTabs>

		<h3>Using with TypeScript</h3>
		<p>
			Install
			<a href="https://typescript-eslint.io/" target="_blank"
				>TypeScript ESLint</a
			>.
		</p>
		<BTabs type="is-boxed">
			<BTabItem v-for="pm in tsPackages" :key="pm.name" :label="pm.name">
				<template #header>
					<component
						:is="iconMap[pm.name]"
						width="20"
						height="20"
						class="tab-header-icon"
					/>
					<span>{{ pm.name }}</span>
				</template>
				<CodeBlock :code="pm.command" lang="shell" />
			</BTabItem>
		</BTabs>

		<h3>Using with Vue</h3>
		<p>
			Install
			<a href="https://eslint.vuejs.org/" target="_blank"
				>eslint-plugin-vue</a
			>.
		</p>
		<BTabs type="is-boxed">
			<BTabItem v-for="pm in vuePackages" :key="pm.name" :label="pm.name">
				<template #header>
					<component
						:is="iconMap[pm.name]"
						width="20"
						height="20"
						class="tab-header-icon"
					/>
					<span>{{ pm.name }}</span>
				</template>
				<CodeBlock :code="pm.command" lang="shell" />
			</BTabItem>
		</BTabs>
	</section>

	<section id="usage" class="doc-section">
		<h2 id="usage">
			<a class="anchor" href="#usage" aria-hidden="true" tabindex="-1"
				>#</a
			>
			Usage
		</h2>
		<p>
			Create an <code>eslint.config.js</code> file and extend the config
			that matches your project type.
		</p>

		<h3>Normal (JavaScript)</h3>
		<CodeBlock :code="normalConfig" lang="javascript" />

		<h3>TypeScript</h3>
		<CodeBlock :code="tsConfig" lang="typescript" />

		<h3>Vue</h3>
		<CodeBlock :code="vueConfig" lang="javascript" />

		<h3>Vue + TypeScript</h3>
		<CodeBlock :code="vueTsConfig" lang="typescript" />
	</section>

	<section id="badge" class="doc-section">
		<h2 id="badge">
			<a class="anchor" href="#badge" aria-hidden="true" tabindex="-1"
				>#</a
			>
			Badge
		</h2>
		<CodeBlock :code="badgeMarkdown" lang="markdown" />
		<div class="badge-preview">
			<a
				href="https://github.com/gluons/eslint-config-gluons"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					:src="badgeUrl"
					alt="ESLint Gluons"
					width="129"
					height="20"
				/>
			</a>
		</div>
	</section>
</template>

<style scoped>
#center {
	padding: 3.5rem 2rem 3rem;
}

#center h1 {
	font-size: 3.5rem;
}

.doc-section {
	padding: 32px;
	text-align: left;
	border-top: 1px solid var(--border);
}

.doc-section h2 {
	position: relative;
	margin-bottom: 16px;
}

.doc-section h3 {
	font-size: 18px;
	color: var(--text-h);
	margin: 24px 0 8px;
}

.doc-section p {
	margin-bottom: 16px;
}

.doc-section ul {
	list-style: disc;
	padding-left: 24px;
}

.doc-section li {
	margin-bottom: 8px;
}

.badge-preview {
	display: inline-block;
	padding: 8px;
	border-radius: 8px;
	background: var(--code-bg);
}

.badge-preview img {
	display: block;
}

.tab-header-icon {
	margin-right: 4px;
	vertical-align: middle;
}

a {
	color: var(--accent);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.anchor {
	position: absolute;
	right: 100%;
	padding-right: 4px;
	color: var(--accent);
	opacity: 0;
	transition: opacity 0.2s;
	text-decoration: none;
	font-size: 0.85em;
	font-weight: normal;
}

.doc-section h2:hover .anchor {
	opacity: 1;
}

.anchor:hover {
	opacity: 1 !important;
	text-decoration: underline;
}
</style>
