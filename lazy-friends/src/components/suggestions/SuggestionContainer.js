import React, { Component } from 'react';
import SuggestionList from './SuggestionList'

class SuggestionContainer extends Component {

  render() {
    return (
      <div className="ui container center aligned" style={{overflowY: 'scroll', height: '600px'}}>
        <SuggestionList />
      </div>
    );
  }

}

export default SuggestionContainer;
