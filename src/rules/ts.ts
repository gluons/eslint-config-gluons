import type { Linter } from 'eslint';

const config: Linter.FlatConfig = {
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
		'brace-style': 'off',
		// '@typescript-eslint/brace-style': ['error', '1tbs'], // This rule doesn't exist in @typescript-eslint
		'@typescript-eslint/explicit-function-return-type': 'off',
		'comma-spacing': 'off',
		// '@typescript-eslint/comma-spacing': [ // This rule doesn't exist in @typescript-eslint
		//   'error',
		//   {
		//     before: false,
		//     after: true
		//   }
		// ],
		indent: 'off',
		// '@typescript-eslint/indent': [ // This rule doesn't exist in @typescript-eslint
		//   'error',
		//   2,
		//   {
		//     SwitchCase: 1
		//   }
		// ],
		'keyword-spacing': 'off',
		// '@typescript-eslint/keyword-spacing': [ // This rule doesn't exist in @typescript-eslint
		//   'error',
		//   {
		//     before: true,
		//     after: true
		//   }
		// ],
		quotes: 'off',
		// '@typescript-eslint/quotes': [ // This rule doesn't exist in @typescript-eslint
		//   'error',
		//   'single',
		//   {
		//     avoidEscape: true,
		//     allowTemplateLiterals: true
		//   }
		// ],
		'@typescript-eslint/member-ordering': [
			'warn',
			{
				default: [
					'private-static-field',
					'protected-static-field',
					'public-static-field',

					'private-static-method',
					'protected-static-method',
					'public-static-method',

					'private-instance-field',
					'protected-instance-field',
					'public-instance-field',

					'private-constructor',
					'protected-constructor',
					'public-constructor',

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
		'space-before-function-paren': 'off',
		// '@typescript-eslint/space-before-function-paren': [ // This rule doesn't exist in @typescript-eslint
		//   'error',
		//   {
		//     anonymous: 'always',
		//     named: 'never',
		//     asyncArrow: 'always'
		//   }
		// ],
		semi: 'off',
		// '@typescript-eslint/semi': ['error', 'always'], // This rule doesn't exist in @typescript-eslint
		'@typescript-eslint/triple-slash-reference': 'off'
	}
};

export default [config];
