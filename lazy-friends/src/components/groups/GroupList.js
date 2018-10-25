import React from 'react'
import GroupMember from './GroupMember'
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

class GroupList extends React.Component {
  state = {
    middleCoords: ''
  }

  findMiddleCoords = () => {
    let totalLat = 0
    let totalLng = 0
    let middleCoords = ''
    if(this.props.currentGroup.users){
      if(this.props.currentGroup.users.length !== 0){
        this.props.currentGroup.users.forEach( user => {
          const userLat = parseFloat(user.coordinates.split(',')[0])
          const userLng = parseFloat(user.coordinates.split(',')[1])
          totalLat += userLat
          totalLng += userLng
        })
        const middleLat = (totalLat / this.props.currentGroup.users.length).toFixed(6)
        const middleLng = (totalLng / this.props.currentGroup.users.length).toFixed(6)
        middleCoords = `${middleLat},${middleLng}`
        console.log(middleCoords);
        this.props.coords(middleCoords)
      }
    }
  }

  componentDidUpdate() {
    this.findMiddleCoords()
  }

  render() {
    if(JSON.stringify(this.props.currentGroup) === JSON.stringify({}) || this.props.currentGroup === undefined){
      return null
    }
    // this.findMiddleCoords()

    return (
      <div className="ui container center aligned" style={{overflowY: 'scroll', height: '645px'}}>
        <div>
          <h1>Group: {this.props.currentGroup.name}</h1>
          {this.props.currentGroup.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.currentGroup
  }
}

export default connect(mapStateToProps)(GroupList);
