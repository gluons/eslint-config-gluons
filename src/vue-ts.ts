import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Vue + TypeScript
 */
const config: Config = {
	extends: [
		resolve(__dirname, './rules/ts'),
		resolve(__dirname, './rules/vue'),
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'prettier/vue'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.json',
		sourceType: 'module',
		extraFileExtensions: ['.vue']
	}
};

export = config;
