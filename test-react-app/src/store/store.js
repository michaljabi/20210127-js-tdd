import {createStore, combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'

const globalState = {
	user: currentUserReducer
}

export default createStore( combineReducers(globalState) )
