const { getEntry } = require('./utils')
const webpack = require('webpack')
const MiniCssExtractCss = require('mini-css-extract-plugin')

module.exports = {
    entry: getEntry(),

    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractCss.loader, 'css-loader']
        },
        {
            test: /\.less$/,
            use: [MiniCssExtractCss.loader, 'css-loader', 'less-loader']
        },
        {
            test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            },
            {
                loader: 'expose-loader',
                options: '$'
            },
            {
                loader: 'expose-loader',
                options: 'jquery'
            }
            ]
        },
        {
            test: /\.html$/,
            use: 'html-withimg-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}