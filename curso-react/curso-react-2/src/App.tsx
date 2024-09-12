//import { useState } from 'react'
import logo from './assets/react.svg' 

function App() {
  //const [count, setCount] = useState(0)

  const name = 'Vinicius'

  const upperName = name.toUpperCase()

  return (
    <>
      <h1>Olá mundo</h1>
      <p>Olá, {name}</p>
      <p>Oi, {upperName}</p>
      <img src={logo} alt="Minha imagem" />      
    </>
  )
}

export default App
