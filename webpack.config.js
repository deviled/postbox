const { join, resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const BUILD_DIR = './build';
const PUBLIC_DIR = './public';

const config = {
  entry: {
    index: { import: './src/index.tsx', dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom', '@reach/router', 'object-assign'],
  },
  output: {
    path: resolve(__dirname, BUILD_DIR),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      template: resolve(__dirname, `${PUBLIC_DIR}/index.html`),
      filename: 'index.html',
    }),
    new DotenvPlugin({
      path: './.env',
      safe: true,
      allowEmptyValues: true,
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '',
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';

    config.devServer = {
      compress: true,
      port: 3000,
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
      contentBase: join(__dirname, PUBLIC_DIR),
      watchContentBase: true,
    };

    config.plugins.push(new HotModuleReplacementPlugin());
  }

  if (argv.mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin());
    config.plugins.push(new CopyWebpackPlugin({
      patterns: [
        {
          from: PUBLIC_DIR,
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/*.html']
          }
        }
      ]
    }));
  }

  return config;
};
