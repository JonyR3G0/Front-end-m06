import {
  Tweet
} from './Tweet'

export const TweetList = ({ tweet, onStar }) => {
  return (
    <div>
      {/* Needs a map function */}
      <Tweet tweet={tweet} onStar={onStar} />
    </div>
  )
}
