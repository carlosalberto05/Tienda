import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    render() {
        return (
          <div className="contenedor-nosotros">
            <div className="imagen">
                  <img src="/images/camisa_1.png" alt="imagen nosotros" />
            </div>
            <div className="contenido">
                <h2>Sobre Nosotros</h2>
                <p>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                  Integer ornare libero nunc, 
                  ac imperdiet lacus vestibulum in. 
                  Suspendisse lorem magna, elementum 
                  eu est non, aliquam sollicitudin sem. 
                  Vestibulum non augue porta, finibus 
                  tortor a, mollis massa. Suspendisse 
                  congue augue accumsan dolor sagittis, 
                  sit amet congue ante feugiat. Fusce 
                  tincidunt ipsum dui, a euismod magna 
                  blandit eu. Fusce et libero nisl. 
                  Cras id erat est. Sed tristique dui 
                  vitae finibus iaculis. Quisque viverra 
                  vitae tortor at auctor.</p>
            </div>
          </div>
        );
    }
}

export default Nosotros;