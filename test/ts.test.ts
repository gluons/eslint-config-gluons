import { CLIEngine } from 'eslint';
import { resolve } from 'path';
import tsConfig from '../ts';

const tsFixurePath = resolve(__dirname, '../fixtures/ts.ts');
const tsConfigPath = resolve(__dirname, '../fixtures/tsconfig.json');

tsConfig.parserOptions.project = tsConfigPath;

const cli = new CLIEngine({
	baseConfig: tsConfig,
	useEslintrc: false,
	ignore: false
});
const report = cli.executeOnFiles([tsFixurePath]);

test('TypeScript rules', () => {
	expect(report.errorCount).toBe(0);
	expect(report.warningCount).toBe(0);
});
