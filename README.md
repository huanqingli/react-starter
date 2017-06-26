## React Starter
### 技术栈
- react
- redux
- react-router
- immutable
- lodash

---

- node
- yarn/npm
- webpack
- babel
- eslint
- jest

### 安装

下载项目：`git clone https://github.com/huanqingli/react-starter.git`  
安装依赖：`yarn`。  
删除 yarn.lock 后安装即为当前最新版本，否则为2017/06/20时的最新版本。  
启动 node 服务：`yarn start`  
启动 webpack 服务：`yarn wds`  
访问 http://localhost:8000/ 即可  

打包库文件：`yarn dll`  
生产环境打包：`yarn build`  
启动代码格式检查和单元测试：`yarn test`  

### 项目结构

```
.
├── public                   # 静态资源文件，不在源码中引用
│   ├── css                  # 打包后的样式文件
│   └── js                   # 打包后的js文件
│       └── data.js          # 储存全局变量
├── server                   # node服务器
│   └── index.js             # 服务器启动文件
├── src                      # 应用程序源码
│   ├── index.html           # 入口 html 文件
│   ├── index.jsx            # 对app进行包裹，设置 redux router 和热重载
│   ├── app.jsx              # 应用入口
│   ├── page                 # 页面
│   ├── component            # 组件
│   ├── container            # 智能(容器)组件
│   ├── css                  # 样式文件
│   │   ├── common.css       # 公用样式(可被其他样式文件使用)
│   │   ├── global.css       # 全局样式(不需要引用全局生效)
│   │   └── config.css       # 样式常量，可被其他样式文件直接使用
│   ├── action               # 存放 redux 的 action
│   ├── reducer              # 存放 redux 的 reudcer
│   ├── config.js            # 配置文件
│   └── routes.js            # 设置路由
└── others                   # 各路配置文件
```

### 基本约定（推荐）
- 项目结构中对个文件作用已做基本约定
- 推荐使用 yarn 作为包管理器
- 源码中入口 html 文件打包时会被释放到根目录，并自动引用打包好的文件
- node 服务器入口文件默认为根目录中 index.dev.html 仅开发使用
- react 和 lodash 在 webpack 中设为全局可用(不影响性能)，无需 import 即可直接使用
- 目前单独打包的库文件中包含：
```javascript
['react', 'react-dom', 'react-hot-loader', 'immutable', 'redux', 'react-redux', 'react-router-dom','redux-persist', 'redux-persist-transform-immutable', 'redux-thunk', 'lodash']
```
- 样式方案采用 CSS Module ，每个组件或页面可以有自己的样式文件，也可以使用全局样式。推荐将组件的样式文件命名为同名.css文件，放在同级目录。
- HTTP 请求使用 fetch
- 数据结构统一采用 immutable
- 全局常量通过 webpack 的 DefinePlugin 插件引入
- 推荐使用 Redux dev tools 调试，chrome 安装插件即可直接使用
- 单元测试命名为 [被测文件名].test.js 与被测文件同级目录

### 文档
- [webpack](https://github.com/huanqingli/life-note/blob/master/%E5%89%8D%E7%AB%AF/%E5%85%B6%E4%BB%96%E5%B7%A5%E5%85%B7/webpack.md)
- [lodash快捷查询](https://github.com/huanqingli/life-note/blob/master/%E5%89%8D%E7%AB%AF/%E5%85%B6%E4%BB%96%E5%B7%A5%E5%85%B7/lodash%E5%BF%AB%E6%8D%B7%E6%9F%A5%E8%AF%A2.md)[待完成]
- [CSS变量（自定义属性）](https://github.com/huanqingli/life-note/blob/master/%E5%89%8D%E7%AB%AF/CSS/CSS%E5%8F%98%E9%87%8F%EF%BC%88%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%EF%BC%89.md)
- [css-modules](https://github.com/huanqingli/life-note/blob/master/%E5%89%8D%E7%AB%AF/CSS/css-modules.md)
- [fetch](https://github.com/huanqingli/life-note/blob/master/%E5%89%8D%E7%AB%AF/%E5%85%B6%E4%BB%96%E5%B7%A5%E5%85%B7/fetch.md)
- [webpack-科学分离第三方库](https://github.com/huanqingli/life-note/blob/master/%E5%8E%9F%E5%88%9B%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF%E7%B1%BB/webpack-%E7%A7%91%E5%AD%A6%E5%88%86%E7%A6%BB%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93.md)
- [webpack-热替换](https://github.com/huanqingli/life-note/blob/master/%E5%8E%9F%E5%88%9B%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF%E7%B1%BB/react-%E7%83%AD%E6%9B%BF%E6%8D%A2.md)
