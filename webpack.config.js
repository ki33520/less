var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var lessExtractor = new ExtractTextPlugin('[name].css');

module.exports = {
    entry: {
      index: "./src/index/index.js"
    },
    output: {
        path: './build',
        publicPath: './build',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css','less'])
            }
        ]
    },
    plugins: [
        lessExtractor
    ]
};