//se instaló en npm lodash, webpack, webpack-cli, style-loader, css-loader
//Este archivo es un entry point, que usa la aplicación que está dentro del HTML
//especifica de donde viene el _
import _ from 'lodash'; //_ son los elementos que tengamos en lodash, lodash está de manera local en node_modules
import './style.css'; //Se encuentra en la misma carpeta
import Imagen from './IMG_8171.png';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './style.scss';

function componente(){
    const elemento = document.createElement('div');
    //Mostrará una leyenda con una biblioteca externa lodash
    elemento.innerHTML = _.join(['Hola',Datos[0][1]], '  '); //Primer elemento es un array de strings y el segundo es un separador
    elemento.classList.add('hola'); //Se asocia el elemento a una clase en CSS
    const myImage = new Image(); //Va a contener la imagen, crea un objeto imagen que se incrustara en la pagina, es equivalente a una etiqueta
    myImage.src = Imagen;
    elemento.appendChild(myImage);
    console.log(Datos);
    return elemento;
}

function componente2(){
    const parrafo = document.createElement('p');
    parrafo.innerHTML = _.join(['Hola',Datos[0][1]], '  ');
    return parrafo;
}

console.log(yaml.title); //Atributo de yaml
console.log(json5.owner.name); //Atributo o propiedad de json5

document.body.appendChild(componente());
document.body.appendChild(componente2()); //Se agrega al body un p
//document.body.classList.add('fondo');  //Se agrega clase fondo al body

//npx webpack genera el paquete


