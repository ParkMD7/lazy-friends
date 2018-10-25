import { combineReducers } from 'redux';
import currentUser from './currentUser';
import currentGroup from './currentGroup';
import currentCoords from './currentCoords';

export default combineReducers({
  currentUser,
  currentGroup,
  currentCoords
});
