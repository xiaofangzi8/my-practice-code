#### 1.算数运算符

幂  **       常用： Math.pow(x,y)

#### 2.常用字符串方法

- slice()
- indexOf()
- replace()
- toUpperCase()
- toLowerCase()

###### Math方法

- Math.floor()
- Math.random()

#### 3.数组的常用方法

- unshift shift 是跟 push 和 pop 相同 作用于数组的开始
- splice()删除元素，生成新数组

#### 4.基础 -运算

- == 代表相同 转换类型
- === 代表严格相同 不转换类型

#### 5.函数

- isNaN()函数测试num的值是否不是一个数字-如果不是数字

- 监听事件 addEventListener(type, listener, options) ，第三个参数options就决定了是先捕获还是先冒泡，如果是true就是捕获，反正则是冒泡

- 移除removeEventListener

- e.preventDefault(); 表单校验，阻止默认行为

  事件捕获和冒泡

  ![](Javascript%E7%9B%B8%E5%85%B3.assets/%E6%8D%95%E8%8E%B7%E6%88%96%E8%80%85%E5%86%92%E6%B3%A1.png)

在现代浏览器中，默认情况下，所有事件处理程序都在冒泡阶段进行注册。用stopPropagation()修复问题

![](Javascript%E7%9B%B8%E5%85%B3.assets/stopPropagation.png)



**冒泡适用场景：**一个很好的例子是一系列列表项，如果你想让每个列表项被点击时弹出一条信息，您可以将click单击事件监听器设置在父元素<ul>上，这样事件就会从列表项冒泡到其父元素<ul>上。

#### 6.JS对象

弹跳球游戏上阶段学习已经实现。

新增功能： 恶魔圈，消除弹进去的小球

#### 7.JS异步

- 作用：可以解决阻塞问题JS单线程的

-  webworker 可以实现异步

- 异步callback 就是[addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)第二个参数

- promises 新派的异步代码，代表操作的中间状态

  

### [Promises 对比 callbacks](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing#promises_对比_callbacks)

promises与旧式callbacks有一些相似之处。它们本质上是一个返回的对象，您可以将回调函数附加到该对象上，而不必将回调作为参数传递给另一个函数。

然而，`Promise`是专门为异步操作而设计的，与旧式回调相比具有许多优点:

- 您可以使用多个then()操作将多个异步操作链接在一起，并将其中一个操作的结果作为输入传递给下一个操作。这种链接方式对回调来说要难得多，会使回调以混乱的“末日金字塔”告终。 (也称为[回调地狱](http://callbackhell.com/))。

- `Promise`总是严格按照它们放置在事件队列中的顺序调用。

- 错误处理要好得多——所有的错误都由块末尾的一个.catch()块处理，而不是在“金字塔”的每一层单独处理。

  

promise

1.创建promise时，它既不是成功也不是失败状态。这个状态叫作**pending**（待定）。

2.当promise返回时，称为 resolved（已解决）.

1. 一个成功**resolved**的promise称为**fullfilled**（**实现**）。它返回一个值，可以通过将`.then()`块链接到promise链的末尾来访问该值。` .then()`块中的执行程序函数将包含promise的返回值。
2. 一个不成功**resolved**的promise被称为**rejected**（**拒绝**）了。它返回一个原因（**reason**），一条错误消息，说明为什么拒绝promise。可以通过将`.catch()`块链接到promise链的末尾来访问此原因。

#### promise all

Promise.all([a, b, c]).then(values => {
  ...
});

Promise.all()的任何一个 promise **拒绝**，整个块将**拒绝**。

#### 8.客户网页API

##### 常见API：

- 操作文档的API ：Document
- 从服务器获取数据的API：XMLHttpRequest FetchAPI
- 用于绘制和操作图形的API ：canvas
- 音频和视频API：HTMLMediaElement 
- 设备API
- 客户端存储API

##### 常见第三方API：

Google Maps API



