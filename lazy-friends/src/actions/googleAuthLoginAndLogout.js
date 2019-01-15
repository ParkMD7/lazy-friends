// user files
import { GOOGLE_LOG_IN, GOOGLE_LOG_OUT } from '../constants';

export const googleLogIn = (userId) => {
  return {
    type: 'GOOGLE_LOG_IN',
    payload: userId
  }
}


export const googleLogOut = () => {
  return {
    type: 'GOOGLE_LOG_OUT'
  }
}
