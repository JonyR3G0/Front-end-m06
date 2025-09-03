import { useCallback, useState } from 'react';

export function ContadorConCallback() {

  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {

    setCount(prev => prev + 1);

  }, []);

  console.log('Componente actualizado')

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={incrementar}>Incrementar</button>

    </div>

  );

}