import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    str:null
  },
  mutations: {
    setName(state,data){
      state.str=data
    }
  },
  actions: {
  },
  modules: {
  }
})
