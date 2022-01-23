import Vue from "vue";
import Router from "vue-router";
import TodoList from "../components/TodoList"

Vue.use(Router);

const router = new Router({
    //坑点 是routes 而不是 routers ！！！！！
    routes: [
        {
            path:'/',
            redirect:'All'
        },
        {
            path:"/all",
            name:"All",
            component:TodoList
        },{
            path:"/active",
            name:"Active",
            component:TodoList 
        },
        {
            path:"/completed",
            name:"Completed",
            component:TodoList 
        }
    ]
});

export default router;