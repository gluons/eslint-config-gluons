import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Mixed JavaScript + TypeScript
 */
const config: Config = {
	extends: resolve(__dirname, './esnext.js'),
	overrides: [
		{
			files: ['*.ts'],
			extends: [resolve(__dirname, './ts.js')]
		}
	]
};

export = config;
