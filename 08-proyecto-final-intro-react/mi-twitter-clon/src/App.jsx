import React from 'react'
import { Tweet } from './components/Tweet'
import { TweetList } from './components/TweetList'
import { TweetForm } from './components/TweetForm'

export const App = () => {
  return (
    <div className='bg-black h-dvh'>
      <TweetForm />
    </div>
  )
}
