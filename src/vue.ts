import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 *  Vue
 */
const config: Config = {
	extends: [resolve(__dirname, './rules/vue'), 'prettier/vue']
};

export = config;
