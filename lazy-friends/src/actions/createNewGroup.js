// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { ROOT_URL, CREATE_GROUP } from '../constants';


export const createNewGroup = (userID, newGroupName, suggestion, description) => {
  const request = axios.post(`${ROOT_URL}/groups`, {
      group: {
        name: newGroupName,
        user_id: userID,
        suggestions: suggestion,
        description
      }
  })
  return {
    type: CREATE_GROUP,
    payload: request
  };
}
