import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    paths: ['user.name']
  })(store)
}
