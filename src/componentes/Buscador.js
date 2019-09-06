import React, { Component } from 'react';
import './Buscador.css'; 

class Buscador extends Component {

    leerDatos = (e) => {
        //termino de busqueda
        const termino = e.target.velue;

        //enviarmos por props al componente principal
        this.props.busqueda(termino);
    }

    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange=
                {this.leerDatos} />
            </form>
        );
    }
}

export default Buscador;