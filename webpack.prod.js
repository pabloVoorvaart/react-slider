const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CompressionPlugin({
            test: /\.(js|css)$/i,
            filename: '[name][ext]',
            algorithm: 'gzip',
            deleteOriginalAssets: true
        })
    ]
});