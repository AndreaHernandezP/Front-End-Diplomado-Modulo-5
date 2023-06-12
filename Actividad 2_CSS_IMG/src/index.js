//se instaló en npm lodash, webpack, webpack-cli, style-loader, css-loader
//Este archivo es un entry point, que usa la aplicación que está dentro del HTML
//especifica de donde viene el _
import _ from 'lodash'; //_ son los elementos que tengamos en lodash, lodash está de manera local en node_modules
import './style.css'; //Se encuentra en la misma carpeta
import Imagen from './IMG_8171.png';

function componente(){
    const elemento = document.createElement('div');
    //Mostrará una leyenda con una biblioteca externa lodash
    elemento.innerHTML = _.join(['Hola','Webpack'], '  '); //Primer elemento es un array de strings y el segundo es un separador
    elemento.classList.add('hola'); //Se asocia el elemento a una clase en CSS
    const myImage = new Image(); //Va a contener la imagen, crea un objeto imagen que se incrustara en la pagina, es equivalente a una etiqueta
    myImage.src = Imagen;
    elemento.appendChild(myImage);
    return elemento;
}

document.body.appendChild(componente());


//npx webpack genera el paquete


