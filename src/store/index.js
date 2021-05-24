import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null
  },
  mutations: {
    SET_TOKEN (state, token) {
      if (typeof token === 'string') {
        state.token = token
      }
      if (typeof token === 'object') {
        try {
          state.token = token.token
        } catch (e) {
          console.log(e)
          state.token = null
        }
      }
    }
  },
  actions: {

  },
  modules: {
  },
  getters:{
    token(state){
      return state.token
    }
  }

})
