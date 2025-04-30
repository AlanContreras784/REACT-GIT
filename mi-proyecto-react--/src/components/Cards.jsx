import "../styles/Cards.css";
import Boton from "./CambiaColorBoton"

export default function Cards({producto,funcionCarrito}){

    function agregarAlCarrito() {
        funcionCarrito(producto)
    }
    
    return(
        <div className="producto-contenedor">
            <div key={producto.id} className="producto-card">
                < img className="producto-imagen" src={producto.imagen} />
                <h3>{producto.nombre}</h3>
                <small>{producto.descripcion}</small>
                <p>{producto.precio}</p>
                <Boton
                    texto={"Agregar al Carrito"}
                    funcionBoton={agregarAlCarrito}
                />
            </div>
        </div>
    )
}