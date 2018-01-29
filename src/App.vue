<template lang="pug">
#app
	nav.navbar.is-light(role='navigation')
		.container
			.navbar-brand
				router-link.navbar-item.has-text-weight-bold(to='/')
					| #[b-icon#brand-icon(icon='heart', size='is-medium')] ESLint Config Gluons
				div.navbar-burger(@click='burgerClick')
					span(v-for='i in 3')
			.navbar-menu.is-light(ref='navmenu')
				.navbar-start
					router-link.navbar-item(to='/') Home
					router-link.navbar-item(to='/rules') Rules
	transition(name='fade', mode='out-in'): router-view
	footer.footer
		.container
			.content.has-text-centered
				p
					img.badge(
						src='http://forthebadge.com/images/badges/built-with-love.svg'
						alt='Built with Love'
					)
					|
					|
					blank-link(url='https://github.com/gluons')
						img.badge(
							src='https://img.shields.io/badge/By-Gluons-9C27B0.svg?style=for-the-badge'
							height='35'
							alt='By Gluons'
						)
				p: blank-link(url='https://buefy.github.io/')
					img.badge(
						src='https://img.shields.io/badge/Made%20with-Buefy-7957d5.svg?style=for-the-badge'
						alt='Made with Buefy'
					)
</template>

<script>
export default {
	name: 'App',
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

<style lang="scss" scoped>
#brand-icon {
	color: red;
	margin-right: .5em;
}
footer {
	a {
		outline: none;
	}
	img.badge {
		height: 35px;
	}
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .3s linear;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>
