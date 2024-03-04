import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3" // 引入

const app = createApp(App)

// 设置axios
app.config.globalProperties.$axios = axios
// Vue.prototype.$http=axios

// 使用Element Plus
app.use(ElementPlus)

// 挂载应用
app.use(store).use(router).use(Particles).mount('#app')
