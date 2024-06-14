import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import MovieList from './pages/MovieList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/movies',
            name: 'movielist',
            component: MovieList,
        },
        
    ]
});
export { router };