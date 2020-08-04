import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList:{
      this.$api
      .postcar_data({})
      .then((res) => {
        this.shopList = res.shopList;
        console.log(this.shopList);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
