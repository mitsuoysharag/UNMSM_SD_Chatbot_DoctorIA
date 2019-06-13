import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    { 
      path: '/inicio',
      name: 'inicio',
      component: () => import('./views/Inicio.vue')
    },
    { 
      path: '/formulario',
      name: 'formulario',
      component: () => import('./views/Formulario.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/Chat.vue')
    },
  ]
})