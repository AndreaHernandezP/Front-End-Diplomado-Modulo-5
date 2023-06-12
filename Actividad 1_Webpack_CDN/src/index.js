//se instaló en npm lodash, webpack y webpack-cli
//Este archivo es un entry point, que usa la aplicación que está dentro del HTML
//especifica de donde viene el _
import _ from 'lodash'; //_ son los elementos que tengamos en lodash, lodash está de manera local en node_modules

function componente(){
    const elemento = document.createElement('div');
    //Mostrará una leyenda con una biblioteca externa lodash
    elemento.innerHTML = _.join(['Hola','Webpack'], '  '); //Primer elemento es un array de strings y el segundo es un separador
    return elemento;
}

document.body.appendChild(componente());


//npx webpack genera el paquete


