// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { ROOT_URL, JOIN_GROUP } from '../constants';


export const joinGroup = (userID, group) => {
  const request = axios.patch(`${ROOT_URL}/groups/${group.id}`, {
      user: userID
  })
  return {
    type: JOIN_GROUP,
    payload: request,
    group: group
  };
}
