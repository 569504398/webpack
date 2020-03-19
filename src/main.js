import  $ from "jquery"
//比原始在html通过link来引入 它可以减少http请求
import  "./css/test.css"
import  "./css/index.less"
import  "./css/index.scss" 
import  Vue from  "vue"
// 引入组件，测试.vue文件，需要vue-loader，它又依赖于vue-templte-compiler
import  App from "./App.vue"
// 引入vue-router
import  router from "./router/index"

import  "./useMintcompoent"

//引入router-vue
import  RouterVue from "vue-router"
import  test from "./compoents/test.vue"
import  Index from "./compoents/Index.vue"
import  Index3 from "./compoents/Index3.vue"
    // 引入css样式可以将../node_modules，不以./开头的是在node_modules目录下面找/
import  "bootstrap/dist/css/bootstrap.css"
//获取奇数元素，无需通过id,class,元素来获取
$("li:odd").css("background","green")   

class  Person{
     static   info = {name:"liuyi",tel:123456}
}
console.log(Person.info);


new Vue({
        el:"#app",
        //router-view和router-link 是routeVuer封装的组件，没有它就无法解析
        router,
        data:{
                test:"这是一个问题"
        } ,
        // comments:{
        //     cnp:Cpn
        // },
        //会将el上对应的元素清空
        render:h=>h(App)
})
