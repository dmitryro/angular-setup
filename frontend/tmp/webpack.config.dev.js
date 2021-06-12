var webpack = require('webpack');
var AngularWebpackPlugin = require('ngtools/webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: '@ngtools/webpack',
      },
    ],
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: 'path/to/tsconfig.json',
    })
  ]
}
