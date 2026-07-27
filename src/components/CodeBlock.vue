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

const copied = ref(false);

async function copyCode() {
	if (!navigator.clipboard) {
		return;
	}
	try {
		await navigator.clipboard.writeText(props.code);
		copied.value = true;
		window.setTimeout(() => {
			copied.value = false;
		}, 2000);
	} catch {
		// Ignore copy failures
	}
}

watch(() => [props.code, props.lang], highlight, { immediate: true });
</script>

<template>
	<div class="code-block">
		<button
			class="copy-button"
			type="button"
			:aria-label="copied ? 'Copied!' : 'Copy code'"
			@click="copyCode"
		>
			<i
				aria-hidden="true"
				:class="['fas', copied ? 'fa-check' : 'fa-copy']"
			/>
		</button>
		<div class="code-content" v-html="highlighted" />
	</div>
</template>

<style scoped>
.code-block {
	position: relative;
	margin: 0 0 16px;
	border-radius: 8px;
	overflow-x: auto;
}

.code-content :deep(pre) {
	margin: 0;
	padding: 16px;
	border-radius: 8px;
	tab-size: 4;
}

.code-content :deep(code) {
	display: block;
	padding: 0;
	background: transparent;
	tab-size: 4;
}

.code-content :deep(.line) {
	display: block;
}

.copy-button {
	position: absolute;
	top: 8px;
	right: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	padding: 0;
	border: none;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.1);
	color: #f8f8f2;
	font-size: 14px;
	cursor: pointer;
	opacity: 0;
	transition:
		opacity 0.2s ease,
		background 0.2s ease;
}

.code-block:hover .copy-button {
	opacity: 1;
}

.copy-button:hover {
	background: rgba(255, 255, 255, 0.2);
}

.copy-button:focus-visible {
	opacity: 1;
	outline: 2px solid currentColor;
}
</style>
