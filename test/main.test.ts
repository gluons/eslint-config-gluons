import { ESLint } from 'eslint';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Main ESLint Config', () => {
	let eslint: ESLint;

	beforeAll(async () => {
		const { default: config } = await import('../src/main.js');
		eslint = new ESLint({
			overrideConfigFile: true,
			baseConfig: config
		});
	});

	describe('JavaScript files', () => {
		it('should validate valid JavaScript file', async () => {
			const filePath = resolve(__dirname, 'fixtures/valid-js.js');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			expect(results[0].errorCount).toBe(0);
		});

		it('should detect errors in invalid JavaScript file', async () => {
			const filePath = resolve(__dirname, 'fixtures/invalid-js.js');
			const results = await eslint.lintFiles([filePath]);

			expect(results).toHaveLength(1);
			expect(results[0].errorCount).toBeGreaterThan(0);
		});
	});

	describe('Config structure', () => {
		it('should export a valid ESLint config array', async () => {
			const { default: config } = await import('../src/main.js');
			expect(config).toBeDefined();
			expect(Array.isArray(config)).toBe(true);
			expect(config.length).toBeGreaterThan(0);
		});
	});
});
