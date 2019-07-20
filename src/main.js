import 'font-awesome/css/font-awesome.css';
import 'buefy/dist/buefy.css';
import 'highlight.js/styles/monokai-sublime.css';
import './scss/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueHighlightJS from 'vue-highlight.js';

import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';

import components from './components';
import router from './router';
import App from './App.vue';

// Components
Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

// Plugins
Vue.use(VueRouter);
Vue.use(VueHighlightJS, {
	languages: {
		bash,
		javascript,
		json,
		markdown
	}
});
Vue.use(Buefy, {
	defaultIconPack: 'fa'
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
