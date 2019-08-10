import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'


const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  }, 
  {"title": "Java Bases de datos",
  "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/java-bases-de-datos.jpg?itok=2cArgO8s",
  "price": 50,
  "profesor": "Beto Quiroga"}, 
  {"title": "Fundamentos de Redes",
  "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Fundamentos.png",
  "price": 20,
  "profesor": "Neil Ulises"},
  {"title": "HTML desde cer",
  "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
  "price": 0,
  "profesor": "Alvaro Felipe"}
]
const App = () => (
<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://miro.medium.com/max/3840/1*vXjx4Y7EgQBwALkaeZJ0Cg.jpeg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de uliCode</p>
        <p> Tu futuro te esta esperando</p>
        <a href="https://ed.team/" className="button">Empieza ya</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
{
  cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
}
</div>
</>
)
export default App;
