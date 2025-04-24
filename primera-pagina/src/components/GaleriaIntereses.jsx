import React, {useState} from "react";
import "../styles/GaleriaIntereses.css"
import BotonColor from "../components/CambiaColorBoton"

function  GaleriaIntereses({intereses}){
    return(
        <div className="contenedorBotonGaleriaIntereses">
            {intereses.map(interes=>(
                <BotonColor
                    key={interes}
                    texto={interes}
                    />
                
            ))} 
        </div>
    )
}

export default GaleriaIntereses;