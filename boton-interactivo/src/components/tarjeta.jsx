import Boton from "./botonPrueba"

function Tarjeta({titulo, descripcion, botonTexto}){
    return(
        <div class="tarjeta-React">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <Boton
                texto={botonTexto}
                color={"orange"}
            />
         </div>      
);
};

export default Tarjeta;



