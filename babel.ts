import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Main config with `babel-eslint` parser
 */
const config: Config = {
	extends: resolve(__dirname, './index.js'),
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'script'
	}
};

export = config;
