import React from 'react'
import GroupMember from './GroupMember'

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
          const userLat = parseInt(user.coordinates.split(',')[0])
          const userLng = parseInt(user.coordinates.split(',')[1])
          totalLat += userLat
          totalLng += userLng
        })
        const middleLat = totalLat / this.props.group.users.length
        const middleLng = totalLng / this.props.group.users.length
        middleCoords = `${middleLat}, ${middleLng}`
        if (middleCoords !== this.state.middleCoords){
          this.setState({
            middleCoords
          })
        }
      }
    }
  }

  render() {
    if(JSON.stringify(this.props.group) === JSON.stringify({}) || this.props.group === undefined){
      return null
    }

    return (
      <div>
        <div>
          {this.findMiddleCoords()}
          <h1>{this.props.group.name}</h1>
          {this.props.group.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
        </div>
        <div>
          <button>Meet Up</button>
        </div>
      </div>
    );
  }
}

export default GroupList;
