const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PnpPlugin = require('pnp-webpack-plugin');

const config = {
  entry: {
    index: { import: './src/index.tsx', dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom', 'object-assign']
  },
  output: {
    path: resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    plugins: [PnpPlugin],
  },
  resolveLoader: {
    plugins: [PnpPlugin.moduleLoader(module)],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode !== 'production') {
    config.devtool = 'source-map';

    config.devServer = {
      contentBase: join(__dirname, 'build'),
      compress: true,
      port: 3000,
    };
  }
  return config;
};