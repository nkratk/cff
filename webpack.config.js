/* eslint-disable */

'use strict';

const webpack = require('webpack');
const path = require('path');
const homePath = path.resolve(__dirname, 'cff');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const plugins = [
  // Bundles commonly used code seperately. Eg: all vendor files
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js'
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
  new webpack.optimize.OccurrenceOrderPlugin(),
  // Bundles css/scss seperately
  new ExtractTextPlugin({
    filename: 'styles.css',
    disable: false,
    allChunks: true
  })
];

if (isProd) {
  plugins.push(
    //The UglifyJsPlugin will no longer put loaders into minimize mode, and the debug option has been deprecated.Webpack2 uses LoaderOptionsPlugin
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
    // Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
    new webpack.optimize.DedupePlugin()
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = {
  //higher quality source maps take longer time to generate. inline-source-map --> A SourceMap is added as DataUrl to the JavaScript file.
  devtool: isProd ? 'source-map' : 'inline-source-map',
  context: homePath,
  entry: {
    app: path.resolve(homePath, './js/app.js'),
    vendor: path.resolve(homePath, './js/vendor.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
    ],
  },
  devServer: {
    contentBase:path.resolve(__dirname, 'cff')
  },
  plugins
};
