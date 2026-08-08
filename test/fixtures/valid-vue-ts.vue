<template>
	<div class="greeting">
		<h1>{{ message }}</h1>
		<button @click="updateMessage">Click me</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Data {
	message: string;
}

export default defineComponent({
	name: 'GreetingComponent',
	data(): Data {
		return {
			message: 'Hello, Vue with TypeScript!'
		};
	},
	methods: {
		updateMessage(): void {
			this.message = 'Button clicked!';
		}
	}
});
</script>

<style scoped>
.greeting {
	text-align: center;
}
</style>
