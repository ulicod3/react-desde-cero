import React from "react"

const Banner = () =>(
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
)

export default Banner