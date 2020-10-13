import { ESLint } from 'eslint';
import { resolve } from 'path';
import tsConfig from '../ts';

const tsFixurePath = resolve(__dirname, '../fixtures/ts.ts');
const tsConfigPath = resolve(__dirname, '../fixtures/tsconfig.json');

tsConfig.parserOptions = {
	project: tsConfigPath
};

const cli = new ESLint({
	baseConfig: tsConfig,
	useEslintrc: false,
	ignore: false
});

test('TypeScript rules', async () => {
	const results = await cli.lintFiles([tsFixurePath]);
	expect(results[0].errorCount).toBe(0);
	expect(results[0].warningCount).toBe(0);
});
