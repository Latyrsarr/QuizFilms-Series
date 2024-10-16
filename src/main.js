import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import './index.css';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes.js';

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
