import React, { Component } from 'react';
import GroupContainer from './groups/GroupContainer'
import { Grid } from 'semantic-ui-react'

class MainPage extends Component {

  render() {
    return (
      <Grid container columns={3}>

          <Grid.Column>
            <GroupContainer />
          </Grid.Column>

          <Grid.Column>
            <h1>Google Map</h1>
          </Grid.Column>

          <Grid.Column>
            <h1>Suggestions</h1>
          </Grid.Column>

      </Grid>
    );
  }

}

export default MainPage;
