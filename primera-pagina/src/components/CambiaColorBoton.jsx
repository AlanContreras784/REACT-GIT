import React, {useState} from "react";
import "../styles/GaleriaIntereses.css"

function CambiarColorBoton(){

    const [color, setColor]=useState({backgroundColor: 'orange'})

    return(
        
                <button
            
                style={color}
                onClick={(e) => setColor({backgroundColor: 'white'})}
        
                >Cambia de color
                
                </button>

        

    )

}

export default CambiarColorBoton;