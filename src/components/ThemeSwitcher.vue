<script setup lang="ts">
import { useTheme, type ThemePreference } from '../composables/useTheme';

const { preference, setTheme } = useTheme();

interface ThemeOption {
	key: ThemePreference;
	icon: string;
	label: string;
}

const options: ThemeOption[] = [
	{ key: 'system', icon: 'fa-desktop', label: 'System theme' },
	{ key: 'light', icon: 'fa-sun', label: 'Light theme' },
	{ key: 'dark', icon: 'fa-moon', label: 'Dark theme' },
];
</script>

<template>
	<div class="theme-switcher" role="radiogroup" aria-label="Theme selection">
		<button
			v-for="opt in options"
			:key="opt.key"
			class="theme-option"
			:class="{ active: preference === opt.key }"
			:title="opt.label"
			:aria-label="opt.label"
			role="radio"
			:aria-checked="preference === opt.key"
			@click="setTheme(opt.key)"
		>
			<i :class="['fas', opt.icon]" />
		</button>
	</div>
</template>

<style scoped>
.theme-switcher {
	display: flex;
	border: 1px solid var(--border);
	border-radius: 8px;
	overflow: hidden;
}

.theme-option {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	border: none;
	background: transparent;
	color: var(--text);
	cursor: pointer;
	font-size: 16px;
	transition: background 0.2s, color 0.2s;
}

.theme-option + .theme-option {
	border-left: 1px solid var(--border);
}

.theme-option:hover {
	background: var(--accent-bg);
	color: var(--accent);
}

.theme-option.active {
	background: var(--accent-bg);
	color: var(--accent);
}

.theme-option:focus-visible {
	outline: 2px solid var(--accent);
	outline-offset: -2px;
}
</style>
