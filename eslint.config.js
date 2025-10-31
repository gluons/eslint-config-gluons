import { defineConfig } from 'eslint/config';
import xoTypeScript from 'eslint-config-xo-typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/*
 * Fix `Key "languageOptions": allowTrailingCommas option is only available in JSONC.` error
 * See https://github.com/xojs/xo/issues/798#issuecomment-3044681378
 */
const xoTypeScriptWithoutJSON = xoTypeScript.filter(
	config => !config.language?.startsWith('json/')
);

/*
 * Fix `Key "plugins": Cannot redefine plugin "@stylistic"` error
 */
xoTypeScriptWithoutJSON.forEach(config => {
	if (
		config.plugins?.['@typescript-eslint'] &&
		config.plugins['@stylistic']
	) {
		config.languageOptions.parserOptions.projectService = {
			allowDefaultProject: [
				'test/*.ts',
				'eslint.config.js',
				'jest.config.ts'
			]
		};

		delete config.plugins['@stylistic'];
	}
});

export default defineConfig([
	xoTypeScriptWithoutJSON,
	{
		rules: {
			'@typescript-eslint/naming-convention': 'off'
		}
	},
	eslintPluginPrettierRecommended,
	{
		ignores: ['dist/', 'test/fixtures/']
	}
]);
