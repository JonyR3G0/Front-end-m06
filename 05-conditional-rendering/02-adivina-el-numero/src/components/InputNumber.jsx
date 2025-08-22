import React from 'react'

export const InpunNumber = () => {
  const [answer, setAnswer] = useState(0)

  const inputHandler = (event) => {
    setAnswer(event.target.value)
  }
  return (
    <div>
      <input onChange={inputHandler} type='number' min='0' name='' id='' />
    </div>

  )
}
