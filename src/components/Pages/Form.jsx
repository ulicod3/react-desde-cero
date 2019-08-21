import React, {Component} from "react"

class Form extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email: "",
            date: new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }
    changeName(e) {  
    this.setState({
        name: e.target.value
    })
}
changeEmail(e) {
    this.setState({
        email: e.target.value
    })
}

changeDate(){
    this.setState({
        date: new Date()
    })
}

    //this.setState({})
    render (){
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4>Fecha actual : {Math.ceil(this.state.date/100)}</h4>
                <form id="form-element">
             <div className="ed-grid m-grid-2">
                    <div className="form__item">
                    <label>Nombre completo</label>
                        <input type="text" 
                        onChange={ this.changeName }
                        />
                    </div>
                    <div className="form__item">
                        <label>Correo electronico</label>
                        <input type="email"
                        onChange={this.changeEmail}
                        />
                    </div>
             </div>
             </form>
                <div>
                    <h2>{`Hola ${this.state.name}`} </h2>
                        <span>{`Tu correo es: ${this.state.email}`}</span>
                   </div>
                    </div>
        )
    }

    componentDidMount() {
        // eslint-disable-next-line
        let element = document.getElementById("form-element")
        this.inervalDate = setInterval(()=>{
            this.changeDate()
            console.log(new Date())
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps)
        //console.log(prevState)
    }
    componentWillUnmount(){
        clearInterval(this.intervaloDate)
    }
}
export default Form