import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueDropZone from 'vue2-dropzone';

import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000/api';

Vue.component('DropZone', VueDropZone);

const router = new VueRouter({
    routes,
    mode: 'history',
});

new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
})
