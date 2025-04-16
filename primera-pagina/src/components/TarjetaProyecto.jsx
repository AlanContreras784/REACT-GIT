import Boton from "./BotonPrueba";
import "../styles/TarjetaProyecto.css"

function TarjetaProyecto({titulo, descripcion, botonTexto}){
    return(
        <div>
            <div className="proyect-conteiner">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <Boton
                texto={botonTexto}
                color={"black"}
            />
        </div>
        </div>
        
    )
}

export default TarjetaProyecto;