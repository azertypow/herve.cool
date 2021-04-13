import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import "./style/_main.scss"
import router from './router'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
