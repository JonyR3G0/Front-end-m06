import React, { useState } from 'react'

const inputStyle = 'text-gray-300'
const inputButtonPostStyle =
'bg-white text-black rounded-2xl ps-2 pr-2 pt-1 pb-1 text-sm font-bold'
const buttonsContainerStyle =
'border-t border-gray-700'

export const TweetForm = ({ onAddTweet }) => {
  const [tweetText, setTweetText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // A function that is provided by the father
    // Saves the tweet on the tweets array memory
    onAddTweet(tweetText)
    setTweetText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
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
  )
}
