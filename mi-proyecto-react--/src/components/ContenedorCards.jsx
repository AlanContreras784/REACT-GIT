import Cards from "./Cards";


export default function ContenedorCards({productos}){

    return(
        <div>
            {productos.map((producto)=>{
                <Cards producto={producto}/>
            })}
            
        </div>
    )
}