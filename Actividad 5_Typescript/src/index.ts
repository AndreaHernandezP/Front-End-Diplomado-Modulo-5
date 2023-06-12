//Al usar TS, no sabe donde está lodash, por lo cual normalmente se debe instalar la herramienta que nos permite interpretar los tipos asociados a lodash, porque no es una adaptación directa, esto se hace con
// npm install @types/lodash -D
import * as _ from 'lodash'; //Importar todos los elementos desde lodash

function componente(){
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola','Webpack'], '  '); //No se modifica porque declaramos que se acepta código JS
    return elemento;
}

document.body.appendChild(componente());