const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

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
            presets: ['env', 'react'],
            plugins: [
              'transform-runtime',
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: ['file-loader'],
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
  },
};
