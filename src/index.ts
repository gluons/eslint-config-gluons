import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import baseRules from './rules/index.js';

const config: Linter.Config[] = [
	baseRules,
	eslintPluginPrettierRecommended,
	{
		plugins: {
			'@stylistic': stylistic
		}
	}
];

export default config;
