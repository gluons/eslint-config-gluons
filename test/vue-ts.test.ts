import { CLIEngine } from 'eslint';
import { resolve } from 'path';
import vueTSConfig from '../lib/vue-ts';

const vueFixturePath = resolve(__dirname, '../fixtures/app-ts.vue');
const tsConfigPath = resolve(__dirname, '../fixtures/tsconfig.json');

vueTSConfig.parserOptions.project = tsConfigPath;

const cli = new CLIEngine({
	baseConfig: vueTSConfig,
	useEslintrc: false,
	ignore: false
});

const report = cli.executeOnFiles([vueFixturePath]);

test('Vue + TypeScript rules', () => {
	expect(report.errorCount).toBe(0);
	expect(report.warningCount).toBe(0);
});
