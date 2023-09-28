import { createApp } from 'vue';
import App from './App.vue'; 
import router from './router';
import axios from 'axios';
import './assets/css/style.css';

const app = createApp(App);

// Настройте Axios
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

app.use(router);
app.mount('#app');
