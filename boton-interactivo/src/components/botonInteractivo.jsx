import React, { useState } from 'react';

function BotonImput(){

    function Saludo({ nombre }) {
    return <h1>¡Hola, {nombre}!</h1>;
    }


    const [nombre, setNombre] = useState("Mundo");
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Saludo nombre={nombre}/>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                onChange={(e) => setNombre(e.target.value)}
                style={{ padding: "8px", marginTop: "10px" }}
            />
        </div>
    )
}

export default BotonImput;