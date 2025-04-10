import { useState } from "react";
import "./App.css"
import ListaUsuarios from "./components/listaUsuarios";
import BotonPrueba from "./components/botonPrueba";
import Tarjeta from "./components/tarjeta";

function Saludo({ nombre }) {
    return <h1>¡Hola, {nombre}!</h1>;
}

function App() {
    const [nombre, setNombre] = useState("Mundo");

    return (
        <>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Saludo nombre={nombre} />
            <input
                type="text"
                placeholder="Escribe tu nombre"
                onChange={(e) => setNombre(e.target.value)}
                style={{ padding: "8px", marginTop: "10px" }}
            />
        </div>
       
        <ListaUsuarios/>
        <BotonPrueba
            texto={'Clickea el boton'}
            color={'green'}
        />
        
        <Tarjeta 
            titulo={"Oferta especial"}
            descripcion={"20% de descuento en todos los productos"}
            botonTexto={"Ver más"}
         />
        
   </> );
}

export default App;