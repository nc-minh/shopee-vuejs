import { createStore } from 'vuex'

export default createStore({
  //state: Nơi lưu trữ (data)
  state: {
    titleRegister: ''
  },
  getters: {
    getTitleRegister: state => state.titleRegister
  },
  mutations: {
    setTitleRegister(state, newTitleRegister){
      state.titleRegister = newTitleRegister
    }
  },
  actions: {
    setTitleRegister(context){
      console.log('update title')
      context.commit('setTitleRegister', 'Đăng nhập')
    }
  },
  modules: {
  }
})
