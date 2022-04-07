import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' //index 생략가능 따라서 가장 기본이되는 파일의 명은 index로 권장
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
    .use(router)
    .use(store)
    .use(loadImage)
    .mount('#app')