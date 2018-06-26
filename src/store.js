let user = localStorage.getItem('user');

if (!user) {
  user = null;
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store ({

  state: {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    aurth_error: null
  },

  getters: {
    isLoading(state) {
      return state.loading
    },

    isLoggedIn(state) {
      return state.isLoggedIn
    },

    currentUser(state) {
      return state.currentUser
    },

    authError(state) {
      return state.auth_error
    }

  },

  mutations: {

    login(state) {
      state.loading = true;
      state.aurth_error = null;
    },

    loginSucces(state, payload) {

      state.aurth_error = null;
      state.isLoggedIn = true;
      state.loading = false;

      state.currentUser = {
        user: payload.user,
        token: payload.token
      };

      localStorage.setItem("user", state.currentUser);
    },

    loginFailed(state, payload) {
      state.loading = false
      state.auth_error = payload.error
    },

    logout(state) {
      localStorage.removeItem("user")
      state.isLoggedIn = false
      state.currentUser = null
    }
  },

  actions: {
    login(context) {
      context.commit('login');
    }

  }
})