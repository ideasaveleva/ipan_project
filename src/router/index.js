import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Catalog from '@/views/Catalog'
import Contacts from '@/views/Contacts'

const routes = [
  {
    path: '/',
    name: 'IPAN',
    component: Home
  },
  {
    path: '/about',
    name: 'О КОМПАНИИ',
		component: About
  },
	{
    path: '/catalog',
    name: 'КАТАЛОГ',
    component: Catalog
  },
	{
    path: '/contacts',
    name: 'КОНТАКТЫ',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
