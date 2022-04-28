import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const mutations = {
  setPaymentListData(state, payload){
    state.paymentList = payload
  }
}

export default new Vuex.Store({
  state: {
    paymentList: []
  },
  mutations
})
