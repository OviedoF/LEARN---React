import React from 'react';

const ExplicacionUseEffect = () => {
    return (
        <>
            <h2 style={{textAlign: 'center'}}>2. useEffect</h2>

            <h3>Ciclo de vida de un componente</h3>
            <p>
                Para entender useEffect, debemos entender el ciclo de vida de un componente. El ciclo de vida es, básicamente, 
                todas las etapas por las que pasa un componente: se monta en el DOM (montaje), se actualiza cuando cambia 
                su estado o <span style={{color: 'red'}}>alguna actualización forzada</span> (actualización) y cuando se destruye o desaparece
                del DOM porque es renderizado condicionalmente (desmontaje).
            </p>

            <h3>useEffect</h3>
            <p>
                useEffect es un hook que nos <b>permite ejecutar código JavaScript</b> (del ordenador, recordemos que react es NodeJs por lo que
                no podemos usar APIs del navegador como localStorage o fetch) en base al <b>ciclo de vida</b> de nuestro componente,
                ya sea montaje, actualización o desmontaje. 
            </p>
            <p>
                useEffect, al ser un hook, es una función. Recibe 2 parámetros, vamos a definirlos como el qué y el cuando.
                En el primer parámetro pasamos una función con lo que queremos que haga, y en el segundo un array llamado 
                <b> array de dependencias</b> por ejemplo: useEffect(hacerFetch(), []). Este array de dependencias es el <b>cuándo</b> vamos a ejecutar el efecto, y tiene
                sus reglas. PD:<span style={{color: 'yellow'}}> useEffect NO TOLERA ASÍNCRONISMO.</span> así que tenemos ciertas reglas para usar, por ej, fetch o axios.

                <ul>
                    <li>- Si el array de dependencias está vacío ([]), el código se ejecuta en el <b>montaje</b> del componente. Ej: Llamados HTTP.</li>

                    <li>- Si el array de dependencias tiene una o más variables ([color, texto], por ejemplo) el código se ejecuta 
                        <b> cada vez que se actualizan las variables de adentro.</b>
                    </li>

                    <li>
                        - Si el array <b>no existe</b>, el efecto se aplica en los dos ciclos: montaje y actualización (de cualquier estado).
                        PD:<span style={{color: 'yellow'}}> no recomendable.</span>
                    </li>

                    <li>- ¿Y el desmontaje?, simple, no va en el array de dependencias. Para ejecutar algo en el desmontaje, ese código 
                        tiene que estar <b>dentro del return del primer parámetro</b> y el array de dependencias tiene que estar vacío como 
                        en el montaje ([]).
                    </li>
                </ul>
            </p>
        </>
    );
}

export default ExplicacionUseEffect;
