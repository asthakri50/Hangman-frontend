const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./App.js",
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'), // change this
        publicPath: '/',
        filename: "App.js"
    },
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.s[ac]ss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
    ]
};
