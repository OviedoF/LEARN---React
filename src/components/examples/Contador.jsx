import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h4>Ejercicio con states: contador</h4>

            <div className="" style={{display: 'flex', alignItems: 'center'}}>
                <button style={{margin: '0 20px', backgroundColor: '#ffffff80', height: '30px', cursor: 'pointer'}}
                onClick={() => setContador(contador - 1)}>
                    -
                </button>

                <p>{contador}</p>

                <button style={{margin: '0 20px', backgroundColor: '#ffffff80', height: '30px', cursor: 'pointer'}}
                onClick={() => setContador(contador + 1)}>
                    +
                </button>
            </div>

            <p style={{color: '#ffffff60'}}>Este código es un ejemplo simple de un componente de React que lleva un contador. La función useState se utiliza para mantener el estado del contador y permitir que se modifique mediante dos botones que aumentan o disminuyen el valor del contador. Cuando se hace clic en uno de los botones, se llama a setContador con el nuevo valor del contador, lo que provoca una actualización en la interfaz de usuario.</p>
        </div>
    );
}

export default Contador;
