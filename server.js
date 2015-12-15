var path = require('path');
var http = require('http');
var koa = require('koa');
var serve = require('koa-static');
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');

var webpackConf = require('./webpack.config');
var router = require('koa-router')();
var routes = require('./routes');

var port = 3000;

var app = koa();

var debug = false;//process.env.NODE_ENV !== 'production';
// 开发环境和生产环境对应不同的目录
var viewDir = debug ? 'src' : 'public';

routes(router, app);
app.use(router.routes());
app.use(webpackDevMiddleware(webpack(webpackConf), {
    contentBase: webpackConf.output.path,
    publicPath: webpackConf.output.publicPath,
    hot: true
}));

// 处理静态资源和入口文件
app.use(serve(path.resolve(__dirname, viewDir), {
    maxage: 0
}));

app = http.createServer(app.callback());

app.listen(port, function() {
    console.log('app listen success.');
});
