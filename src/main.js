import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Bootstrap y jquery
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// fontawesome icons..
import '@fortawesome/fontawesome-free/css/all.css'
// custom css
import './assets/css/index.css'

Vue.config.productionTip = false

router.beforeEach( (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = store.state.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if(to.path == '/login' && currentUser){
    next('/');
  } else{
    next();
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
