import { combineReducers } from 'redux';
import currentUser from './currentUser';
import groupsReducer from './groupsReducer';
import currentCoords from './currentCoords';
import googleAuthReducer from './googleAuthReducer';

export default combineReducers({
  currentUser,
  groupsReducer,
  currentCoords,
  googleAuthReducer
});
