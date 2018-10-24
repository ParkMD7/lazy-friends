import React from 'react';
import SuggestionItem from './SuggestionItem';

class SuggestionList extends React.Component {

  state = {
    suggestions: []
  }

  componentDidUpdate(prevProps, prevState) {
    // if(JSON.stringify(prevState) !== JSON.stringify(this.state.suggestions)){
      this.getSuggestions()

  }

  checkResults = (results) => {
    let isEqual = true

    if(this.state.suggestions.length === 0){
      return false
    }

    results.forEach( (result, index) => {
      //debugger
      if(result.id !== this.state.suggestions[index].id){
        isEqual = false
      }
    })
    console.log(isEqual)
    return isEqual
  }

  getSuggestions = () => {
    let results

      if(this.props.mapCoords !== ''){
      return fetch('http://localhost:3000/places', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            coordinates: this.props.mapCoords
          })
        })
      .then(response => response.json())
      .then(googleData => {
        if(googleData.status === 'OK'){
          //debugger
          if(!(this.checkResults(googleData.results))){
            console.log('check')
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

export default SuggestionList;
