import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN_URL, HEALTH_ISSUES, ANNOUNCEMENTS, BANNER_ANNOUNCEMENTS } from './constants';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false,
      token: null,
      user: null
    },
    status: "loaded"
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
    },
    loading: function (state) {
      state.status = "loading";
    }
  },
  getters: {
    loggedIn: function (state) {
      return state.auth.loggedIn;
    },
    role: function(state) {
      return state.auth.user.authorities[0].authority;
    },
    userId: function(state) {
      return state.auth.user.id;
    },
    token: function(state) {
      return state.auth.token;
    }
  },
  actions: {
    checkLogin({ commit }) {
      console.log('Checking if user is logged in....');
      let token = window.localStorage.getItem('token');
      let user = window.localStorage.getItem('user');
      commit('reLogin', { token, user });
    },

    async login({ commit }, payload) {
      return await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify(payload.credentials),
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          commit("login", res);
          window.location.reload();
          return payload.redirect();
        })
        .catch(() => {
          return payload.redirect({ path: "/login", query: { error: true } });
        });
    },
    logout({ commit }, payload) {
      commit('logout');
      window.location.reload();
      payload.redirect();
    },

    async fetchPosts({ commit }, payload) {
      let postUrl;
      if (payload.role == "ROLE_ADMIN") {
        postUrl = BANNER_ANNOUNCEMENTS;
      } else if (payload.role == "ROLE_PATIENT") {
        postUrl = HEALTH_ISSUES.replace("{id}", payload.id);
      } else if (payload.role == "ROLE_DOCTOR") {
        postUrl = ANNOUNCEMENTS;
      }

      console.log(postUrl, "This is the post url,,,, ");
      commit("loading");
      return fetch(postUrl, { headers: { "Authorization": `Bearer ${this.state.auth.token}` } })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))
    }
  }
})
