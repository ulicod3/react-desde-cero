import { useState, useEffect } from "react"
import axios from "axios";

const useCourse = id => {

    const [course, setCourse] = useState({})


    useEffect(() => {   
    axios.get(`https://my-json-server.typicode.com/UlisesCampos/JSON-server/cursos/${id}`)
    .then(resp => setCourse(resp.data))
   // eslint-disable-next-line 
    }, [])

    return course
}


export default useCourse