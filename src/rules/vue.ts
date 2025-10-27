import type { Linter } from 'eslint';

const config: Linter.Config = {
	files: ['**/*.vue'],
	plugins: {
		vue: require('eslint-plugin-vue')
	},
	languageOptions: {
		parser: require('vue-eslint-parser'),
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: 'module'
		}
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/script-indent': [
			'error',
			'tab',
			{
				switchCase: 1
			}
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				multiline: 'always'
			}
		]
	}
};

export default config;
