const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isDevelopment = env.development;

    return {
        entry: path.resolve(__dirname, './src/App.tsx'),
        resolve: {
            extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|ts|jsx|js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss|sass|css)$/,
                    use: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDevelopment,
                                importLoaders: 1,
                                modules: true,
                            },
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
                    include: /\.module\.(scss|sass|css)$/,
                },
                {
                    test: /\.(scss|sass|css)$/,
                    use: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: isDevelopment,
                            },
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
                    exclude: /\.module\.(scss|sass|css)$/,
                },
            ],
        },
        devtool: isDevelopment ? 'eval-source-map' : false,
        optimization: {
            minimize: !isDevelopment
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
            publicPath: '/',
        },
        devServer: {
            contentBase: path.resolve(__dirname, './public'),
            open: true,
            port: 8080,
            historyApiFallback: true,
        },
        plugins: [
            new MiniCSSExtractPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname + '/src/index.html'),
                filename: 'index.html',
            }),
        ],
    };
};
