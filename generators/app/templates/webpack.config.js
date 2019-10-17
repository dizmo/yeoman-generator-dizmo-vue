const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('path');

module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/index.js']
    },
    module: {
        rules: [{
            test: /\.vue$/i,
            exclude: [/node_modules/i],
            use: 'vue-loader'
        }, {
            test: /\.(css|s[ac]ss)$/i,
            exclude: [/node_modules/i],
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
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
        new VueLoaderPlugin()
    ],
    output: {
        path: resolve(__dirname, 'build', '<%= dizmoName %>'),
        filename: 'index.js'
    },
    mode: 'none'
};
