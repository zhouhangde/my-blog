import ShowBlogs from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
/* 此处需要导出数组 */
export default [
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog}
]