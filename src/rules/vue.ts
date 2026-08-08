import { defineConfig } from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

const configs = defineConfig([
	pluginVue.configs['flat/recommended'],
	{
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.browser
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
	}
]);

export default configs;
