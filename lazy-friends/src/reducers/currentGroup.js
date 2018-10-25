export default (state = {
  id: 0,
  name: '',
  users: []
}, action) => {
  switch (action.type) {
    case 'SELECT_GROUP':
      return Object.assign({}, action.group)
    default:
      return state
  }
}
