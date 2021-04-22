const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isDevelopment = env.development;

    return {
        entry: path.resolve(__dirname, './src/App.tsx'),
        module: {
            rules: [
                {
                    test: /\.(tsx|ts|jsx|js)$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                    ],
                },
                {
                    test: /\.(scss|sass|css)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDevelopment,
                                modules: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // use dart-sass
                                implementation: require('sass'),
                                sourceMap: isDevelopment,
                            },
                        },
                    ],
                },
            ],
        },
        devtool: isDevelopment ? 'eval-source-map' : false,
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            open: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname + '/src/index.html'),
                filename: 'index.html'
            }),
        ]
    };
};