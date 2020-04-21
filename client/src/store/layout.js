export default {
  state: {
    header: {
      title: '[logo]',
      hasReturn: false,
    }
  },
  getters: {
    header: s => s.header
  },
  mutations: {
    setHeader: (state, payload) => {
      state.header = payload
    },
  },
  actions: {
    changeHeader({ commit }, { title = '[logo]', hasReturn = false }) {
      commit('setHeader', { title, hasReturn })
    }
  }
}
