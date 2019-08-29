import React, { useContext } from "react"
//import { connect } from "react-redux"
import CourseGrid from "../Organisms/CourseGrid";
import CoursesContext from "../Context/CoursesContext";

const Courses = () => {
   const { courses } = useContext(CoursesContext)
  
  return(
  
     <CourseGrid courses={courses}/>

  
);
};
export default Courses;