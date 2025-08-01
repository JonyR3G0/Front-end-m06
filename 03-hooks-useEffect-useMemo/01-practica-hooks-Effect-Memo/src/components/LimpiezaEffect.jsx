import { useEffect } from "react"

export const LimpiezaEffect = () => {

    useEffect(() => {
      
        console.log('suscribiendo evento')

      return () => {
        console.log('Limpiando evento')
      }
    }, [])
    

    return (
    <div>LimpiezaEffect</div>
  )
}
