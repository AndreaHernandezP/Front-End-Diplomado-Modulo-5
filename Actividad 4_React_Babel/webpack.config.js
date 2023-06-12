const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'), //Nombre de carpeta
    output:{
        path: path.resolve(__dirname,'dist'), //Se generara en carpeta dist aunque no exista, la genera
    },
    module:{ //Especificar que tratamiento se le da a diferentes tipos de archivos
        rules:[
            {
                test: /\.?js$/,
                exclude: /node_modules/, //No toque esta carpeta
                use:{
                    loader: "babel-loader", //También se puede poner en corchetes
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins:[ 
        new HtmlWebpackPlugin({//Decir que va a generar para la carpeta dist
            template: path.join(__dirname,"src", "index.html") //Inyectar código de index.html
        })
    ]
}