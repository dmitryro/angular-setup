import { AngularWebpackPlugin } from '@ngtools/webpack';

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
