import { InjectionKey } from 'vue'
import {createStore, useStore as baseUseStore, Store} from 'vuex'

export interface State {
  isBlack: boolean
  isFr: boolean
  isMobile: boolean
}

export const key: InjectionKey<Store<State>> = Symbol('state')

export default createStore<State>({
  state: {
    isBlack: true,
    isFr: true,
    isMobile: true,
  },

  mutations: {
    toggleSiteTheme(state) {
      state.isBlack = !state.isBlack
    },

    setIsMobile(state) {
      state.isMobile = window.innerWidth < 900
    },

    toggleSiteLang(state) {
      state.isFr = !state.isFr
    },
  },

  actions: {

  },

  modules: {
  }
})
