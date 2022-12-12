import React, { useState } from 'react';
import EjemploEffect from './examples/EjemploEffect';
import ExplicacionUseEffect from './explicaciones/ExplicacionUseEffect';

const Effect = () => {
    const [mostrarEjemplo, setMostrarEjemplo] = useState(true);
    const [mensaje, setMensaje] = useState('');
    const [componenteMontado, setComponenteMontado] = useState('');

    return (
        <div>
            <ExplicacionUseEffect />

            <button style={{margin: '0 20px', backgroundColor: 'transparent', height: '30px', cursor: 'pointer', color: 'white'}} 
            onClick={() => setMostrarEjemplo( !mostrarEjemplo )}>
                {mostrarEjemplo ? 'No mostrar ejemplo' : 'Mostrar ejemplo'}
            </button>

            <p><b>{componenteMontado}</b></p>
            <p><b>{mensaje}</b></p>

            { mostrarEjemplo && <EjemploEffect setMensaje={setMensaje} setComponenteMontado={setComponenteMontado}/> }
        </div>
    );
}

export default Effect;
