<template lang="pug">
#app
	nav.navbar.is-light(role='navigation')
		.container
			.navbar-brand
				a.navbar-item.has-text-weight-bold(
					href='./'
				) #[b-icon#brand-icon(icon='heart', size='is-medium')]ESLint Config Gluons
				div.navbar-burger(@click='burgerClick')
					span(v-for='i in 3')
			.navbar-menu.is-light(ref='navmenu')
				.navbar-start
					a.navbar-item(href='./') Home
	home
	footer.footer
		.container
			.content.has-text-centered
				p: blank-link(url='https://bulma.io')
					img(
						src='https://bulma.io/images/made-with-bulma--dark.png'
						width='128'
						height='24'
						alt='Made with Bulma'
					)
</template>

<script>
import Home from './pages/Home';

export default {
	name: 'App',
	components: {
		Home
	},
	methods: {
		burgerClick(e) {
			let burger = e.target;
			let navmenu = this.$refs.navmenu;

			burger.classList.toggle('is-active');
			// Safe toggle
			if (burger.classList.contains('is-active')) {
				navmenu.classList.add('is-active');
			} else {
				navmenu.classList.remove('is-active');
			}
		}
	}
};
</script>

<style scoped>
#brand-icon {
	color: red;
	margin-right: .5em;
}
footer a {
	outline: none;
}
</style>
