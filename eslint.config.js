import gluonsVueTs from 'eslint-config-gluons/vue-ts';

export default [
	...gluonsVueTs,
	{
		ignores: ['eslint.config.js', 'dist/'],
	},
	{
		files: ['*.vue', '**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	},
];
