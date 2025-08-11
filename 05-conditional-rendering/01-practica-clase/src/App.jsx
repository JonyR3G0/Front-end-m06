import React, { useState } from 'react'
import { WelcomeMessage } from './components/WelcomeMessage'
import { StatusMessage } from './components/StatusMessage'
import {Modal} from './components/Modal'
import { Card } from './components/Card'

export const App = () => {
  const [status, setStatus] = useState('loading')
  return (
    <>
      <WelcomeMessage isLoggedIn = {true} />
      <StatusMessage status = {status}/>
      <button onClick={() => setStatus('succes')}>Ok</button>
      <button onClick={() => setStatus('error')}>Error</button>
      <button onClick={() => setStatus('loading')}>Loading</button>
      <Modal title="Aviso" content="Este es un mensaje importante." />
      <Card>
        <h2>Pepinos</h2>
        <p>La clave esta en los pepinos. son verdes</p>
      </Card>
    </>
  )
}
