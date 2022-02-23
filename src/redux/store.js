import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tweetReducer from './reducer/tweet.reducer'

const store = createStore(tweetReducer, applyMiddleware(thunk))

export default store