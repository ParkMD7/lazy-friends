import React from 'react'
import { Card, Image, Grid, Button, Icon } from 'semantic-ui-react'


const SuggestionItem = ({suggestion}) => {
  // console.log('%c SuggestionItem Props: ', 'color: pink', suggestion)

  const handleCreateGroupEvent = (event) => {
    event.preventDefault()
    console.log('Event Created')
  }

  return (
    <div className="ui container center aligned">
      <Card centered fluid style={{marginBottom: '15px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'rgba(250, 208, 155)' }}>
        <Card.Header style={{fontSize: '25px', marginTop: '10px'}}>{suggestion.name}</Card.Header>
        <br />
        <Card.Meta style={{color: 'white', fontSize: '17px'}}>{suggestion.location.display_address.join(' ')}</Card.Meta>
        <Image centered src={suggestion.image_url} alt="oh no!" style={{height: '300px', width: '325px' }}/>
        <Card.Content style={{fontSize: '17px'}}>
          <Card.Meta style={{color: 'white'}}>{ !!suggestion.display_phone ? suggestion.display_phone : "Venue's Phone Number Not Listed" }</Card.Meta>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column textAlign='center' width={16}>
                <Card.Description>Venue Type: { !!suggestion.categories[0].title ? suggestion.categories[0].title : 'Not Available' } </Card.Description>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign='center' width={8}>
                <Card.Description>Rating: { !!suggestion.rating ? `${suggestion.rating}/5 (${suggestion.review_count} Reviews)` : 'Not Available' } </Card.Description>
              </Grid.Column>
              <Grid.Column textAlign='centered' width={8}>
                <Card.Description>Price: { !!suggestion.price ? suggestion.price : 'Not Available' } </Card.Description>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Card.Content extra>
          <Button style={{color: 'black', backgroundColor: 'rgba(250, 208, 155)'}} fluid onClick={() => this.handleCreateGroupEvent()}>
            <Icon name='plus' />
            Create Group Event At <span style={{textDecoration: 'underline'}}>{suggestion.name}</span>
          </Button>
        </Card.Content>
      </Card>
    </div>
  );


}

export default SuggestionItem
