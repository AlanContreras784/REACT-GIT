import "../styles/Cards.css";
import Boton from "./CambiaColorBoton"

export default function CardDeCarrito({producto}){
    return(
        <div>
            <div className="producto-card">
                <img src={producto.imagen} className="producto-imagen" />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Boton
                texto={"Eliminar"}
                />
            </div>
        </div>
    )
}