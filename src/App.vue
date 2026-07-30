<script setup lang="ts">
import { computed } from 'vue';
import { BNavbar, BNavbarItem, BNavbarDropdown } from 'buefy';
import { useRoute } from 'vue-router';
import ThemeSwitcher from './components/ThemeSwitcher.vue';

const route = useRoute();

const ruleLabels: Record<string, string> = {
	'rules-main': 'Main',
	'rules-stylistic': 'Stylistic',
	'rules-ts': 'TypeScript',
	'rules-vue': 'Vue'
};

const isHome = computed(() => route.name === 'home');

const currentRuleLabel = computed(() => {
	const name = route.name as string;
	return ruleLabels[name] ?? 'Rules';
});

const isRuleActive = computed(() => {
	const name = route.name as string;
	return name in ruleLabels;
});
</script>

<template>
	<b-navbar>
		<template #brand>
			<b-navbar-item tag="router-link" to="/">
				<span class="app-logo">eslint-config-gluons</span>
			</b-navbar-item>
		</template>

		<template #start>
			<b-navbar-item
				tag="router-link"
				to="/"
				:active="isHome"
			>
				Home
			</b-navbar-item>
			<b-navbar-dropdown
				hoverable
				:label="currentRuleLabel"
				:class="{ 'nav-dropdown-active': isRuleActive }"
			>
				<b-navbar-item
					tag="router-link"
					to="/rules/main"
					:active="route.name === 'rules-main'"
				>
					Main
				</b-navbar-item>
				<b-navbar-item
					tag="router-link"
					to="/rules/stylistic"
					:active="route.name === 'rules-stylistic'"
				>
					Stylistic
				</b-navbar-item>
				<b-navbar-item
					tag="router-link"
					to="/rules/typescript"
					:active="route.name === 'rules-ts'"
				>
					TypeScript
				</b-navbar-item>
				<b-navbar-item
					tag="router-link"
					to="/rules/vue"
					:active="route.name === 'rules-vue'"
				>
					Vue
				</b-navbar-item>
			</b-navbar-dropdown>
		</template>

		<template #end>
			<b-navbar-item tag="div">
				<ThemeSwitcher />
			</b-navbar-item>
		</template>
	</b-navbar>
	<router-view />
</template>

<style scoped>
.app-logo {
	font-family: var(--mono);
	font-size: 14px;
	color: var(--text-h);
	font-weight: 600;
}

:deep(.navbar-item.nav-dropdown-active > .navbar-link) {
	color: var(--accent) !important;
	background: var(--accent-bg) !important;
}
</style>
