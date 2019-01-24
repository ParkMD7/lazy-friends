// dependencies
import axios from "axios";

// user files
import { ROOT_URL, SEND_INVITE } from '../constants';


export const sendEventInviteToGroup = (groupID, email_message) => {

  const request = axios.post(`${ROOT_URL}/event_invite`, {
    id: groupID,
    message: email_message
  })

  debugger
  return {
    type: SEND_INVITE,
    payload: request
  };
}
