import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router/main'
import 'flexboxgrid2'

createApp(App)
    .use(router)
    .mount('#app');
