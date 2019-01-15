// user files
import { GOOGLE_LOG_IN, GOOGLE_LOG_OUT } from '../constants';


const defaultState = {
  isSignedIn: null,
  userId: null
}

const googleAuthReducer = (state=defaultState, action) => {
  switch (action.type) {
    case GOOGLE_LOG_IN:
      return { ...state, isSignedIn: true, userId: action.payload }

    case GOOGLE_LOG_OUT:
      return { ...state, isSignedIn: false, userId: null}

    default:
      return state
  }
}

export default googleAuthReducer
