import { useEffect, useState } from "react"

  /* Use effect ejecuta lo que esta dentro del callback, como segundo parametro se le puede pasar un array que le indica cuando ejecutarse. Si no pasamos ningun array, el efecto se ejecutara cada vez que haya una actualizacion en la aplicacion, si pasamos un array vacio, se ejecutara solamente una vez cuando se renderice el componente

  // Caso 1. Se ejecuta en cada actualizacion
  useEffect(() => {
    console.log('Este efecto se reinicia en cada renderizado (actualizacion  del dom)')
  })
  
  // Caso 2. Se ejecuta solo al inicio
  useEffect(() => {
    console.log('Este efecto se ejecuta solo al inicio')
  }, [])

  // Caso 3. Se ejecuta al detectar un cambio de estado
  (imaginamos un use state que la propiedad de memoria es contador)
  useEffect(() => {
    console.log('Este efecto se ejecuta cuando se detecta un cambio en contador')
  }, [contador])
  */


export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
   
    useEffect(() => {
        //Llamado a API
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsuarios(json))     
    }, [])

    return (
    <div>
        <h2>Usuarios</h2>
            <ul>
             {
                 usuarios.map( (cosa) => {
                    return <li key={cosa.id}>{cosa.name}</li>
                  } )
             }
         </ul>
    </div>
  )
}
