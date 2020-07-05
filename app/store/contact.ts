import * as Vuex from 'vuex'

interface ICommit {}

interface IState {
  isSnackbar: boolean
  snackbarText: string
}

export const state = (): IState => ({
  isSnackbar: false,
  snackbarText: ''
})

export const mutations = {
  SET_IS_SNACKBAR(state: IState, payload: boolean) {
    state.isSnackbar = payload
  },

  SET_SNACKBAR_TEXT(state: IState, payload: string) {
    state.snackbarText = payload
  }
}

export const actions = {}
