import Boton from "../components/CambiaColorBoton";
import "../styles/Cards.css"
export default function Cards({productos}){
    return(
        <div className="producto-conteiner">
        {productos.map((producto)=>{
            <div key={producto.id} className="producto-card">
                <img className="producto-imagen" src={producto.imagen} />;
                <h1>{producto.nombre}</h1>;
                <p>{producto.descripcion}</p>;
                <small>{producto.precio}</small>;
                <Boton
                    texto={"Agregar al carrito"}
                />
            </div>
            
        })}
        </div>
    )
}