import React from 'react'
import { Star } from 'lucide-react'

const tweetContainerStyle = 'text-white'
const starButtonStyle = 'flex'

export const Tweet = ({ tweet, onStar }) => {
  return (
    <div className={tweetContainerStyle}>
      <p>{tweet.tweetText} </p>

      <button onClick={() => onStar(tweet.id)} className={starButtonStyle}>
        {tweet.stars} <Star />
      </button>
    </div>
  )
}
