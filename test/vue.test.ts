import type { Linter } from 'eslint';
import { lintFixture } from './utils/flat-eslint';

let vueConfig: Linter.FlatConfig[];

beforeAll(async () => {
	const module = await import('../dist/vue.js');

	vueConfig = module.default;
});

describe('Vue config', () => {
	test('passes valid Vue fixture', async () => {
		const [result] = await lintFixture(vueConfig, 'app.vue');

		expect(result.errorCount).toBe(0);
		expect(result.warningCount).toBe(0);
	});

	test('reports rule violations for invalid Vue fixture', async () => {
		const [result] = await lintFixture(vueConfig, 'app-invalid.vue');

		expect(result.errorCount).toBeGreaterThan(0);
		expect(result.messages.map(message => message.ruleId)).toContain(
			'vue/html-indent'
		);
	});
});
