/* eslint-disable */

'use strict';

module.exports = {
  //webpack config specific to unit tests
  entry: './testContext.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
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
        loader: 'style-loader!css-loader!sass-loader'
      },
      // Code coverage
      {
        test: /\.js$/,
        enforce: 'pre',
        // Files not considered for coverage
        exclude: [
          /testContext.js/,
          /node_modules/,
          /\.spec.js$/
        ],
        loader: 'isparta-instrumenter-loader'
      }
    ]
  }
}
