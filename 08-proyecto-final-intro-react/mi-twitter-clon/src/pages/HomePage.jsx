import React, { useEffect, useState } from 'react'
import { TweetForm } from '../components/TweetForm'
import { TweetList } from '../components/TweetList'

const homeContainerStyle = 'flex-2 border border-gray-700'
const mainContainerStyle =
'flex bg-black h-dvh'
const asideContainerStyle =
'flex-1'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Home | Y'
  }, [])

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

  const onStar = (id) => {
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
    <main className={mainContainerStyle}>
      <aside className={asideContainerStyle}>
        <p>Lado menu</p>
      </aside>
      <section className={homeContainerStyle}>
        <TweetForm onAddTweet={addTweet} />
        <TweetList tweet={allTweets} onStar={onStar} />
      </section>
      <aside className={asideContainerStyle}>
        <p>Lado publicidad</p>
      </aside>
    </main>
  )
}
