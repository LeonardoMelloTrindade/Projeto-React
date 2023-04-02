import  counter  from './counter'
import  arrayItens from './arrayItens'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter,
    arrayItens
})

export default rootReducer