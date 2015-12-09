var path = require('path');
var webpack = require('webpack');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  module: {
    loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'image?{bypassOnDebug: true, progressive:true, \
                optimizationLevel: 3, pngquant:{quality: "65-80"}}',
        'url?limit=10000&name=img/[hash:8].[name].[ext]',
      ]
    }, {
      test: /\.(woff|eot|ttf)$/i,
      loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
    }, {
      test: /\.(tpl|ejs)$/,
      loader: 'ejs'
    }, {
      test: /\.js$/,
      loader: 'babel',
      query: {
            presets: ['es2015','react'],
            cacheDirectory: true,
            plugins: ['syntax-object-rest-spread']
        },
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!scss'
    }]
  },
  entry: {
    index: './src/js/src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
    // publicPath:'/js/'
  },
  resolve: {
    root: path.join(__dirname, '/src/js/src/'),
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
