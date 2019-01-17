// dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// user files
import currentUser from './currentUser';
import groupsReducer from './groupsReducer';
import currentCoords from './currentCoords';
import googleAuthReducer from './googleAuthReducer';

export default combineReducers({
  currentUser,
  groupsReducer,
  currentCoords,
  googleAuthReducer,
  // the following 'form' key is required syntax by 'redux-form'
  form: formReducer
});
