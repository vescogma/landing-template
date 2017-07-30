const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require('compression-webpack-plugin');

const MIN = process.env.MIN ? true : false;
const ENV = JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'production');

const indexHtml = path.resolve(__dirname, 'src', 'index.html');

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
    'main': path.resolve(__dirname, 'src', 'index.js'),
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
      template: indexHtml,
      chunksSortMode: 'dependency',
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
            presets: [
              ['env', {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7'],
                },
                modules: false,
                debug: false,
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules\/@storefront/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
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
