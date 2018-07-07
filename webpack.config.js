const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    entry:  path.join(__dirname, 'client', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader', 
                        options: {
                            cacheDirectory: true
                        }  
                    }, 
                    {
                        loader: 'cache-loader'
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader: 'css-loader', 
                            options: { importLoaders: 1 } 
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [Autoprefixer]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000000
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin('./dist', {}),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            title: 'My-App',
            template: 'index.html'
        }),
        new HardSourceWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })   
    ],
};