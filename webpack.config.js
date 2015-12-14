var path = require('path');
var webpack = require('webpack');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  module: {
    loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel',
      query: {
        presets: ['es2015','stage-0','react'],
        cacheDirectory: true,
        plugins: ['syntax-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
      // publicPath:'/js/'
  },
  resolve: {
    root: path.join(__dirname, '/src'),
    extensions: ['', '.js', '.css', '.scss', 'less', '.ejs', '.png', '.jpg'],
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/a.html',
    //   filename: 'a',
    //   inject: 'body',
    //   chunks: ['vendors', 'a']
    // });
  ]
};
