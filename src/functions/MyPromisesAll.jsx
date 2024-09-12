function MyPromisesAll() {

    // FIC: función normal que regresa una promesa, pero el resultado se obtiene más lento.
    function fcnSumarLento(numero) {
        return new Promise(function (resolve, reject) {
            if (numero >= 5) {
                reject('Sumar Lento Falló');
            }
            setTimeout(function () {
                resolve(numero + 1);
            }, 800);
        });
    }

    // FIC: esta es la manera más optimizada de definir una función de tipo arrow (flecha) que también regresa una promesa pero el resultado se obtiene más rápido.
    let fcnSumarRapido = (numero) => {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 300);
        });
    }

    // Llamado normal de la función sumar lento y su promesa.
    fcnSumarLento(5)
        .then(respuesta => {
            console.log('Respuesta Lenta:', respuesta);
        })
        .catch(error => {
            console.log('Error en fcnSumarLento:', error);
        });

    // Llamado normal de la función sumar rápido y su promesa.
    fcnSumarRapido(10)
        .then(respuesta => {
            console.log('Respuesta Rápida:', respuesta);
        });

    // Deshabilitar esta línea para la versión con elementos no promesa
    // Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
    //     .then(respuestas => {
    //         console.log('Respuestas:', respuestas);
    //     })
    //     .catch(error => {
    //         console.log("Error en todas las promesas:", error);
    //     });

    // Aquí el arreglo incluye promesas y elementos no promesa
    let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, '¡Hola Mundo!'];

    // Llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    Promise.all(arregloVarios)
        .then(respuestas => {
            console.log('Respuestas:', respuestas);
        })
        .catch(error => {
            console.log("Error en todas las promesas:", error);
        });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas ALL
                </h1>
            </div>
        </>
    );
}

export default MyPromisesAll;