import "../styles/Equipo.css"

function EquipoTalentoLab(){

    const equipo = [
        { nombre: 'Silvia', rol: 'Product Owner', imagen: ' https://randomuser.me/api/portraits/women/75.jpg ' },
        { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://randomuser.me/api/portraits/men/75.jpg '},
        { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://randomuser.me/api/portraits/men/76.jpg ' },
        { nombre: 'Sabrina', rol: 'Desarrolladora', imagen:' https://randomuser.me/api/portraits/women/76.jpg '},
      ];

      return(
        
        <div className="team-conteiner">
        {equipo.map((persona) => (
            <div className="team-card" >
                    <h1>{persona.nombre}</h1>
                    <p>{persona.rol}</p>
                    <img className="team-image" src={persona.imagen}></img>
            </div>
        ))}
    </div>
      )

    }

    export default EquipoTalentoLab;