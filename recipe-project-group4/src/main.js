import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css'
//import Vue from 'vue'



//Vue.use(IconsPlugin)


const app = createApp(App)

app.use(BootstrapVue)

app.use(router)

app.mount('#app')
