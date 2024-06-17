import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ContactComponent from './pages/ContactComponent.vue';
import AboutComponent from './pages/AboutComponent.vue';
import SingleMovie from './pages/SingleMovie.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactComponent,
        },        
        {
            path: '/about',
            name: 'about',
            component: AboutComponent,
        },
        {
            path: '/movies/:id',
            name: 'single-movie',
            component: SingleMovie,
        },
    ]
});
export { router };