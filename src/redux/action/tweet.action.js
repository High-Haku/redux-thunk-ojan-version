import axios from 'axios'

export const GET_REQ = "GET_REQ"
export const REQ_SUCCESS = "REQ_SUCCESS"

function getRequest() {
  return {
    type: GET_REQ
  }
}

function reqSuccess(payload) {
  return {
    type: REQ_SUCCESS,
    payload
  }
}

export function getTweet() {
  return async function (dispatch) {
    dispatch(getRequest())

    const result = await axios.get("https://5e8e9d60e0e7de001685f875.mockapi.io/tweets")
    
    dispatch(reqSuccess(result.data))
  }
}

// const getTweet = () => () => {
  
// }