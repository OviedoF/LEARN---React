import Ejercicio1Estados from './ejercicios/estados/Ejercicio1Estados';
import Ejercicio2Estados from './ejercicios/estados/Ejercicio2Estados';
import Contador from './examples/Contador';

const States = () => {
    return (
        <div >
            <h2 style={{textAlign: 'center'}}>1. States</h2>
            
            <h3>- Definición coloquial:</h3>
            <p>
                El estado es una característica de las aplicaciones de React que permite a los componentes tener una memoria interna. 
                Esto significa que los componentes de React pueden recordar ciertos valores a medida que cambian con el tiempo. 
                Esto puede ser útil para mantener un seguimiento de ciertos datos dentro de un componente, 
                como el valor de un formulario o el punto en el que se encuentra un usuario en una aplicación.
            </p>

            <h3>- Definición propia:</h3>
            <p>
                Es una variable dentro del componente, que se puede modificar con su propia función llamada useState (para componentes funcionales),
                pero, a diferencia de una variable normal, que cambie el estado fuerza la renderización del componente, cambiando 
                su contenido, sus estilos, su lógica, etc.
            </p>

            <h4>¿Cuándo uso un estado?:</h4>
            <ul>
                <li><b>Del estado, la mayoría de veces, depende lo que se renderiza en el componente.</b> es decir, si cambia el estado,
                pero no la renderización del componente, nos convendría usar una variable normal (const, let, var).</li>

                <li>Cuando tenemos que modificar el funcionamiento del componente.</li>

                <li>Debemos guardar datos con los que vayamos a trabajar. (por ej. los datos de un formulario)</li>
            </ul>

            <Contador />

            <h4>Ejercicios extras: </h4>
            <ul>
                <li>- Crear un componente que tenga un input color y un div. Cuando nosotros cambiemos el color del input, cambiamos el fondo de ese div.</li>
                <li>- Con el ejercicio anterior, esta vez crearemos 3 divs (en forma de bandera vertical) y 3 inputs (uno para cada uno) que cambien el color y nos permitan crear banderas.</li>
            </ul>

            <Ejercicio1Estados title />
            <Ejercicio2Estados />

            <hr />
        </div>
    );
}

export default States;