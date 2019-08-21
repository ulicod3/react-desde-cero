import React from "react"

const cursos = [
  {
    "id": 1,
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  }, 
  {
   "id": 2, 
  "title": "Java Bases de datos",
  "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/java-bases-de-datos.jpg?itok=2cArgO8s",
  "price": 50,
  "profesor": "Beto Quiroga"}, 
  {
   "id": 3, 
  "title": "Fundamentos de Redes",
  "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Fundamentos.png",
  "price": 20,
  "profesor": "Neil Ulises"},
  {
   "id": 4, 
  "title": "HTML desde cero",
  "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
  "price": 0,
  "profesor": "Alvaro Felipe"}
]
const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            cursoActual ? (
                <>
                    <h1 className="m-cols-3"> { cursoActual.titulo } </h1>
                    <img className="m-cols-1" src={ cursoActual.image } alt={cursoActual.titulo}/>
                    <p className="m-cols-2">Profesor: {cursoActual.profesor} </p>
                </>
                ) : 
                 <h1>El curso no existe</h1>        
        }
        </div>
    )
}
export default Course 