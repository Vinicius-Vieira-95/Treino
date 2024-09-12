//import { useState } from 'react'
import logo from './assets/react.svg' 
import Footer from './components/Footer'
import Header from './components/Header'
import './output.css'

function App() {
  //const [count, setCount] = useState(0)

  const name = 'Vinicius'

  const upperName = name.toUpperCase()

  return (
    <>
      <Header/>
      <p>Oi, {upperName}</p>
      <img src={logo} alt="Minha imagem" />
      <Footer/>
    </>
  )
}

export default App
