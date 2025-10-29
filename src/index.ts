import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import mainRules from './rules/index.js';

const config = defineConfig([
	mainRules,
	eslintPluginPrettierRecommended
]);

export default config;
