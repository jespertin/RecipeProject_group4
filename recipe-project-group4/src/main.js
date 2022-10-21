import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import Vue from 'vue'



//Vue.use(IconsPlugin)


const app = createApp(App)



app.use(router)

app.mount('#app')
