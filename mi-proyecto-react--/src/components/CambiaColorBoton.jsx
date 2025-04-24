import React, {useState} from "react";


function CambiarColorBoton({texto}){

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
        >{texto}
        </button>
    )
}

export default CambiarColorBoton;