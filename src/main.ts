import './assets/main.css';
import './assets/tailwind.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';
//Register swiper component
register();

const app = createApp(App)
app.use(router)
app.use(createPinia())


app.mount('#app')
