const path = require('path'); //Modulo para construir rutas

module.exports = { //JSON de configuración del empaquetamiento
    entry: './src/index.js', //Default es src/index.js
    output: {
        filename: 'main.js', //Default main.js
        path: path.resolve(__dirname,'dist') //__dirname es la ruta absoluta
    }
}