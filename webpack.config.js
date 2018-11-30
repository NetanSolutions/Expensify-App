const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })
    
    return {
        entry: ['babel-polyfill', './src/index.js'],
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react'],
                        plugins: ['transform-object-rest-spread', 'transform-class-properties']
                    }
                }
            }, {
                test: /\.s?css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
    }
    
}