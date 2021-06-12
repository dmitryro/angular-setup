import { AngularWebpackPlugin } from '@ngtools/webpack';

module.exports = {
  entry: '@src/main.ts',
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
