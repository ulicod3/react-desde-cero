import React from 'react';
import AppRoutes from './AppRoutes';
import '../styles/styles.scss'
import CoursesProvider from "./Context/CoursesProvider";
import CartProvider from "./Context/Cart/CartProvider";


const App = () => (
    
    <CoursesProvider>
    <CartProvider>
    <AppRoutes />
    </CartProvider>
    </CoursesProvider>
);
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