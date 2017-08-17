/**
 * Created by Muc on 17/6/9.
 */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-hot-loader',
      'immutable',
      'redux',
      'react-redux',
      'react-router-dom',
      'redux-persist',
      'redux-persist-transform-immutable',
      'redux-thunk',
      'lodash',
      'history',
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
    library: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'public/manifest.json'), // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]',
    }),
  ],
}
