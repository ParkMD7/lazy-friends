// user files
import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, SIGNOUT, JOIN_GROUP, LEAVE_GROUP, CREATE_GROUP, SELECT_GROUP } from '../constants';

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  userGroups: [],
  currentGroup: {}
}

const userReducer = (state=defaultState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      let currentGroup
      action.payload.groups.length > 0 ? currentGroup = action.payload.groups[0] : currentGroup = {}
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false, userGroups: action.payload.groups, currentGroup }

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

    case SELECT_GROUP:
      return { ...state, currentGroup: action.group }

    case JOIN_GROUP:
      return { ...state, userGroups: [...state.userGroups, { ...action.group, users: [...action.group.users, state.user] } ], currentGroup: {...action.group, users: [...action.group.users, state.user] } }

    case CREATE_GROUP:
      return { ...state, userGroups: [...state.userGroups, { ...action.payload.data } ], currentGroup: action.payload.data }

    case LEAVE_GROUP:
      const updatedUserGroups = state.userGroups.filter(group => group !== action.group)
      return { ...state, userGroups: [...updatedUserGroups] }

    default:
      return state
  }
}

export default userReducer
