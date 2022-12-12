import React, { useState, useEffect } from 'react';

const EjemploEffect = ({setMensaje, setComponenteMontado}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setComponenteMontado('Montaje, componente iniciado.');

        return () => {
            setMensaje('Desmontaje.');
            setComponenteMontado('');
        };
    }, []);

    useEffect(() => {
        setMensaje(`Componente actualizado, ahora su estado de count es: ${count}`);
    }, [count]);

    return (
        <div>
            <div className="" style={{display: 'flex', alignItems: 'center'}}>
                <button style={{margin: '0 20px', backgroundColor: '#ffffff80', height: '30px', cursor: 'pointer'}}
                onClick={() => setCount(count - 1)}>
                    -
                </button>

                <p>{count}</p>

                <button style={{margin: '0 20px', backgroundColor: '#ffffff80', height: '30px', cursor: 'pointer'}}
                onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default EjemploEffect;
