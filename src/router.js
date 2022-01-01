import { createRouter, createWebHistory } from 'vue-router'
import store from 'store'

import Home from './pages/Home.vue'

const mustLoginPage = ['Mine']

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path:'', name: 'Books', component: ()=> import('./pages/Books.vue'), alias: '/'},
            {path:'shelf', name: 'Shelf', component: ()=> import('./pages/Shelf.vue')},
        ]
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () => import('./pages/Mine.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (mustLoginPage.indexOf(to.name) > -1 && !store.get('user')) next({name: 'Login', query: {redirect: to.fullPath}})
    else next()
})

export default router
