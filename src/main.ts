import { createApp } from 'vue';
import './styles/style.css';
import './styles/rules-shared.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'buefy/dist/css/buefy.css';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
