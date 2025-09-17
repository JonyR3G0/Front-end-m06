import React from 'react'
import { Star } from 'lucide-react'

export const Tweet = ({ tweet, onStar }) => {
  return (
    <div className='bg-black border border-b-gray-800 p-4 w-full shadow-lg hover:shadow-gray-800/40 transition'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-white text-lg'>{tweet.user}</h1>
        <span className='text-sm text-gray-400'>@{tweet.user.toLowerCase()}</span>
      </div>

      {/* Tweet text */}
      <p className='mt-3 text-gray-200 text-base leading-relaxed'>
        {tweet.tweetText}
      </p>

      {/* Footer */}
      <div className='mt-4 flex items-center justify-end'>
        <button
          onClick={() => onStar(tweet.id)}
          className='flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors'
        >
          <Star className='w-5 h-5' />
          <span className='text-sm'>{tweet.stars}</span>
        </button>
      </div>
    </div>
  )
}
