export const loginOrSignup = user => {
  return {
    type: 'LOGIN_OR_SIGN_UP',
    user
  }
}

export const signout = user => {
  return {
    type: 'SIGNOUT',
    user
  }
}
