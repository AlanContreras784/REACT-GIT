import "../styles/GaleriaIntereses.css"

function  GaleriaIntereses({intereses}){
    
    return(
        <div className="contenedorBotonGaleriaIntereses">
            {intereses.map(interes=>(
                <button key={interes} className="botonGaleriaIntereses">{interes}
                </button>
            ))}
            
        </div>
    )
}

export default GaleriaIntereses;