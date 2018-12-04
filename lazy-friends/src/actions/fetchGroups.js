// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { FETCH_GROUPS, ROOT_URL } from '../constants';


export const fetchGroups = () => {
  const request = axios.get(`${ROOT_URL}/groups`)

  return {
    type: FETCH_GROUPS,
    payload: request // redux-promise middleware will auto resolve this promise whenever it sees this action
  }
};
