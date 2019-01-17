import React from 'react';
import SuggestionItem from './SuggestionItem';
import { connect } from 'react-redux';

class SuggestionList extends React.Component {
  render(){
    if(!this.props.suggestions.businesses){
      return <p>There are no suggestions in this area.</p>
    }
    let sortedSuggestions = []
    if(!!this.props.suggestions.businesses){
      sortedSuggestions = this.props.suggestions.businesses.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
    } 
    const suggestionItem = sortedSuggestions.map( suggestion => (
      <SuggestionItem key={suggestion.id} suggestion={suggestion} />
    ))

    return (
      <div>
        {suggestionItem}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  debugger
  return {
    currentCoords: state.currentCoords,
    currentGroup: state.currentUser.currentGroup,
    suggestions: state.suggestionsReducer
  }
}

export default connect(mapStateToProps)(SuggestionList);
