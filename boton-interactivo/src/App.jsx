import { useState } from "react";
import "./App.css";
import ListaUsuarios from "./components/listaUsuarios";
import BotonPrueba from "./components/botonPrueba";
import Tarjeta from "./components/tarjeta";
import BotonImput from "./components/botonInteractivo";
import ListaProductos from "./components/listaProductos";

function App() {
    const [nombre, setNombre] = useState("Mundo");
    const productos = ['Manzanas', 'Peras', 'Naranjas'];



    return (
        <>
        <BotonImput />
        <ListaUsuarios />
        <BotonPrueba texto={"Clickea el boton"} color={"green"} />
        <Tarjeta
            titulo={"Oferta especial"}
            descripcion={"20% de descuento en todos los productos"}
            botonTexto={"Ver más"}
        />
        <ListaProductos
            productos={productos}
        />
        </>
    );
}

export default App;
