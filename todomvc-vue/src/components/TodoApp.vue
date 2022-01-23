<template>
    <section class="todoapp">
      <todo-header :todos="todos" @getTodoList="getTodoList" ></todo-header>
      <router-view :todos="todos" @getItemLeft="getItemLeft"></router-view>
      <todo-footer :todos="todos" :activeCount="activeCount" @getClearComplete="getClearComplete"></todo-footer>
    </section>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
import todoStorage from '../store/index.js'

export default {
    components:{
     TodoHeader,
     TodoList,
     TodoFooter
    },
    data() {
        return {
            todos:todoStorage.fetch(),
            activeCount:0
        }
    },
    watch: {
        todos: {
            handler: function (todos){
                todoStorage.save(todos);
            },
            deep: true
        }
    },
    methods:{
        getTodoList(data){
            this.todos = data;
            this.activeCount = data.length;
        },
        getItemLeft(data){
            this.activeCount = data;
        },
        getClearComplete(){
            //坑点
            //父组件的值变化了，子组件调用watch监听
            this.todos = this.todos.filter( function(todo){
                 return !todo.completed;
            });
        }
    }
}
</script>

<style>
.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

</style>
