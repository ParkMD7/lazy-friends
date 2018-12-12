export default (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_COORDINATES':
      return action.coordinates
    default:
      return state
  }
}
