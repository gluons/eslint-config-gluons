import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Rules from './pages/Rules.vue';

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/rules',
		component: Rules
	}
];

const router = new VueRouter({
	routes
});

export default router;
