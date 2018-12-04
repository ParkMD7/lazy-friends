// user files
import { FETCH_GROUPS } from '../constants';


export default function(state={}, action){
  switch(action.type){

    case FETCH_GROUPS:
      debugger
      return action.payload.data

    default:
      return state
  }
}
