<template>
  <div class="add-blog" v-if="blog.summited">
      <form>
        <h1>{{blog.title}}</h1>
        <input type="checkbox" name="" v-model="blog.caate" value="1" id="">
        <input type="checkbox" name="" v-model="blog.caate" value="2" id="">
        <button @click.prevent="addData">1234</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      blog: {
          title:'1234',
          content:'1234',
          caate:[],
          summited:false
      }
    }
  },
  methods:{
      addData:function(){
          this.$http.post("http://jsonplaceholder.typicode.com/posts",{
                title: 'foo',
                body: 'bar',
                userId: 1
          }).then(function(data){
              //.then方法返回成功之后的数据
              console.log(data);
              this.summit = true
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
