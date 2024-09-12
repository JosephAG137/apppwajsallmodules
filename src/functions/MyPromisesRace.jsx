function MyPromisesRace() {
   
    // FIC: función normal que regresa una promesa pero el resultado se obtiene más lento.
    function fcnSumarLento(numero) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(numero + 1);
            }, 800);
        });
    };

    // FIC: esta es la manera más optimizada de definir una función
    // pero de tipo arrow (flecha) que también regresa una promesa
    // pero el resultado se obtiene más rápido.
    let fcnSumarRapido = (numero) => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                // Cambiar `resolve` a `reject` para probar el caso de error.
                // resolve(numero + 1);
                reject('Error en la promesa de la función Sumar Rápido');
            }, 1000); // Cambiar a 1000 ms para que sea más lenta
        });
    };

    // FIC: Promise.race
    Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta => {
        console.log('Respuesta:', respuesta);
    })
    .catch(error => {
        console.log("Error en la respuesta de la promesa:", error);
    });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas RACE
                </h1>
            </div>
        </>
    );
};

export default MyPromisesRace;
