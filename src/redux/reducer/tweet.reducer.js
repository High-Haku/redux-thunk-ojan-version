import { GET_REQ, REQ_SUCCESS } from "../action/tweet.action"

const initialState = {
 tweets: [],
 isLoading: false
}

// reducer = function
const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQ:
      return {
        ...state,
        isLoading: true
      }
    case REQ_SUCCESS:
      return {
        isLoading: false,
        tweets: action.payload
      }
    default:
      return state
  }
}

export default tweetReducer