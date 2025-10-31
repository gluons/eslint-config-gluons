<template>
	<div class="greeting">
		<h1>{{ message }}</h1>
		<button @click="updateMessage">Click me</button>
	</div>
</template>

<script>
export default {
	name: 'GreetingComponent',
	data() {
		return {
			message: 'Hello, Vue!'
		};
	},
	methods: {
		updateMessage() {
			this.message = 'Button clicked!';
		}
	}
};
</script>

<style scoped>
.greeting {
	text-align: center;
}
</style>
