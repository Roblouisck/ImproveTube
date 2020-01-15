const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/public/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    { loader: 'css-loader', options: { sourceMap: true} },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },

            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}