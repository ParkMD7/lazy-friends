import { combineReducers } from 'redux';
import currentUser from './currentUser';
import groupsReducer from './groupsReducer';
import currentCoords from './currentCoords';

export default combineReducers({
  currentUser,
  groupsReducer,
  currentCoords
});
