import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * ECMAScript 6+ with `babel-eslint` parser
 */
const config: Config = {
	extends: resolve(__dirname, './esnext.js'),
	parser: 'babel-eslint'
};

export = config;
