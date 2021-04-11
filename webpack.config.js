const { join, resolve } = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');
const PnpPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const config = {
  entry: {
    index: { import: './src/index.tsx', dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom', 'object-assign'],
  },
  output: {
    publicPath: '/',
    path: resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [resolve('./src'), 'node_modules'],
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
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new DotenvPlugin({
      path: './.env',
      safe: true,
    })
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';

    config.devServer = {
      contentBase: join(__dirname, 'build'),
      compress: true,
      port: 3000,
      hot: true,
    };

    config.plugins.push(new HotModuleReplacementPlugin());
  }

  return config;
};
