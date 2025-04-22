import React, {useState} from "react";


function CambiarColorBoton(){

    const [color, setColor]=useState({backgroundColor: 'orange'})
    
    function seleccionColor(){
        if(color.backgroundColor==='orange'){
            setColor({backgroundColor: 'white'}); 
        }else{
            setColor({backgroundColor: 'orange'});
        }
        
    }

    return(
        <button
        style={color}
        onClick={seleccionColor}
        >Cambia de color
        </button>
    )
}

export default CambiarColorBoton;