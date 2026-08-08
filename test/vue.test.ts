import { ESLint } from 'eslint';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Vue ESLint Config', () => {
	let eslint: ESLint;

	beforeAll(async () => {
		const { default: config } = await import('../src/vue.js');
		eslint = new ESLint({
			overrideConfigFile: true,
			baseConfig: config
		});
	});

	describe('Vue files', () => {
		it('should validate valid Vue file', async () => {
			const filePath = resolve(__dirname, 'fixtures/valid-vue.vue');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			expect(results[0].errorCount).toBe(0);
		});
	});

	describe('JavaScript files with Vue config', () => {
		it('should validate valid JavaScript file', async () => {
			const filePath = resolve(__dirname, 'fixtures/valid-js.js');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			expect(results[0].errorCount).toBe(0);
		});
	});

	describe('Config structure', () => {
		it('should export a valid ESLint config array', async () => {
			const { default: config } = await import('../src/vue.js');
			expect(config).toBeDefined();
			expect(Array.isArray(config)).toBe(true);
			expect(config.length).toBeGreaterThan(0);
		});
	});
});
