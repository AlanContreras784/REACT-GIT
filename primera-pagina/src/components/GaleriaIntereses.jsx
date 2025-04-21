import React, {useState} from "react";
import "../styles/GaleriaIntereses.css"

function  GaleriaIntereses({intereses,color}){
    return(
        <div className="contenedorBotonGaleriaIntereses">
            {intereses.map(interes=>(
                <button 
                    key={interes}
                    >{interes}
                </button>
            ))} 
        </div>
    )
}

export default GaleriaIntereses;