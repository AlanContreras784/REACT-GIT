import React, { useState } from 'react';
import "../styles/BotonPrueba.css"
export default function Formulario() {
  const [nombre, setNombre] = useState('');
  function manejarEnvio(evento) {
      evento.preventDefault();
      alert(`Formulario enviado por: ${nombre}`);
  }
  return (
      <form onSubmit={manejarEnvio}>
          <input
              id='nombre'
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
          />
          <button className='botonPrimario' type="submit">Enviar</button>
      </form>
  );
}