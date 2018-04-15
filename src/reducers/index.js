import {combineReducers} from 'redux'
import global from './global'
import front from './front'
import admin from './admin'

export default combineReducers({
  global,
  front,
  admin
})
