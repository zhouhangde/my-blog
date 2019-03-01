<template>
  <div class="show-blog" v-theme="'wide'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="输入搜索">
      <!-- 此处便利不能再便利blogs -->
      <div v-for="blog in filterBlogs" :key="blog.id">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          <h2> {{blog.body | snippet}}</h2>
      </div>
       <div class="show-blog" v-themeArg:column="'wide'">
         
      </div>
      <button></button>
  </div>
 
</template>

<script>
export default {
  name: 'show-blog',
  data () {
    return {
      blogs: [],
      search:''
    }
  },
  created(){
    // this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
        
    //     this.blogs = data.body.slice(0,10);
    //     console.log('1', this.blogs);
    // })

    // ./../static/post.json也是可以的
    this.$http.get('../../static/post.json').then(function(data){
        console.log('1', data);
        this.blogs = data.body.slice(0,10);
    })
  },
  computed:{
    //  计算属性,用于搜索功能模糊匹配
     filterBlogs:function(){
       /* 过滤属性es6 */
       return this.blogs.filter((blog) =>{
         /* match进行匹配search的值和title的值，一样的就显示出来 */
         return blog.title.match(this.search);
       })

       
     }
  },
  filters:{
    /* 局部注册指令 */
    // "to-lovwercase":function(value){
    //     return value.toUpperCase();
    // }

    /*  es6的写法，方法的形式 */
    toLovwercase(value){
        return value.toUpperCase();
    },
     toLovwercase2(value){
        return value.toUpperCase();
    }
  },
  directives:{
     /* 局部注册指令 */
     'raindow2':{
       bind(el,binding,vnode){
         console.log("1111");
       }
     }
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
