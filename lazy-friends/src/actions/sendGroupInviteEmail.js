// dependencies
import axios from "axios";

// user files
import { ROOT_URL, SEND_EMAIL } from '../constants';


export const sendGroupInviteEmail = (userID, email_message) => {

  const request = axios.post(`${ROOT_URL}/mailer`, {
    id: userID,
    message: email_message
  })

  return {
    type: SEND_EMAIL,
    payload: request
  };
}
