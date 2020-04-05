import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN_URL } from './constants';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false,
      token: null,
      user: null
    }
  },
  mutations: {
    reLogin(state, userDetails) {
      state.auth.token = userDetails.token;
      state.auth.loggedIn = !!userDetails.token;
      state.auth.user = JSON.parse(userDetails.user);

      console.log(state);
    },
    login(state, loginDetails) {
      localStorage.setItem("token", loginDetails.token);
      localStorage.setItem("user", JSON.stringify(loginDetails.user));
      state.token = loginDetails.token;
      state.user = loginDetails.user;
    },
    logout: function (state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.auth = {
        loggedIn: false,
        token: null,
        user: null
      }

      console.log(state, "From logout mutation");
    }
  },
  getters: {
    auth: function (state) {
      return state.auth.loggedIn;
    }
  },
  actions: {
    checkLogin({ commit }) {
      console.log('Checking if user is logged in....');
      let token = window.localStorage.getItem('token');
      let user = window.localStorage.getItem('user');
      commit('reLogin', { token, user });
    },

    async login({ commit }, options) {

      await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify(options.credentials),
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if(res.status && res.status != 200) {
            commit('logout');
            return options.redirect('/login');
          }
          console.log("Logging in", options);
          commit("login", res);
          return options.redirect();
        })
        .catch(() => {
          // console.log();
          // context.error = res.subErrors;
        });
    },

    logout({commit}) {
      commit('logout');
    }
  }
})
