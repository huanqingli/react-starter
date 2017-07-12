/**
 * Created by Muc on 17/6/20.
 */
const path = require('path')
const webpack = require('webpack')

const { WDS_PORT, server } = require('./src/config')
module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch', // 1
      // 开启 React 代码的模块热替换(HMR)
      './src',
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/public/',
    publicPath: `http://localhost:${WDS_PORT}/`, // 2
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, localIdentName: '[name]__[local]--[hash:base64:5]' },
          },
          {
            loader: 'postcss-loader',
            options: { plugins: [require('autoprefixer')] },
          }], // 3
        exclude: /node_modules/,
      },
      //打包图片
      {
        //正则匹配后缀.png、.jpg、.gif图片文件;
        test: /\.(png|jpg|gif)$/,
          use: [
              {
                //加载url-loader 同时安装 file-loader;
                loader : 'url-loader',
                options : {
                  //小于8K的图片文件转base64内联在代码中，减少http请求;
                  limit : 8192,
                  //设置最终img路径;
                  name : '[name]-[hash].[ext]'
                }
              },
              {
                //压缩图片(另一个压缩图片：image-webpack-loader);
                loader : 'img-loader?minimize&optimizationLevel=5&progressive=true'
              }
            ]
      },
      // { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'], exclude: /node_modules/ },
    ],
  },
  devtool: 'cheap-module-source-map', // 报错时追踪到原文件位置
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true, // 4
    // 开启服务器的模块热替换(HMR)
    headers: {
      'Access-Control-Allow-Origin': '*', // 5
    },
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(), // 6
    // 开启全局的模块热替换(HMR)
    new webpack.NamedModulesPlugin(), // +
    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

    new webpack.DefinePlugin({
      SERVER: JSON.stringify(server),
    }), // 定义全局常量,全局变量在data文件中
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
    }), // 自动引入库
    new webpack.DllReferencePlugin({
      manifest: require('./public/manifest.json'), // 指定manifest.json
      name: 'vendor',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    }),
  ],
}
