import type { Linter } from 'eslint';

const config: Linter.Config = {
	files: ['**/*.ts', '**/*.tsx'],
	plugins: {
		'@typescript-eslint': require('@typescript-eslint/eslint-plugin')
	},
	languageOptions: {
		parser: require('@typescript-eslint/parser'),
		parserOptions: {
			project: 'tsconfig.json',
			sourceType: 'module',
			extraFileExtensions: ['.vue']
		}
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/member-ordering': [
			'warn',
			{
				default: [
					'#private-static-field',
					'private-static-field',
					'protected-static-field',
					'public-static-field',

					'#private-static-method',
					'private-static-method',
					'protected-static-method',
					'public-static-method',

					'private-constructor',
					'protected-constructor',
					'public-constructor',

					'#private-instance-field',
					'private-instance-field',
					'protected-instance-field',
					'public-instance-field',

					'#private-instance-method',
					'private-instance-method',
					'protected-instance-method',
					'public-instance-method'
				]
			}
		],
		'@typescript-eslint/no-floating-promises': [
			'error',
			{ ignoreIIFE: true }
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/triple-slash-reference': 'off'
	}
};

export default [config];
