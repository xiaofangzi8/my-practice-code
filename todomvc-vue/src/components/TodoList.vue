<template>
    <section class="main" v-show="this.todos.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="checkAll">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li :class="{completed: todo.completed, editing: todo === editedTodo}" v-for="todo in filterTodos" :key="todo.id">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="todo.completed" />
                    <label @dblclick="editing(todo)">{{todo.title}}</label>
                    <button class="destroy" @click="removeItem(todo)"></button>
                </div>
                <input class="edit" v-model="todo.title" v-focus="todo === editedTodo" @keyup.enter="editing(null)">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props:[
        'todos'
    ],
    data(){
        return {
            editedTodo: null,
			filterTodos:[]
        }
    },
	//注意点
	//计算属性不需要在data中定义
	computed:{
		checkAll: {
			get: function () {
				return this.remaining === 0;
			},
			set: function (value){
				this.todos.forEach(element => {
					element.completed = value;
				});
			}
		},
		remaining: function(){
			let itemLeft = this.todos.filter(function (todo) {
                return !todo.completed;
            }).length;
			this.$emit('getItemLeft',itemLeft);
			return itemLeft;
		}
	},
	watch: {
	  $route: {
		  handler() {
			  if(this.$route.name === "All"){
				this.filterTodos = this.todos;
			  }else if(this.$route.name === "Active"){
				  this.filterTodos =  this.todos.filter(function (todo) {
                       return !todo.completed;
               });
			  }else if(this.$route.name === "Completed"){
				  this.filterTodos =  this.todos.filter(function (todo) {
                      return todo.completed;
               });
			  }
		  }
	  },
	  //坑点
	  //父组件的值变化了，子组件的值一直不变
	  todos:function(data){
		  this.filterTodos = data;
	  }
	},
    methods:{
		removeItem(todo){
			let index = this.todos.indexOf(todo)
			this.todos.splice(index,1);
			this.$emit('getItemLeft',this.remaining);
		},
		editing(todo){
			this.editedTodo = todo;
		},
    },
	created(){
		this.filterTodos = this.todos;
	},
	//坑点
	//自定义指令为了 双击focus input框
	//是directives，而不是directive
	directives: {
		focus: {
			//坑点
			//bind inserted 的时候都报错 -> https://cn.vuejs.org/v2/guide/custom-directive.html
			update: function (el,binding){
				console.log('focus:',binding.value);
				if(binding.value){
					el.focus();
				}
			}
		}
}
}
</script>
<style>
.main {
	position: relative;
	z-index: 2;
	border-top: 1px solid #e6e6e6;
}

.toggle-all {
	width: 1px;
	height: 1px;
	border: none; /* Mobile Safari */
	opacity: 0;
	position: absolute;
	right: 100%;
	bottom: 100%;
}

.toggle-all + label {
	width: 60px;
	height: 34px;
	font-size: 0;
	position: absolute;
	top: -52px;
	left: -13px;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}

.toggle-all + label:before {
	content: '❯';
	font-size: 22px;
	color: #e6e6e6;
	padding: 10px 27px 10px 27px;
}

.toggle-all:checked + label:before {
	color: #737373;
}

.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
	border-bottom: none;
}

.todo-list li.editing {
	border-bottom: none;
	padding: 0;
}

.todo-list li.editing .edit {
	display: block;
	width: 506px;
	padding: 12px 16px;
	margin: 0 0 0 43px;
}

.todo-list li.editing .view {
	display: none;
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
	appearance: none;
}

.todo-list li .toggle {
	opacity: 0;
}

.todo-list li .toggle + label {
	/*
		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
	background-repeat: no-repeat;
	background-position: center left;
}

.todo-list li .toggle:checked + label {
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.todo-list li label {
	word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
}

.todo-list li.completed label {
	color: #d9d9d9;
	text-decoration: line-through;
}

.todo-list li .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
	color: #af5b5e;
}

.todo-list li .destroy:after {
	content: '×';
}

.todo-list li:hover .destroy {
	display: block;
}

.todo-list li .edit {
	display: none;
}

.todo-list li.editing:last-child {
	margin-bottom: -1px;
}
</style>
