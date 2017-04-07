const webpack = require('webpack')
const { join } = require('path')
const { externals, requireAll } = require('./webpackfile.base.js')

module.exports = {
  entry: requireAll(),
  output: {
    path: join(__dirname, '__tests__'),
    filename: '[name].js'
  },
  target: 'node',
  externals: externals({ production: false }),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].js'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __TEST__: true
    })
  ]
}