import React, { useState } from 'react'
import AvatarInitial from './AvatarInitial'

const inputStyle = 'text-white text-xl w-full h-auto border-none outline-none focus:ring-0 mr-5'
const inputButtonPostStyle =
'focus:ring-0 focus:outline-none bg-white text-black rounded-2xl ps-3 pr-3 pt-2 pb-2 text-sm font-bold m-5'
const buttonsContainerStyle =
'flex justify-end'

export const TweetForm = ({ onAddTweet }) => {
  const [tweetText, setTweetText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // A function that is provided by the father
    // Saves the tweet on the tweets array memory
    if (!tweetText.trim()) return
    onAddTweet(tweetText)
    setTweetText('')
  }

  return (
    <div className='flex border-b border-gray-600'>
      <div className='m-5'>
        <AvatarInitial name='Jonh Rego' size='sm' />
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-5'>
        <textarea
          className={inputStyle}
          type='text'
          value={tweetText}
          onChange={event => setTweetText(event.target.value)}
          placeholder='¿Qué está pasando?'
        />

        <div className={buttonsContainerStyle}>
          <div />
          <button type='submit' className={inputButtonPostStyle}>Postear</button>
        </div>
      </form>
    </div>
  )
}
