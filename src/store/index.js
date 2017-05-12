import getters from './getters'
import mutations from './mutations'
import account from './modules/account'
import messages from './modules/messages'
import topics from './modules/topics'
import users from './modules/users'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    account,
    messages,
    topics,
    users
  },
  mutations,
  state: {
    error: '',
    loading: false,
    module: 'Home',
    token: ''
  }
})
