// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { FETCH_GROUP, ROOT_URL } from '../constants';


export const fetchGroup = (id) => {
  const request = axios.get(`${ROOT_URL}/groups/${id}`)

  return {
    type: FETCH_GROUP,
    payload: request // redux-promise middleware will auto resolve this promise whenever it sees this action
  };
}
