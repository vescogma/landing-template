const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const MIN = process.env.MIN ? true : false;
const ENV = JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'production');

const productionPlugins = MIN ? [
  new UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true,
    },
    compress: {
      warnings: false,
      screw_ie8: true,
    },
    comments: false,
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
] : [];

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
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      chunksSortMode: 'dependency',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
    ...productionPlugins,
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
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
              }],
              'react',
            ],
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }],
        }),
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/assets/',
              name: '[name].[ext]',
            },
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          }
        }
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
