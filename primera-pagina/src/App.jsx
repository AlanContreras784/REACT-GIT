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
import GaleriaIntereses from './components/GaleriaIntereses'
import Contador from './components/Contador'
import Formulario from './components/formulario'

function App() {
  const equipo = [
    { id:0, nombre: 'Silvia', rol: 'Product Owner', imagen: ' https://randomuser.me/api/portraits/women/75.jpg ' },
    { id:1, nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://randomuser.me/api/portraits/men/75.jpg '},
    { id:2, nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://randomuser.me/api/portraits/men/76.jpg ' },
    { id:3, nombre: 'Sabrina', rol: 'Desarrolladora', imagen:' https://randomuser.me/api/portraits/women/76.jpg '},
  ];

  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Gallery/>
      <EquipoTalentoLab
      equipo={equipo}
      />
      <TarjetaProyecto
        titulo="Plataforma de Gestion"
        descripcion="Una herramienta para optimizar la gestión de equipos."
        botonTexto="Explorar Proyecto"
      />
      <GaleriaIntereses
      intereses={intereses}
      />
      <Contador/>
      <Formulario/>

      <Footer/>
    </>
  )
}

export default App
