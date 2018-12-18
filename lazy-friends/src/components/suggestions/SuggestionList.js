import React from 'react';
import SuggestionItem from './SuggestionItem';
import { connect } from 'react-redux';
// import { testSuggs } from '../../constants/suggestions'

class SuggestionList extends React.Component {
  state = { suggestions: [] }

  // componentDidUpdate(prevProps, prevState) {
  //   this.getSuggestions()
  // }

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

    if(this.props.currentCoords !== ''){
      return fetch('http://localhost:3000/places', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            coordinates: this.props.currentCoords
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
    this.getSuggestions()
    if(this.state.suggestions.length === 0){
      return <p>There are no suggestions in this area.</p>
    }

    const sortedSuggestions = this.state.suggestions.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
    // const sortedSuggestions = testSuggs.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
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
  return {
    currentCoords: state.currentCoords
  }
}

export default connect(mapStateToProps)(SuggestionList);
