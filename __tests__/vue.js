const { CLIEngine } = require('eslint');
const path = require('path');

const vueConfig = require('../vue');

const vueFixturePath = path.resolve(__dirname, '../fixtures/app.vue');

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
