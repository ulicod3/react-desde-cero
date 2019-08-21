import React from "react"
import CourseCard from "../Molecules/CourseCard";


const courses = [
{
  "id": 1,
  "title": "React desde cero",
  "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
  "price": 30,
  "professor": "Alexix Lozada"
}, 
{
 "id": 2, 
"title": "Java Bases de datos",
"image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/java-bases-de-datos.jpg?itok=2cArgO8s",
"price": 50,
"professor": "Beto Quiroga"}, 
{
 "id": 3, 
"title": "Fundamentos de Redes",
"image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Fundamentos.png",
"price": 20,
"professor": "Neil Ulises"},
{
 "id": 4, 
"title": "HTML desde cero",
"image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
"price": 0,
"professor": "Alvaro Felipe"}
]


const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { courses.map(c => (
        <CourseCard
         key={c.id}
         id={c.id}
         title={c.title}
         image={c.image}
         price={c.price}
         professor={c.professor}
        />
        )) }
    </div>
)

export default CourseGrid 