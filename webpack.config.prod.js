const path = require('path')
const webpack = require('webpack')

const TextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { server } = require('./src/config')
module.exports = {
  entry: {
    app: [
      './src',
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/public/',
    publicPath: '/public/', // 2
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: TextPlugin.extract([
          { loader: 'css-loader', options: { minimize: true, modules: true, localIdentName: '[hash:base64:8]' } },
          { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
        ]),
      },
      //打包图片
      { test: /\.(png|jpg)$/, use: 'url-loader?limit=8192', exclude: /node_modules/ },
    ],
  },
  devtool: false, // 报错时追踪到原文件位置
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new TextPlugin('css/styles.css'),

    new webpack.DefinePlugin({
      SERVER: JSON.stringify(server),
    }), // 定义全局常量,全局变量在data文件中
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
    }), // 自动引入库
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html',
    }), // 给HTML文件自动添加所需的script和link标签
    new webpack.DllReferencePlugin({
      manifest: require('./public/manifest.json'), // 指定manifest.json
      name: 'vendor',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    }),
  ],
}
