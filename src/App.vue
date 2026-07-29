<script setup lang="ts">
import { computed, ref } from 'vue';
import { BDropdown, BDropdownItem } from 'buefy';
import Home from './components/Home.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import RulesMain from './components/RulesMain.vue';
import RulesStylistic from './components/RulesStylistic.vue';
import RulesTs from './components/RulesTs.vue';
import RulesVue from './components/RulesVue.vue';

const activeTab = ref(0);

const ruleLabels: Record<number, string> = {
	1: 'Main',
	2: 'Stylistic',
	3: 'TypeScript',
	4: 'Vue'
};

const currentRuleLabel = computed(() => {
	return activeTab.value >= 1 && activeTab.value <= 4
		? ruleLabels[activeTab.value]
		: 'Rules';
});

function goHome() {
	activeTab.value = 0;
}

function selectRule(index: number) {
	activeTab.value = index;
}
</script>

<template>
	<div class="app-header">
		<span class="app-logo">eslint-config-gluons</span>
		<ThemeSwitcher />
	</div>
	<nav class="nav-bar">
		<button
			class="nav-item"
			:class="{ 'is-active': activeTab === 0 }"
			@click="goHome"
		>
			Home
		</button>
		<BDropdown
			class="nav-dropdown"
			:class="{ 'is-active': activeTab >= 1 }"
			aria-role="list"
		>
			<template #trigger="{ active }">
				<button
					class="nav-item dropdown-trigger"
					:class="{ 'is-active': activeTab >= 1 }"
				>
					<span>{{ currentRuleLabel }}</span>
					<span class="arrow" :class="{ 'is-open': active }">▾</span>
				</button>
			</template>
			<BDropdownItem
				:value="1"
				:class="{ 'is-active': activeTab === 1 }"
				@click="selectRule(1)"
			>
				Main
			</BDropdownItem>
			<BDropdownItem
				:value="2"
				:class="{ 'is-active': activeTab === 2 }"
				@click="selectRule(2)"
			>
				Stylistic
			</BDropdownItem>
			<BDropdownItem
				:value="3"
				:class="{ 'is-active': activeTab === 3 }"
				@click="selectRule(3)"
			>
				TypeScript
			</BDropdownItem>
			<BDropdownItem
				:value="4"
				:class="{ 'is-active': activeTab === 4 }"
				@click="selectRule(4)"
			>
				Vue
			</BDropdownItem>
		</BDropdown>
	</nav>
	<Home v-if="activeTab === 0" />
	<RulesMain v-else-if="activeTab === 1" />
	<RulesStylistic v-else-if="activeTab === 2" />
	<RulesTs v-else-if="activeTab === 3" />
	<RulesVue v-else-if="activeTab === 4" />
</template>

<style scoped>
.app-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 24px;
	border-bottom: 1px solid var(--border);
}

.app-logo {
	font-family: var(--mono);
	font-size: 14px;
	color: var(--text-h);
	font-weight: 600;
}

.nav-bar {
	display: flex;
	align-items: stretch;
	padding: 0 24px;
	border-bottom: 1px solid var(--border);
	gap: 0;
}

.nav-item {
	position: relative;
	display: inline-flex;
	align-items: center;
	padding: 12px 16px;
	font-size: 14px;
	font-family: inherit;
	color: var(--text);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	cursor: pointer;
	transition: color 0.2s, border-color 0.2s;
	gap: 4px;
}

.nav-item:hover {
	color: var(--text-h);
	border-bottom-color: var(--accent);
}

.nav-item.is-active {
	color: var(--accent);
	border-bottom-color: var(--accent);
}

.nav-dropdown :deep(.dropdown-trigger) {
	display: flex;
}

.nav-dropdown :deep(.dropdown-menu) {
	min-width: 180px;
	padding-top: 4px;
}

.nav-dropdown :deep(.dropdown-content) {
	border-radius: 8px;
	box-shadow: var(--shadow);
	background: var(--bg);
	border: 1px solid var(--border);
	padding: 4px 0;
}

.nav-dropdown :deep(.dropdown-item) {
	padding: 8px 16px;
	font-size: 14px;
	color: var(--text);
	cursor: pointer;
	transition: background 0.15s, color 0.15s;
	text-align: left;
}

.nav-dropdown :deep(.dropdown-item:hover) {
	background: var(--accent-bg);
	color: var(--text-h);
}

.nav-dropdown :deep(.dropdown-item.is-active) {
	color: var(--accent);
	background: var(--accent-bg);
	font-weight: 600;
}

.nav-dropdown.is-active > .dropdown-trigger .nav-item {
	color: var(--accent);
	border-bottom-color: var(--accent);
}

.arrow {
	font-size: 10px;
	transition: transform 0.2s;
}

.arrow.is-open {
	transform: rotate(180deg);
}
</style>
