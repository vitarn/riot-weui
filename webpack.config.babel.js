import path from 'path'
import webpack from 'webpack'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'

const PROD = 'production' == process.env.NODE_ENV
const resolve = p => path.resolve(__dirname, p)

export default {
  entry: [
    './example/index.js',
  ],
  devtool: PROD ? [] : 'inline-source-map',
  output: {
    path: './example',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.tag$/,
      include: /src|example/,
      loader: resolve('./utils/riotjs-loader'),
      query: {
        type: 'babel',
        debug: !PROD,
        compact: PROD,
      },
    }, ],
    loaders: [{
      test: /\.(js|tag)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015-riot', 'stage-0'],
        cacheDirectory: true,
        plugins: [
          'transform-runtime',
          'external-helpers-2',
        ],
      },
    }, {
      test: /\.css/,
      loader: 'style!css'
    }, ],
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.ProvidePlugin({
      riot: 'riot',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: {
        warnings: false,
      },
    }),
  ] : [
    new webpack.ProvidePlugin({
      riot: 'riot',
    }),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
  ]
}
