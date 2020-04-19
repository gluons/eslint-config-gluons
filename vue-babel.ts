import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Vue with `babel-eslint` parser
 */
const config: Config = {
	extends: resolve(__dirname, './vue.js'),
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module'
	}
};

export = config;
