// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { ROOT_URL } from '../constants';

const findMiddleCoords = group => {
  let totalLat = 0
  let totalLng = 0
  let middleCoords = ''
  if(group.users){
    if(group.users.length !== 0){
      group.users.forEach( user => {
        const userLat = parseFloat(user.coordinates.split(',')[0])
        const userLng = parseFloat(user.coordinates.split(',')[1])
        totalLat += userLat
        totalLng += userLng
      })
      const middleLat = (totalLat / group.users.length).toFixed(6)
      const middleLng = (totalLng / group.users.length).toFixed(6)
      middleCoords = `${middleLat},${middleLng}`
    }
  }
  return middleCoords
}

export const selectGroup = group => {
  const request = axios.post(`${ROOT_URL}/places`, {
    coordinates: findMiddleCoords(group),
    suggestions: group.suggestions
  })

  return {
    type: 'SELECT_GROUP',
    payload: request,
    meta: {
      group
    }
  }
}
