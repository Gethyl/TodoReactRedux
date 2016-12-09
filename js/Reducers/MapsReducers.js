import update from 'immutability-helper';

const initialState = { markers: [{
                           position: {
                               lat: 12.9716,
                               lng: 77.5946,
                           },
                           key: "Bangalore",
                           defaultAnimation: 2
                       }]
                      }

const mapsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_PIN':
      return {
        ...state,
        markers: state.markers.concat(action.newMarker)
      }
    case 'REMOVE_PIN':
      return {
        ...state,
        markers: update(state.markers, {$splice: [[action.index, 1]]})
      }
    default:
      return {...state}
  }
}

export default mapsReducer;