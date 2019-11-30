import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //state management : menyimpan data dan agar data dapat diakses dihalaman lain
  //variabel tempat penyimpanan
  state: {
    status: '',
    token: JSON.parse(localStorage.getItem('token')) || {},
    user: JSON.parse(localStorage.getItem('user')) || {},
    client_id: 2,
    client_secret: 'o9tQ8AkM7BcShQkuXxKebMRwWc98yR5fQxnxF07E',
    url: 'https://skripsi-ela.ardata.co.id',
    // jawaban tiap bidang
    fields: [],
    review: {
      name: null
    }
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.user = ''
    },
    setFields (state, payload) {
      state.fields = payload.fields
    },
    addFields (state, payload) {
      state.fields.push(payload.field)
    },
    clearFields (state) {
      state.fields = []
    },
    clearReview (state) {
      state.review = {
        name: null
      }
    }
  },
  //proses
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        const access = {
          grant_type: 'password',
          client_id: this.state.client_id,
          client_secret: this.state.client_secret,
          ...user
        }
        axios.post(`${this.state.url}/oauth/token`, access)
          .then(resp => {
            const token = resp.data
            localStorage.setItem('token', JSON.stringify(token))
            axios.defaults.headers.common.Accept = 'application/json'
            axios.defaults.headers.common.Authorization = `${token.token_type} ${token.access_token}`
            axios.get(`${this.state.url}/api/user`).then(res => {
              const user = res.data
              localStorage.setItem('user', JSON.stringify(user))
              // Add the following line:
              const payload = {
                token: token,
                user: user
              }
              commit('auth_success', payload)
              resolve(resp)
            })
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.clear()
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    },
    showFieldLists ({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${this.state.url}/api/fieldlists/${id}`).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    sendSurvey ({ commit }) {
      return new Promise((resolve, reject) => {
        const access = {
          session: {
            branch_id: this.state.user.branch_id,
            name: 'Survey ke '
          },
          fields: this.state.fields
        }
        if (this.state.review.name != null) {
          access.review = this.state.review
        }
        axios.post(`${this.state.url}/api/sessions`, access).then(res => {
          commit('clearFields')
          commit('clearReview')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token.access_token,
    authStatus: state => state.status,
    user: state => state.user,
    fields: state => state.user.branch.field_lists
  }
})
