import React from 'react';
import AppRoutes from './AppRoutes';
import '../styles/styles.scss'
import { Provider } from "react-redux"
import store from "../redux/store"
import { getCourseList } from '../redux/actionCreators';

store.dispatch(getCourseList())

const App = () => (
    <Provider store={store}>
    <AppRoutes />
    </Provider>
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