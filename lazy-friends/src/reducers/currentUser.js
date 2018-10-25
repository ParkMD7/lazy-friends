export default (state = {
  id: 0,
  username: '',
  name: '',
  location: '',
  groups: []
}, action) => {
  switch (action.type) {
    case 'LOGIN_OR_SIGN_UP':
      return Object.assign({}, action.user)
    case 'SIGNOUT':
      return Object.assign({}, action.user)
    default:
      return state
  }
}
