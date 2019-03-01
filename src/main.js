// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import App from './App'
/* 导入routers.js */
import Routers from './routers'




Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueRouter)

// 自定义指令
Vue.directive('rainbow',{
  // el表示当前使用的节点
  /* binding为绑定此指令触发的方法 */
  /* vnode为虚拟节点 */
  bind(el,binding,vnode){
    // 保证每个title的颜色不一样
     el.style.color = "#"+Math.random().toString(16).slice(2,8);

  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    //  控制宽度
    /*  wide为自定义指令的参数 */
     if(binding.value == 'wide'){
       console.log("111");
       el.style.maxWidth = "1260px";
     }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
     }
  }
})

Vue.directive('themeArg',{
  bind(el,binding,vnode){
    //  控制宽度
    /*  wide为自定义指令的参数 */
     if(binding.value == 'wide'){
       console.log("333");
       el.style.maxWidth = "1260px";
     }else if(binding.value == 'narrow'){
       el.style.maxWidth = "560px";
     }

     /* arg可获取指令的修饰符 */
     if(binding.arg == 'column'){
      console.log("2222");
      el.style.background = "#6677cc";
      el.style.padding = "20px";
     }
  }
})

/* 自定义过滤器 */
// 对应的节点上面通过管道传输
Vue.filter("to-uppercase",function(value){
    // value为管道左边的值,即|左边的值
     return value.toUpperCase();
})

/* 内容太长时截取 */
Vue.filter("snippet",function(value){
  // value为管道左边的值,即|左边的值
  console.log("134124");
   return value.slice(0,100);
   
})

/* Routers为外部导入 */
const router = new vueRouter({
  routes:Routers
})

/* 主容器 */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
