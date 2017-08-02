import App from './App.vue';

const List = resolve => require(['./components/List.vue'], resolve);
const Upload = resolve => require(['./components/Upload.vue'], resolve);

export const routes = [
    {path: '/list', component: List },
    {path:'/upload', component: Upload }
];