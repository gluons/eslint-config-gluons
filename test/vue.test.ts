import { CLIEngine } from 'eslint';
import { resolve } from 'path';
import vueConfig from '../vue';

const vueFixturePath = resolve(__dirname, '../fixtures/app.vue');

const cli = new CLIEngine({
	baseConfig: vueConfig,
	useEslintrc: false,
	ignore: false
});

const report = cli.executeOnFiles([vueFixturePath]);

test('Vue rules', () => {
	expect(report.errorCount).toBe(0);
	expect(report.warningCount).toBe(0);
});
