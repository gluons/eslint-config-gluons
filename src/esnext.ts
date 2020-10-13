import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * ECMAScript 6+
 */
const config: Config = {
	extends: [
		resolve(__dirname, './rules/esnext'),
		'plugin:prettier/recommended'
	]
};

export = config;
