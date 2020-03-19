const path = require("path")
const  htmlWebpackPlugin =require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    //   入口文件将要打包或在内存中生成的文件
    entry: path.join(__dirname,"./src/main.js"),
    //出口文件将打包的文件存放的路径
    output: {
             path: path.join(__dirname,'./dist'),
             filename: "bundle.js"
    },
    // "dev": "webpack-dev-server --open  --port 8081  --contentBase src  --hot" 等价于下面devServer
    devServer:{
            open:true,
            port:8082,
            contentBase:"src",
            hot:true
    },
    //配置插件
    plugins:[
                new htmlWebpackPlugin({
                    //指定模板在前面指定的目录的内存中生成并合并前面bundle.js
                       template:  path.join(__dirname,"./src/index.html"),
                       //虚拟主机 打开后默认找对应目录下的index.html文件，如果内存中找不到index.html,就会到物理磁盘中找，所以这样如果不是index.html就会找目录下文件了 
                       filename: "index.html"
                }),
                //在插插件对象引入vue-loader下plugin对象
                new VueLoaderPlugin()
 
    ],
    //配置第三方模块
    module:{
        rules: [
               //先css->style 从右到左
              { test:/\.css$/,use:["style-loader","css-loader"] },
              { test:/\.less$/,use:["style-loader","css-loader","less-loader"] },
              { test:/\.scss$/,use:["style-loader","css-loader","sass-loader"] },
            //   limit的值小于图片大小时，会变成一个url地址，有请求头和响应头，大于等于就会是base64编码，适合小图片，大图片字符串太长了
            //   [name].[ext] 图片原名字，后缀也一样，在内存生成了一张和原图片名字一样的图片
            // 为了防止名字重复导致覆盖可以加个hash值
              { test:/\.(png|jpg|gif|jpeg|svg)$/,use:'url-loader?limit=22000&name=[hash:8]-[name].[ext]'},
            //   处理字体图标,注：3.3.7bootstrap支持字体图标这种引入 
              {test:/\.(eot|ttf|svg|woff|woff2)$/,use:"url-loader"},
              //处理es6中一些webpack无法直接打包的语法，如class里面的属性和方法,将项目里面的node_modules里面的js文件排除掉，防止不必要的解析 
              { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
              //无法直接打包.vue，它借助于vue-loader,它又依赖于vue-template-compiler
              { test: /\.vue$/, use: 'vue-loader'},
        ]
    },
    resolve:{
      alias:{
              //如果通过import vue from "vue" 默认引入common.js ，是runtime.onl , 不能使用template使用，现在修改它 runtime-compiler 
              //  "vue$":"vue/dist/vue.js"
      }
    }
  
}