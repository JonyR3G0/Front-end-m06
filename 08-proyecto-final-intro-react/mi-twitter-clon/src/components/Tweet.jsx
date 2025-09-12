import React from 'react'
import { Star } from 'lucide-react'
const stars = 1

const tweetContainerStyle = 'text-white'
const starButtonStyle = 'flex'

export const Tweet = ({ tweet, onStar }) => {
  return (
    <div className={tweetContainerStyle}>
      <p>{tweet}</p>

      <button className={starButtonStyle}>
        {stars} <Star />
      </button>
    </div>
  )
}
