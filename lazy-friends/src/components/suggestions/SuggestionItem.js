import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'


const SuggestionItem = ({suggestion}) => {
  debugger
  return (
    <div className="ui container center aligned">
      <Card fluid style={{marginBottom: '15px' }}>
        <div width='100%'>
          <h2>{suggestion.name}</h2>
          <Image centered src={suggestion.image_url} style={{height: '250px', width: '100%' }}/>
          <h4>Location: {suggestion.location.display_address.join(' ')}</h4>
          <h4>Call: {suggestion.display_phone}</h4>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign='centered' width={8}>
                <h5>Rating: {suggestion.rating}</h5>
              </Grid.Column>
                {
                  !!suggestion.price ?
                  <Grid.Column textAlign='centered' width={8}><h5>Price: {suggestion.price}</h5></Grid.Column> :
                  null
                }
            </Grid.Row>
          </Grid>
        </div>
      </Card>
    </div>
  );


}

export default SuggestionItem
