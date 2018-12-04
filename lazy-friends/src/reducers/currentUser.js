// export default (state = {
//   id: 0,
//   username: '',
//   name: '',
//   location: '',
//   groups: []
// }, action) => {
//   switch (action.type) {
//     case 'LOGIN_OR_SIGN_UP':
//       return Object.assign({}, action.user)
//     case 'SIGNOUT':
//       return Object.assign({}, action.user)
//     default:
//       return state
//   }
// }

import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, SIGNOUT, JOIN_GROUP, LEAVE_GROUP } from '../constants';

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  userGroups: []
}

const userReducer = (state=defaultState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
    debugger
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false, userGroups: action.payload.groups }

    case AUTHENTICATING_USER: //tells the app we're fetching
      return { ...state, authenticatingUser: true }

    case AUTHENTICATED_USER:
      return { ...state, authenticatingUser: false }

    case FAILED_LOGIN: //for error handling
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }

    case SIGNOUT:
      localStorage.removeItem('jwt')
      return defaultState

    case JOIN_GROUP:
      return { ...state, userGroups: [...state.userGroups, action.group] }

    case LEAVE_GROUP:
      // console.log('%c GoalReducer Action : ', 'color: orange', action.group)
      // const currentState = state.userGroups
      const updatedUserGroups = state.userGroups.filter(group => group !== action.group)
      // debugger
      // return { ...state, userGroups: [...state.userGroups.filter(goal => goal !== action.goal)] }
      return { ...state, userGroups: [...updatedUserGroups] }

    default:
      return state
  }
}

export default userReducer
