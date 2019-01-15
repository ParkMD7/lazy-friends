// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// user files
import { GOOGLE_CLIENT_ID } from '../../constants/GoogleClientId'
import { googleLogIn, googleLogOut } from '../../actions/googleAuthLoginAndLogout'

class GoogleAuth extends Component {

  componentDidMount() {
    // this AF CB will be called once the client:auth2 has been successfully loaded into the gapi
    window.gapi.load('client:auth2', ()=> {
      window.gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        // this scope key tells us which aspects of the gapi we want to access from our users
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        // update auth status in Redux Store
        this.onGoogleAuthChange(this.auth.isSignedIn.get())
        // this function will be called anytime the users authentication status changes
        this.auth.isSignedIn.listen(this.onGoogleAuthChange)
      })
    })
  }

  onGoogleAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.googleLogIn(this.auth.currentUser.get().getId())
    }
    else{
      this.props.googleLogOut()
    }
  }

  renderAuthButton = () => {
    if(this.props.isSignedIn === null){
      return null
    }
    else if(this.props.isSignedIn){
      return(
        <button onClick={this.onGoogleAuthSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    }
    else{
      return(
        <button onClick={this.onGoogleAuthSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      )
    }
  }

  onGoogleAuthSignInClick = () => {
    this.auth.signIn()
  }

  onGoogleAuthSignOutClick = () => {
    this.auth.signOut()
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }

}

const mapStateToProps = (state) => {
  return { isSignedIn: state.googleAuthReducer.isSignedIn }
}


export default connect(mapStateToProps, { googleLogIn, googleLogOut })(GoogleAuth);
