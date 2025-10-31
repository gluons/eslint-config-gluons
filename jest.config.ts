import type { Config } from 'jest';
import { createDefaultEsmPreset } from 'ts-jest';

const config: Config = {
	...createDefaultEsmPreset()
};

export default config;
