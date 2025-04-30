import "../styles/Cards.css"
import CardDeCarrito from "./CardDeCarrito";

export default function Carrito({productos}) {

    return(
        <div className="producto-contenedor">
            {productos.length > 0 ? productos.map((producto) => (
                <CardDeCarrito 
                key={producto.id}
                producto={producto}/>
            )) 
            : <p>Carrito vacio</p>}
            
        </div>
    )
}