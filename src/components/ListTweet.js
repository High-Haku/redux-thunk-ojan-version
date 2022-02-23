import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {getTweet} from '../redux/action/tweet.action'

function ListTweet() {
  const dispatch = useDispatch()
  const {tweets} = useSelector(state => state)

  // console.log(dataStore)

  useEffect(() => {
    // mendapatkan data tweet
    dispatch(getTweet())
  }, [])

  return (
    <div>
      <h1>Tweet</h1>
      <div>
        {tweets.map(item => (
          <p>{item.tweet}</p>
        ))}
      </div>
    </div>
  )
}

export default ListTweet