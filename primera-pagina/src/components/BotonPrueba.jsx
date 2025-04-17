import "../styles/BotonPrueba.css"

function BotonPrueba({texto ,titulo}) {

   function mensaje(){
    alert(`Explorando:  ${titulo}`)
   }
    return (<button className="botonPrimario" onClick={mensaje} >{texto}</button>); 
  }

  export default BotonPrueba;