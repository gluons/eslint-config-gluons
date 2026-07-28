<script setup lang="ts">
import Home from './components/Home.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
</script>

<template>
	<div class="app-header">
		<span class="app-logo">eslint-config-gluons</span>
		<ThemeSwitcher />
	</div>
	<Home />
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
</style>
