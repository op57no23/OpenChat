import Layout from '@/components/Layout'
import Login from '@/components/Login'
import Register from '@/components/Register'

const routes = [
		{path: '/chat', name: 'chat', component: Layout},
		{path: '/register', name: 'register', component: Register},
		{path: '/login', name: 'login', component: Login},
		{path: '*', redirect: '/register'}
];

export default routes;
