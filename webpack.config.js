const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                oneOf: [
                    {
                        test: /\.js$/,
                        resourceQuery: /^\?raw$/,
                        use: 'raw-loader'
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                babelrc: true
                            }
                        }
                    }
                ]
            },
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        resourceQuery: /^\?raw$/,
                        use: [require.resolve("style-loader"), require.resolve("css-loader")]
                    },
                    {
                        test: /\.css$/,
                        use: [
                            require.resolve("style-loader"),
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    localIdentName: "[name]__[local]___[hash:base64:5]"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            title: 'Vif starter',
            inject: true
        })
    ]
};