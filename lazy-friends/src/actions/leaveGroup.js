// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { ROOT_URL, LEAVE_GROUP } from '../constants';


export const leaveGroup = (userID, group) => {
  const request = axios.patch(`${ROOT_URL}/groups/${group.id}/leave`, {
    user: userID
  })
  debugger
  return {
    type: LEAVE_GROUP,
    payload: request,
    userID: userID,
    group: group
  };
}
