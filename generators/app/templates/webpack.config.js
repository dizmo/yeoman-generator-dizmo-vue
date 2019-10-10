const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('path');

module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/index.js']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            exclude: [/\.(min|umd)\.js$/],
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
        path: resolve(__dirname, 'build', 'VueDizmo'),
        filename: 'index.js'
    },
    mode: 'none'
};
