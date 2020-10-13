import { ESLint } from 'eslint';
import { resolve } from 'path';
import vueTSConfig from '../vue-ts';

const vueFixturePath = resolve(__dirname, '../fixtures/app-ts.vue');
const tsConfigPath = resolve(__dirname, '../fixtures/tsconfig.json');

vueTSConfig.parserOptions.project = tsConfigPath;

const cli = new ESLint({
	baseConfig: vueTSConfig,
	useEslintrc: false,
	ignore: false
});

test('Vue + TypeScript rules', async () => {
	const results = await cli.lintFiles([vueFixturePath]);

	expect(results[0].errorCount).toBe(0);
	expect(results[0].warningCount).toBe(0);
});
