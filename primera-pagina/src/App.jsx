import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import EquipoTalentoLab from './components/EquipoTalentoLab'
import TarjetaProyecto from './components/TarjetaProyecto'
import BotonPrueba from './components/BotonPrueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Gallery/>
      <EquipoTalentoLab/>
      <TarjetaProyecto
        titulo="React-JS"
        descripcion="Framework de Programacion de Java Script"
        botonTexto="Explore Cursos"
      />
      <Footer/>
    </>
  )
}

export default App
