const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const os = require('os')

const PATHS = {
  app: path.resolve(__dirname, './client/index.js'),
  html: path.resolve(__dirname, './client/index.html'),
  favicon: path.resolve(__dirname, './client/favicon.ico'),
  src: path.resolve(__dirname, './client'),
  dist: path.resolve(__dirname, './dist'),
  routes: path.resolve(__dirname, './client/routes'),
  assets: path.resolve(__dirname, './client/assets'),
  common: path.resolve(__dirname, './client/common'),
  utils: path.resolve(__dirname, './client/utils'),
  store: path.resolve(__dirname, './client/store'),
}

// Webpack dev server port
const PORT = 3000

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.html,
  filename: 'index.html',
  inject: 'body',
  favicon: PATHS.favicon
})

/**
 * Webpack configuration.
 *
 * @param env arguments passed in on the command line.
 */
module.exports = env => {
  const webpackConfig = {
    // The base directory (absolute path) for resolving the 'entry' option. If 'output.pathinfo' is set, the included
    // pathinfo is shortened to this directory.
    context: __dirname,

    // for production treat first error as a hard error instead of tolerating it
    bail: env.prod
  }

  if (env.dev) {
   // Source maps enable breakpoints and stepping through the original ES6 code.
    webpackConfig.devtool = 'inline-source-map'
  }

  // // the entry points of the bundle
  webpackConfig.entry = {
    // our top level code and everything that doesn't slot into other chunks

    // vendor code that is likely to be used everywhere
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      // 'redux-saga',
    ]
  }

  if (env.dev) {
    webpackConfig.entry.main = [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      PATHS.app
    ]

    webpackConfig.performance = {hints: false}
  } else {
    webpackConfig.entry.main = PATHS.app
  }

  // Options affecting the output of the compilation. They tell Webpack how to write the compiled files to disk.
  webpackConfig.output = {
    // the filename for each entry point bundle specified above in the entry:{}
    filename: '[name].bundle.js',

    // the filename of our chunks, split as required
    chunkFilename: '[id].bundle.js',

    // the output directory as an absolute path
    path: PATHS.dist,

    // include module information comments, not for production
    pathinfo: !env.prod
  }

  webpackConfig.output.publicPath = `/`

  webpackConfig.resolve = {
    // Files specified with an relative path are resolved by looking in these directories (like the PATH env variable)
    modules: [path.resolve(__dirname, '.'), './node_modules'],
    alias: {
      assets: PATHS.assets,
      utils: PATHS.utils,
      store: PATHS.store,
      common: PATHS.common
    },
    // When looking for index file in a folder, look for these extensions:
    extensions: ['*', '.js', '.jsx']
  }

  // // Enzyme config ... for testing
  // webpackConfig.externals = {
  //   'cheerio': 'window',
  //   'react/lib/ExecutionEnvironment': 'true',
  //   'react/lib/ReactContext': 'true'
  // }

  // options affecting modules, where a module is any object that contributes the creation of build artifacts
  webpackConfig.module = {
    // think of loaders as transformations performed on a given file type(s)
    rules: [
      {
        // the file to run the loaders against (*.js and *.jsx)
        test: /(\.js|\.jsx)$/,

        // stay out of the node_modules directory
        exclude: /node_modules/,

        // fires right to left, 1st lint JS, then babel transpiles to smooth out the ES6 for varied browser support
        loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      // url-loader works like the file-loader, it returns a Data URL if the file is smaller than a limit (bytes).
      // Removing limit query defaults to no limit. If the file is greater than the limit the file-loader is used.
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)(\?.*)?$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(eot|ttf|wav|mp3)(\?.*)?$/,
        loader: 'file-loader'
      }
    ]
  }

  webpackConfig.plugins = [
    // tell Webpack we want hot reloading ... doesn't work the same in Webpack 2
    // HMR still works without this line, entire page reloads
    new webpack.HotModuleReplacementPlugin(),

    // helps us manage the index.html and gets it into the distribution directory
    HtmlWebpackPluginConfig,

    // Vendor code can have modules in common. This identifies common modules and puts them into a commons chunk.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),

    // TODO - Consider other plugins to balance out our chunking. Things like max number of chunks, size, etc.
    // i.e. LimitChunkCountPlugin(), MinChunkSizePlugin()
    // new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    //
    // // Moves every styling chunk into a separate CSS file
    // new ExtractTextPlugin({
    //   filename: '[name].[id].style.css',
    //   // extract only from the initial chunk
    //   allChunks: false
    // }),

    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),

    // Get module name resolved on browser console instead of the default id number
    new webpack.NamedModulesPlugin(),

    // Anywhere in the runtime code, use `process.env.NODE_ENV` to determine runtime build.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': env.prod ? '"production"' : '"development"'
    })
  ]

  if (env.prod) {
    webpackConfig.plugins.push(
      // new webpack.optimize.DedupePlugin(), // still causes runtime issues for me
      // vendor.bundle.js:1 Uncaught TypeError: Cannot read property 'call' of undefined
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
      // The script CLI command -p does an uglify, also the CLI version arranges to load the minified React libs.
    )
  }

  return webpackConfig
}
