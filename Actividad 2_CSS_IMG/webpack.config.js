const path = require('path'); //Modulo para construir rutas

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
        ],
    },
};