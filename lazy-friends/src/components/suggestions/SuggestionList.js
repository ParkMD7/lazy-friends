import React from 'react';
import SuggestionItem from './SuggestionItem';
import { connect } from 'react-redux';

class SuggestionList extends React.Component {
  state = {
    suggestions: []
  }

  componentDidUpdate(prevProps, prevState) {
    this.getSuggestions()
  }

  checkResults = (results) => {
    let isEqual = true

    if(this.state.suggestions.length === 0){
      return false
    }

    results.forEach( (result, index) => {
      if(result.id !== this.state.suggestions[index].id){
        isEqual = false
      }
    })
    return isEqual
  }

  getSuggestions = () => {
    let results

    if(this.props.currentCoords.coordinates !== ''){
      return fetch('http://localhost:3000/places', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            coordinates: this.props.currentCoords.coordinates
          })
        })
      .then(response => response.json())
      .then(googleData => {
        if(googleData.status === 'OK'){
          if(!(this.checkResults(googleData.results))){
            this.setState({
              suggestions: googleData.results
            })
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  render(){
    if(this.state.suggestions.length === 0){
      return <p>Loading Suggestions...</p>
    }

    const suggestionItem = this.state.suggestions.map( suggestion => {
      return (
        <SuggestionItem
          key={suggestion.id}
          suggestion={suggestion}
        />
      )
    })


    return (
      <div>
        {suggestionItem}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentGroup,
    currentCoords: state.currentCoords
  }
}

export default connect(mapStateToProps)(SuggestionList);
