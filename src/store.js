import Vue from 'vue'
import Vuex from 'vuex'
import {REGISTRATION_URL, LOGIN_URL} from './constants';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false,
      token: null
    }
  },
  mutations: {
    checkLogged: function() {
      console.log('Checking if user is logged in....');
      let token = window.localStorage.getItem('token');
      if(token) {
        this.state.token = token;
        this.state.loggedIn = true;
      } else {
        this.state.token = null;
        this.state.loggedIn = false;
      }
    },
    login: function(userDetails) {
      fetch(LOGIN_URL, {
        method: "POST",
        body: userDetails,
        headers: {
          "Content_Type": "application/json"
        }
      }).then((res) => {
        console.log(res);
      })
    },
    register: function(details) {
      fetch(REGISTRATION_URL, {
        method: "post",
        body: details,
        headers: {
          "Content_Type": "application/json"
        }
      }).then(res => {
        console.log(res);
      })
    }
  },
  actions: {
  }
})
