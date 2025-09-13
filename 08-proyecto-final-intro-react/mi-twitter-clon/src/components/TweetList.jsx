import {
  Tweet
} from './Tweet'

export const TweetList = ({ tweet, onStar }) => {
  return (
    <div>
      {tweet.map(tweet =>
        (<Tweet key={tweet.id} tweet={tweet} onStar={onStar} />
        ))}
    </div>
  )
}
