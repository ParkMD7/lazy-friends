const defaultState = []

const suggestionsReducer = (state=defaultState, action) => {
  switch (action.type) {
    case "SELECT_GROUP":
        return action.payload.data

    default:
      return state
  }
}

export default suggestionsReducer