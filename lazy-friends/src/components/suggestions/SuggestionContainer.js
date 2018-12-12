import React, { Component } from 'react';
import {connect} from 'react-redux'
import SuggestionList from './SuggestionList'

class SuggestionContainer extends Component {

  render() {
    return (
      <div className="ui container center aligned" style={{overflowY: 'scroll', height: '550px'}}>
        <SuggestionList />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentGroup,
    currentCoords: state.currentCoords
  }
}

export default connect(mapStateToProps)(SuggestionContainer);
