import * as Vuex from 'vuex'

interface ICommit {
  commit: Vuex.Commit
  dispatch: Vuex.Dispatch
}

export interface IWork {
  title: string
  src: string
  text: string
  description: string
  technologies: Array<string>
  github: string
  page: string
}

interface IState {
  modal: boolean
  work: IWork
}

export const state = (): IState => ({
  modal: false,
  work: {
    title: '',
    src: '',
    text: '',
    description: '',
    technologies: [],
    github: '',
    page: ''
  }
})

export const mutations = {
  SET_MODAL(state: IState, payload: boolean) {
    state.modal = payload
  },

  SET_WORK(state: IState, payload: IWork) {
    state.work = payload
  }
}

export const actions = {}
