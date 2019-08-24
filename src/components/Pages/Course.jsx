import React, { useState, useEffect } from "react"
import axios from "axios";


const Course = ({ match }) => {

    const [state, setState] = useState({})

    useEffect(() => {
    axios.get('https://my-json-server.typicode.com/UlisesCampos/JSON-server/cursos/4')
    .then(response => setState({response.data))
    })

    return (
        <div className="ed-grid m-grid-3">
        {
            state ? (
                <>
                    <h1 className="m-cols-3"> { state.title } </h1>
                    <img className="m-cols-1" src={ state.image } alt={state.titulo}/>
                    <p className="m-cols-2">Profesor: {state.profesor} </p>
                    <button onClick={changeTitle.bind(this, "Go desde cero")}>Cambiar titulo</button>
                </> 
                ) : 
                 <h1>El curso no existe</h1>        
        }
        </div>
    )
}
export default Course 