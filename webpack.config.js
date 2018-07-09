var webpack = require('webpack');
var path = require('path');

var _root = path.resolve(__dirname, '.');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: [/^\@angular\//, /^rxjs\//, /^rxjs$/],
  entry: root('src/index.ts'),
  output: {
    path: root('bundles'),
    publicPath: '/',
    filename: 'ngx-resource.umd.js',
    libraryTarget: 'umd',
    library: 'ngx-resource'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: [/\.spec\.ts$/]
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      root('./src'),
      {} // a map of your routes
    ),
    // Reference: https://github.com/johnagan/clean-webpack-plugin
    // Removes the bundle folder before the build
    new CleanWebpackPlugin(['bundles'], {
        root: root(),
        verbose: false,
        dry: false
    })
  ]
}