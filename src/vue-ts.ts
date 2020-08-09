import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Vue + TypeScript
 */
const config: Config = {
	extends: [resolve(__dirname, './vue.js'), resolve(__dirname, './ts.js')],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.json',
		sourceType: 'module',
		extraFileExtensions: ['.vue']
	}
};

export = config;
