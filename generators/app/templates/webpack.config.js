const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('path');
const webpack = require('webpack')

module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/index.js']
    },
    module: {
        rules: [{
            test: /\.vue$/i,
            use: 'vue-loader'
        }, {
            test: /\.(css|s[ac]ss)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            exclude: [/node_modules/i, /\.(min|umd)\.js$/i],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                }
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(), new webpack.DefinePlugin({
            'process.env': {}
        })
    ],
    output: {
        path: resolve(__dirname, 'build', '<%= dizmoName %>'),
        environment: { arrowFunction: false },
        filename: 'index.js'
    },
    mode: 'none'
};
