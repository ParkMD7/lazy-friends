// dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// user files
import currentUser from './currentUser';
import groupsReducer from './groupsReducer';
import currentCoords from './currentCoords';
import googleAuthReducer from './googleAuthReducer';
import suggestionsReducer from'./suggestionsReducer';

export default combineReducers({
  currentUser,
  groupsReducer,
  currentCoords,
  googleAuthReducer,
  suggestionsReducer,
  // the following 'form' key is required syntax by 'redux-form'
  form: formReducer
});
