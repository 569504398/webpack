import  Vue from "vue"
import  RouterVue from "vue-router"
Vue.use(RouterVue)  

import   test  from "../compoents/test.vue"
import   index  from "../compoents/Index.vue"
import   Index3  from "../compoents/Index3.vue"
//挂载到vue上

console.log(test);


const  router = new RouterVue({
     mode:"history",
      routes:[
             {path:"/test",component:test},
             {path:"/index",component:index},
             {path:"/index3",component:Index3},
      ]
})

export default  router