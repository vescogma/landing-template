const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

const indexHtml = path.resolve(__dirname, 'src', 'index.html');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
  },

  devtool: 'source-map',

  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new DefinePlugin({
      'process.env.ENV': `'${ENV}'`,
      'process.env.NODE_ENV': `'${ENV}'`,
    }),
    new HTMLPlugin({ template: indexHtml }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['env', {
                targets: {
                  browsers: ['last 2 versions'],
                },
                modules: false,
              }],
              'react',
            ],
            plugins: [
              [
                'transform-runtime', {
                  "polyfill": false,
                  "regenerator": true,
                },
              ],
              'transform-object-rest-spread',
            ],
          },
        }],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:10]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('postcss-import')({
                    root: loader.resourcePath,
                  }),
                  require('postcss-cssnext')({
                    browsers: 'last 2 versions',
                  }),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              outputPath: 'assets/',
              name: '[name].[ext]',
            },
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        }],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

  devServer: {
    port: 3000,
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true,
    // contentBase: '/',
  },
};
