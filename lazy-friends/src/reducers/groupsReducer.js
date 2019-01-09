// dependencies
import _ from 'lodash' // allows me to change data type of fetched goals from an array to an object w/ key of ID

// user files
import { FETCH_GROUPS, FETCH_GROUP, CREATE_GROUP } from '../constants';

const defaultState = {
  groups: []
}

export default function(state=defaultState, action){
  switch(action.type){

    case FETCH_GROUPS:
      // using lodash to turn an array of fetched goals into an object with a key/value pair of goal ID & goal object
      return _.mapKeys(action.payload.data.groups, 'id')

    case FETCH_GROUP:
    debugger
      // include all groups we've fetched above & put them into this new object
      // add the newly fetched group that a user has clicked on as a new key:value pair
      return { ...state, [action.payload.data.id]: action.payload.data }

    case CREATE_GROUP:
    debugger
      return { ...state, groups: [...state.groups, action.payload.data] }

    default:
      return state
  }
}
