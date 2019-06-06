import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Inicio from './views/Inicio.vue'
import Formulario from './views/Formulario.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      name: 'login',
      component: Login
    },
    { 
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    { 
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    }
  ]
})