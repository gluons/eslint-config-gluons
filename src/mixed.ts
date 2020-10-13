import { Linter } from 'eslint';
import { resolve } from 'path';

type Config = Linter.Config;

/**
 * Mixed JavaScript + TypeScript
 */
const config: Config = {
	extends: resolve(__dirname, './esnext'),
	overrides: [
		{
			files: ['*.ts'],
			extends: [resolve(__dirname, './ts')]
		}
	]
};

export = config;
