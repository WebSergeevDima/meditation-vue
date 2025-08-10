import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/stores/auth.store.ts";

export const router = createRouter({
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('./views/NotFoundView.vue')
        },
        {
            path: '/login',
            name: 'auth',
            component: () => import('./views/LoginView.vue')
        },
        {
            path: '/registration',
            name: 'reg',
            component: () => import('./views/RegistrationView.vue')
        },
        {
            path: '/',
            name: 'main',
            component: () => import('./views/HomeView.vue')
        },
        {
            path: '/stats',
            name: 'stats',
            component: () => import('./views/StatsView.vue')
        },
        {
            path: '/timer/:id',
            name: 'timer',
            component: () => import('./views/TimerView.vue')
        },
    ],
    history: createWebHistory(),
})

router.beforeEach((to, from) => {
    const storeAuth = useAuthStore()
    if (!storeAuth.getToken && to.name !== 'auth' && to.name !== 'reg') {
        return {name: 'auth'}
    }
})

