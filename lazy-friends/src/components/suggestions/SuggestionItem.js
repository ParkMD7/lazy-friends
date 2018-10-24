import React from 'react'
import { Card } from 'semantic-ui-react'


const SuggestionItem = ({suggestion}) => {

  return (
    <div className="ui container center aligned">
      <Card fluid>
        <div width='100%'>
          <h2>{suggestion.name}</h2>
          {/* <div>
            <img src={suggestion.photos.html_attributions[0].split('"')[1]} />
          </div> */}
          <h4>Location: {suggestion.vicinity}</h4>
          <h5>Stars: {suggestion.rating}</h5>
        </div>
      </Card>
    </div>
  );


}

export default SuggestionItem
