import React, { useEffect, useState } from 'react'
import { TweetForm } from '../components/TweetForm'
import { TweetList } from '../components/TweetList'
import { Link } from 'react-router-dom'
import AvatarInitial from '../components/AvatarInitial'

const homeContainerStyle = 'flex-2 border border-gray-700'
const mainContainerStyle =
'flex bg-black h-dvh'
const asideContainerStyle =
'flex-1 text-white flex flex-col justify-end'
const buttonProfileStyle =
'flex hover:bg-gray-900 rounded-full transition-all duration-300 m-2 mb-5 border border-gray-900'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Home | Y'
  }, [])

  const [allTweets, setAllTweets] = useState([])
  const [user, setUser] = useState({ email: 'e' })

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

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <main className={mainContainerStyle}>
      <aside className={asideContainerStyle}>
        <Link to='/profile' className={buttonProfileStyle}>
          <div className='m-2'>
            <AvatarInitial name={user.username} size='sm' />
          </div>
          <div>
            <h3 className='text-md font-bold'>{user.username}</h3>
            <p className='italic text-gray-500'>Configurar perfil</p>
          </div>
        </Link>
      </aside>
      <section className={homeContainerStyle}>
        <TweetForm onAddTweet={addTweet} />
        <TweetList tweet={allTweets} onStar={onStar} />
      </section>
      <aside className={asideContainerStyle}>
        <p className=''>Lado publicidad</p>
      </aside>
    </main>
  )
}
