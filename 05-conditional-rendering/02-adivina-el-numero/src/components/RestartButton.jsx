function restartGame () {
  location.reload()
}

export const RestartButton = () => {
  return (
    <button onClick={restartGame} className='p-3 bg-blue-700 rounded-2xl hover:cursor-pointer'>Reiniciar partida</button>
  )
}
