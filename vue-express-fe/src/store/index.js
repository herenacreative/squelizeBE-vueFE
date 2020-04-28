import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUser(state, users) {
      state.users = users
    }
  },
  actions: {
    async getUser(context) {
      const {
        data: { users }
      } = await axios.get("http://localhost:3000/api/v1/users");

      context.commit('setUser', users)
    }
  },
  modules: {
  }
})
