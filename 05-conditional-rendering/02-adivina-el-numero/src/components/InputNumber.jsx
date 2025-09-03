import { useContext } from 'react'
import { InputUserContext } from '../context/InputContext'

export const InputNumber = () => {
  const { inputContextState, setInputContextState } = useContext(InputUserContext)
  return (
    <div>
      <input className='p-5 m-5 border-1 rounded-4xl text-4xl border-slate-800 active:caret-amber-50 transition-all duration-300 ease-in-out' onChange={(e) => setInputContextState(e.target.value)} type='number' min='1' max={100} name='' id='' defaultValue={inputContextState} />
    </div>

  )
}
