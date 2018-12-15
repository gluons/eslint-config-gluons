import 'font-awesome/css/font-awesome.css';
import 'buefy/dist/buefy.css';
import 'highlight.js/styles/monokai-sublime.css';
import './scss/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueHighlightJS from 'vue-highlight.js';


import components from './components';
import router from './router';
import App from './App.vue';

// Components
Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

// Plugins
Vue.use(VueRouter);
Vue.use(VueHighlightJS);
Vue.use(Buefy, {
	defaultIconPack: 'fa'
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
