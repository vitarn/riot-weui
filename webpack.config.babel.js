import path from 'path'
import webpack from 'webpack'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'

const resolve = p => path.resolve(__dirname, p)

export default {
  entry: [
    // 'webpack/hot/dev-server?reload=true',
    // 'webpack-dev-server/client?http://localhost:8080',
    './example/index.js',
  ],
  devtool: 'inline-source-map',
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
        debug: true,
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
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
  ]
}
