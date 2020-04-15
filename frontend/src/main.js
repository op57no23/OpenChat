import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter)

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
	console.log(to);
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {return next('/register');
  }
  else if ((authRequired && loggedIn) || (!authRequired && !loggedIn)) {return next();
  }
  else {return next('/chat');
  }
})

new Vue({
		router,
		store,
		render: h => h(App),
}).$mount('#app');

			
