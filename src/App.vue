<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <AddBlog/>
    <ShowBlog/> -->

    <!-- router-view为当前路由地址显示的组件内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'

export default {
  name: 'App',
  components: {
    AddBlog,ShowBlog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
