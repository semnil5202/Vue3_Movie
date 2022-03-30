import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js' //index 생략가능 따라서 가장 기본이되는 파일의 명은 index로 권장
import store from './store/index.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')