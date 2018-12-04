import { combineReducers } from 'redux';
import currentUser from './currentUser';
import currentGroup from './currentGroup';
import groupsReducer from './groupsReducer';
import currentCoords from './currentCoords';

export default combineReducers({
  currentUser,
  currentGroup,
  groupsReducer,
  currentCoords
});
