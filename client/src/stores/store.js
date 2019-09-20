import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const jwt = require('jsonwebtoken');

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart:[],
    status: '',
    token: window.$cookies.get('auth') || '',
    user: jwt.decode(window.$cookies.get('auth'))
  },
  mutations: {
    addToCart(state, item){
        state.cart.push(item);
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.token = window.$cookies.get('auth')
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        window.$cookies.remove('auth')
        resolve()
      })
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: "api/auth/login", data: user, method: 'POST' })
          .then(resp => {
            const user = resp.data.user
            commit('auth_success', user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            window.$cookies.remove('auth')
            reject(err)
          })
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  }
})

export default store