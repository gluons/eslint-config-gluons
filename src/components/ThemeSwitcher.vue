<script setup lang="ts">
import { computed } from 'vue';
import { BDropdown, BDropdownItem, BButton } from 'buefy';

import { useTheme, type ThemePreference } from '../composables/useTheme';

const { preference, setTheme } = useTheme();

interface ThemeOption {
	key: ThemePreference;
	icon: string;
	label: string;
}

const options: ThemeOption[] = [
	{ key: 'system', icon: 'fa-desktop', label: 'System' },
	{ key: 'light', icon: 'fa-sun', label: 'Light' },
	{ key: 'dark', icon: 'fa-moon', label: 'Dark' }
];

const current = computed(
	() => options.find(opt => opt.key === preference.value) ?? options[0]
);

function onSelect(value: ThemePreference): void {
	setTheme(value);
}
</script>

<template>
	<BDropdown @change="onSelect">
		<template #trigger="{ active }">
			<BButton class="theme-trigger">
				<span class="icon">
					<i :class="['fas', current.icon]" />
				</span>
				<span>{{ current.label }}</span>
				<span class="icon is-small">
					<i
						class="fas"
						:class="active ? 'fa-chevron-up' : 'fa-chevron-down'"
					/>
				</span>
			</BButton>
		</template>

		<BDropdownItem
			v-for="opt in options"
			:key="opt.key"
			:value="opt.key"
			:active="preference === opt.key"
		>
			<span class="icon">
				<i :class="['fas', opt.icon]" />
			</span>
			<span>{{ opt.label }}</span>
		</BDropdownItem>
	</BDropdown>
</template>

<style scoped>
.theme-trigger {
	display: inline-flex;
	align-items: center;
	gap: 6px;
}
</style>
