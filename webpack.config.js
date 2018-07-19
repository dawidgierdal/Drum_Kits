var path = require("path");
var Html = require('html-webpack-plugin');
var MiniCSS = require("mini-css-extract-plugin");


module.exports = function(env) {
    const isDev = env && env.dev ? true : false;
    console.log(isDev, 'isDev');

    const config = {
        entry: "./js/main.jsx",
        output: {
            filename: "out.js",
            path: path.resolve(__dirname, "build")
        },
        mode: isDev ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', "stage-2", "react"]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isDev ? 'style-loader' : MiniCSS.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        isDev ? 'style-loader' : MiniCSS.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    new require('autoprefixer')({
                                        browsers: [
                                            'ie 11' // tu definiujemy wsparcie dla przegladarek w css
                                        ]
                                    })
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|jpeg|gif|png|csv)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'images',
                            outputPath: 'images'
                        }
                    }
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'fonts',
                            outputPath: 'fonts'
                        }
                    }
                }
            ]
        },
        plugins: [
            new Html({
                filename: 'index.html',
                template: './index.html'
            }),
            new MiniCSS({
                filename: "app.css", // definiujemy adres pliku css
            })
        ]
    }

    return config;
}