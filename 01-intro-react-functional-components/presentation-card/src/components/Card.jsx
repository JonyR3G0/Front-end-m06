function Card () {
  const nombre = 'Jonathan Reyes'
  const profesion = 'Front-end developer'
  const mensaje = 'hello world 🫠'

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  )
}

export default Card
