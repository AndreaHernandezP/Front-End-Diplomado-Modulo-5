const path = require('path'); //Modulo para construir rutas
const yaml = require('yamljs');
const json5 = require('json5');
const WorkBoxPlugin = require('workbox-webpack-plugin');

module.exports = { //JSON de configuración del empaquetamiento
    entry: './src/index.js', //Default es src/index.js
    output: {
        filename: 'bundle.js', //Default main.js
        path: path.resolve(__dirname,'dist'), //__dirname es la ruta absoluta
    },
    module: {
        rules:[
            {
                test: /\.css$/i,    //Extensión que se transformara. Todos aquellos que se encuentren dentro del directorio con extensión CSS
                use: ['style-loader', 'css-loader'],    //Loader que transformara esa extensión
            },
            {
                test: /\.(png|jpg)$/i, //assets
                type: 'asset/resource',
            },
            {
                test: /\.csv$/i,    //Archivo de datos
                use: ['csv-loader'],    
            },
            {
                test: /\.yaml$/i,    
                type: 'json',    //A que queremos transformarlo
                //No es loader, no tiene interacción directa con Webpack
                parser:{
                    parse: yaml.parse   //Biblioteca descargada para transformar a JSON
                }
            },
            {
                test: /\.json5$/i,    
                type: 'json',    //A que queremos transformarlo
                //No es loader, no tiene interacción directa con Webpack
                parser:{
                    parse: json5.parse   //Biblioteca descargada para transformar a JSON
                }
            },
        ],
    },
    plugins:[ //Generar aplicación progresiva, usada offline
        new WorkBoxPlugin.GenerateSW({
            clientsClaim: true,//Para que Worker funcione más rapido
            skipWaiting: true,
        }),

    ]
};