import 'font-awesome/css/font-awesome.css';
import 'buefy/lib/buefy.css';
import 'highlight.js/styles/monokai-sublime.css';

import Vue from 'vue';
import Buefy from 'buefy';
import VueHighlightJS from 'vue-highlight.js';
import components from './components';
import App from './App.vue';

// Components
Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

// Plugins
Vue.use(VueHighlightJS);
Vue.use(Buefy, {
	defaultIconPack: 'fa'
});

new Vue({
	el: '#app',
	render: h => h(App)
});
