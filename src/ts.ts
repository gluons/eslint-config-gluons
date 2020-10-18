import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * TypeScript
 */
const config: Config = {
	extends: [
		resolve(__dirname, './rules/ts'),
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint'
	]
};

export = config;
