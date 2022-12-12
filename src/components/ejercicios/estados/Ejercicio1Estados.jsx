import React, { useState } from 'react';
// - Crear un componente que tenga un input color y un div. 
// Cuando nosotros cambiemos el color del input, cambiamos el fondo de ese div.

const Ejercicio1Estados = ({title}) => {
    const [color, setColor] = useState('#FFFFFF40'); /* estado que va a tener el color (inicialmente es un gris) */

    return (
        <div>
            {title && <h4 style={{textAlign: 'center'}}>- Ejercicio 1</h4>}

            {title && <p style={{color: '#ffffff60'}}>Cuando nosotros cambiemos el color del input, cambiamos el fondo del div.</p>}

            <div className="" style={{display: 'flex', alignItems: 'center'}}>
                <input type="color" name="" id="" onChange={(e) => setColor(e.target.value)}/> {/* cambia el valor, cambiamos el estado */}
                <div style={{width: '400px', height: '100px', marginLeft: '100px', backgroundColor: color}} /> 
                {/* de background color tiene el valor del estado */}
            </div>

            {/* cada vez que cambia color, se vuelve a renderizar el componente, creando otra vez el div pero con diferente color de fondo
            debido a que el estado cambió. */}
        </div>
    );
}

export default Ejercicio1Estados;
