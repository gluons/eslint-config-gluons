import { ESLint } from 'eslint';
import { resolve } from 'path';
import esNextConfig from '../esnext';

const esNextFixturePath = resolve(__dirname, '../fixtures/esnext.js');

const cli = new ESLint({
	baseConfig: esNextConfig,
	useEslintrc: false,
	ignore: false
});

test('ESNext rules', async () => {
	const results = await cli.lintFiles([esNextFixturePath]);

	expect(results[0].errorCount).toBe(0);
	expect(results[0].warningCount).toBe(0);
});
