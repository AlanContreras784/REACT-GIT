import Cards from "./Cards";
import "../styles/Cards.css"
import { useState } from "react";
import Carrito from "./Carrito";

export default function ProductosContainer({productos}){

    const [productosCarrito, setProductosCarrito] = useState([])
        
            function funcionCarrito(producto){
                console.log(productosCarrito)
                setProductosCarrito([...productosCarrito, producto])
            }

    return(
        <div>
            <div className="producto-contenedor">
                {productos.map((producto) => (
                    <Cards
                        key={producto.id}
                        producto={producto}
                        funcionCarrito={funcionCarrito}
                        />
                ))}
            </div>
            <div >
                <Carrito
                key={productosCarrito.id}
                productos={productosCarrito}
                />
            </div>
        </div>
    )
}

