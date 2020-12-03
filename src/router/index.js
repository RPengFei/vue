import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form'



const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  }
]

export default new VueRouter({
  routes
})

