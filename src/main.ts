import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import "./style/_main.scss"
import router from './router'

window.addEventListener("resize", () => {
  store.commit("setIsMobile")
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
