import React from 'react';
import '../styles/styles.scss'
import Home from './Pages/Home'
// eslint-disable-next-line
import Curso from './Molecules/CourseCard'
import Form from "./Pages/Form"
import CourseGrid from "./Organisms/CourseGrid";
import Course from "./Pages/Course"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// eslint-disable-next-line
import History from "./Pages/History"
import MainMenu from '../MainMenu'
const App = () => (
<Router>
    <MainMenu/>
    <Switch>
<Route path="/" exact component={ Home }/>
<Route path="/cursos/:id" component={ Course }/>
<Route path="/cursos" exact component={ CourseGrid }/>
<Route path="/historial" component={History}/>
<Route path="/historial/:valor" component={History}/>
<Route path="/formulario" exact component={ () => <Form/> }/>
<Route component={() => (
    <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Página no encontrada</span>
    </div>
)}/>
</Switch>
</Router>
)
export default App;
/*

Estructura de un proyecto AtomicDesign
srcComponents
            -Atoms
            -Moleculas
            -Organismos
            -Templates
            -Pages
src/Course/CoursePage.jsx
src/Course/Course.jsx
src/Course/CourseGrid.jsx

*/