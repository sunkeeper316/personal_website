import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/styles/main.css'
import './assets/styles/styles.scss'
import router from './router'

createApp(App).use(router).mount('#app')
