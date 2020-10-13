import { ESLint } from 'eslint';
import { resolve } from 'path';
import vueConfig from '../vue';

const vueFixturePath = resolve(__dirname, '../fixtures/app.vue');

const cli = new ESLint({
	baseConfig: vueConfig,
	useEslintrc: false,
	ignore: false
});

test('Vue rules', async () => {
	const results = await cli.lintFiles([vueFixturePath]);

	expect(results[0].errorCount).toBe(0);
	expect(results[0].warningCount).toBe(0);
});
