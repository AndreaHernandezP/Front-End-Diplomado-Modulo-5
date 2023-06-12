const path = require('path'); //Modulo para construir rutas

module.exports = { //JSON de configuración del empaquetamiento
    entry: './src/index.ts', //Default es src/index.js
    output: {
        filename: 'bundle.js', //Default main.js
        path: path.resolve(__dirname,'dist'), //__dirname es la ruta absoluta
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,    //tsx es de forma general, X es opcional
                use: ['ts-loader'],    
                exclude: /node_modules/
            },
        ],
    },
    resolve:{ //Especifica las extensiones que se asociaran al proyecto y son externas
        extensions:['.tsx','.ts','.js']
    },
    devtool:'inline-source-map'
};