import React from 'react';
import './styles/styles.scss'
// eslint-disable-next-line
import Curso from './Curso'
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from "./CourseGrid";
import Course from "./Course"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// eslint-disable-next-line
import Historial from "./Historial"
import MainMenu from './MainMenu'
const App = () => (
<Router>
    <MainMenu/>
    <Switch>
<Route path="/" exact component={ Banner }/>
<Route path="/cursos/:id" component={ Course }/>
<Route path="/cursos" exact component={ CourseGrid }/>
<Route path="/historial" component={Historial}/>
<Route path="/historial/:valor" component={Historial}/>
<Route path="/formulario" exact component={ () => <Formulario/> }/>
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
