<script setup lang="ts">
import { ref, watch } from 'vue';
import { codeToHtml } from 'shiki';

const props = defineProps<{
	code: string;
	lang?: string;
}>();

const highlighted = ref('');

async function highlight() {
	highlighted.value = await codeToHtml(props.code, {
		lang: props.lang ?? 'text',
		theme: 'dracula'
	});
}

watch(() => [props.code, props.lang], highlight, { immediate: true });
</script>

<template>
	<div class="code-block" v-html="highlighted" />
</template>

<style scoped>
.code-block {
	margin: 0 0 16px;
	border-radius: 8px;
	overflow-x: auto;
}

.code-block :deep(pre) {
	margin: 0;
	padding: 16px;
	border-radius: 8px;
	tab-size: 4;
}

.code-block :deep(code) {
	display: block;
	padding: 0;
	background: transparent;
	tab-size: 4;
}

.code-block :deep(.line) {
	display: block;
}
</style>
