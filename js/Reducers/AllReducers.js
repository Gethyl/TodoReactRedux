import { combineReducers } from 'redux'
import todoReducer from './ToDoReducers'
import mapsReducer from './MapsReducers'

export default combineReducers({
  todoReducer,
  mapsReducer
})