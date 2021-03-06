const path = require('path') 
const  MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        home:path.resolve(__dirname,'src/js/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        hot:true,
        open:true,
        port: 9000
    }, 
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:[
                    'babel-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',                   
                    'css-loader'

                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin ({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname,'index.html')
        }),
        /* new MiniCSSExtractPlugin({
            filename:'css/[name].css'
        }) */
    ]
}
