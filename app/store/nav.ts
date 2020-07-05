import * as Vuex from 'vuex'

interface ICommit {
  commit: Vuex.Commit
  dispatch: Vuex.Dispatch
}

interface IState {
  isNav: boolean
}

export const state = (): IState => ({
  isNav: false
})

export const mutations = {
  SET_IS_NAV(state: IState, payload: boolean) {
    state.isNav = payload
  }
}

export const actions = {}
