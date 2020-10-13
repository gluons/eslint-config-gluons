import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

const config: Config = {
	plugins: ['vue'],
	extends: [resolve(__dirname, './esnext'), 'plugin:vue/recommended'],
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

export = config;
