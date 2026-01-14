import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['dist/**', 'test/fixtures/**']
	},
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked.map(config => ({
		...config,
		files: ['**/*.ts'],
		languageOptions: {
			...config.languageOptions,
			parserOptions: {
				...config.languageOptions?.parserOptions,
				project: ['./tsconfig.eslint.json'],
				tsconfigRootDir: import.meta.dirname
			}
		}
	})),
	stylistic.configs.recommended,
	prettierRecommended
];
