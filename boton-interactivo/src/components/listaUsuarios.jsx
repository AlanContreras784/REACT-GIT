function ListaUsuarios() {  
    const usuarios = ['Ana', 'Luis', 'Pedro', 'María'];  
    return (  
        <ol>  
            {usuarios.map(usuario => (  
                <li key={usuario}>{usuario}</li>  
            ))}  
        </ol>  
    );  
}  

export default ListaUsuarios;