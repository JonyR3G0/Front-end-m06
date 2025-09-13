import React, { useEffect, useState } from 'react'
import { TweetForm } from '../components/TweetForm'
import { TweetList } from '../components/TweetList'

const homeContainerStyle = 'bg-black h-dvh'

export const HomePage = () => {
  const [allTweets, setAllTweets] = useState([])

  // +=+ Importing tweets stored on LS +=+
  useEffect(() => {
    // Check for stored data, or import a empty array
    const localStoredTweets =
      JSON.parse(localStorage.getItem('allTweets')) || []
    // Setting that data on state
    setAllTweets(localStoredTweets)
  }, [])

  // +=+ Saving tweets on LS +=+
  useEffect(() => {
    localStorage.setItem('allTweets', JSON.stringify(allTweets))
  }, [allTweets])

  const addTweet = (tweetText) => {
    const newTweet = {
      id: Date.now(),
      // !New sintax learned, simplifyed version of object:object
      tweetText,
      stars: 0,
    }
    setAllTweets([newTweet, ...allTweets])
  }

  const onStar = id => {
    // I don't fully get it
    setAllTweets(

      allTweets.map((actualTweet) =>
        id === actualTweet.id
          ? { ...actualTweet, stars: actualTweet.stars + 1 }
          : actualTweet
      )
    )
  }

  return (
    <section className={homeContainerStyle}>
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweet={allTweets} onStar={onStar} />
    </section>
  )
}
