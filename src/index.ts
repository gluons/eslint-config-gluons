import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Main config
 */
const config: Config = {
	plugins: ['prettier'],
	extends: [
		resolve(__dirname, './rules/index'),
		'plugin:prettier/recommended'
	]
};

export = config;
