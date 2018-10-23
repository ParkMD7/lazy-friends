import React from 'react'
import GroupMember from './GroupMember'
import { Card } from 'semantic-ui-react'

class GroupList extends React.Component {
  state = {
    middleCoords: ''
  }

  findMiddleCoords = () => {
    let totalLat = 0
    let totalLng = 0
    let middleCoords = ''
    if(this.props.group.users){
      if(this.props.group.users.length !== 0){
        this.props.group.users.forEach( user => {
          const userLat = parseFloat(user.coordinates.split(',')[0])
          const userLng = parseFloat(user.coordinates.split(',')[1])
          totalLat += userLat
          totalLng += userLng
        })
        const middleLat = (totalLat / this.props.group.users.length).toFixed(6)
        const middleLng = (totalLng / this.props.group.users.length).toFixed(6)
        middleCoords = `${middleLat}, ${middleLng}`
        console.log(middleCoords);
        if (middleCoords !== this.state.middleCoords){
          this.setState({
            middleCoords
          })
          this.props.coords(middleCoords)
        }
      }
    }
  }

  render() {
    console.log(this.props);
    if(JSON.stringify(this.props.group) === JSON.stringify({}) || this.props.group === undefined){
      return null
    }
    this.findMiddleCoords()

    return (
        <div className="ui container center aligned">
          <div>
            <h1>{this.props.group.name}</h1>
            {this.props.group.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
          </div>
        </div>
    );
  }
}

export default GroupList;
