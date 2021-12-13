## ES6

与JS的关系，ES是JS的规格，JS是ES的一种实现

Node.js 是JS得服务器运行环境。对ES的支持度更高

Babel转码器 可以将ES6转为ES5，不用再担心环境是否支持ES6

**1.let const var**

**let** 

- 局部的概念（块级作用域）
- for循环常用，当前的i只在本轮循环有效，每一次循环的i都是一个新的变量
- 注意作用域，for循环变量设定那部分是父级作用域，循环体内部是一个单独的子作用域（如果再用let i 声明变量的话，同一作用域不可用let声明同一个变量）
- 声明后才能调用，否则会报错
- 区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。在声明前使用这些变量就会报错 -**暂时性死区** 
- typeof 在let声明前调用会抛出一个ReferenceError

**var**

- 全局作用域

- 变量提升，声明前调用，值为undefined

  

**块级作用域**

- 避免内层变量可能会覆盖外层变量

- 用来计数的循环变量泄露为全局变量

  

**ES6中在块级作用域中声明函数遵循三点：**

- 允许在块级作用域内声明函数

- **函数声明类似于var**，即会提升倒全局作用域或函数作用域的头部

- 同时，函数声明还会提升到所在的块级作用域的头部

  

- 在块级内应该写成表达式，而不是函数声明语句

- 块级作用域必须大括号

  

**const**

- 声明常量

- 不得改变，内存地址所保存的数据不得改动

- 必须赋值

- 作用域与let相同，只在声明所在的块级作用域内有效

- 先声明再使用，同样存在死去，不提升

- 不可重复声明

  

**ES6声明变量的六种方法**

var function let const import class



**顶层对象属性**

顶层对象:window对象 Node指的是global对象

ES6中 var和function声明全局变量，依旧是顶层对象的属性；let，const，class声明的全局对象，不属于顶层对象；ES6开始，全局变量将逐步与顶层对象的属性脱钩。



**globalThis对象**

顶层对象在各种实现里：

浏览器里面，顶层对象是window，但Node和Web Worker没有window

浏览器和Web Worker里面，self也指向顶层对象，但是Node没有self

Node里面，顶层对象是global，但其他环境不支持



用this取顶层对象

- 全局环境中，this会返回顶层对象。Node模块中this返回的是当前模块，ES6模块中this返回的是undefined
- 函数里面的this，如果函数不是作为对象的方法运行，而是 单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
- 不管是严格模式还是普通模式，new Function('return  this'))(),总是会返回全局对象，在CSP安全策略，eval，new Function这些方法都可能无法使用。

ES2020，引入globalThis作为顶层对象。任何环境下，globalThis都存在的，都可以从它拿顶层对象，指向全局环境下的this。



2.**字符串的扩展**

- for ... of循环遍历

- 模板字符串

  XXX <p> ${XXXX} </p> XXXX

3.**Reflect操作对象而提供的新的API**

**作用：**

- 将Object对象的一些明显属于语言内部的方法（如Object.defineProperty）,放到Reflect对象上，拿到语言内部的方法
- 修改某些Object方法返回结果
- 让Object操作变成函数行为。
- 让Proxy对象可以方便地调用对应地reflect方法，完成默认行为，作为修改行为的基础



13个静态方法:

- Reflect.apply(target,thisArg,args)
- Reflect.construct(target,args)
- Reflect.get(target,name,receiver)
- Reflect.set(target,name,value,receiver)
- Reflect.defineProperty(target,name,desc)
- Reflect.deleteProperty(target,name)
- Reflect.has(target,name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target,name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target,prototype)

以上方法与Proxy对象对应的方法是一一对应的



4.**async 函数**

是generator函数的语法糖

async就是将generator函数的星号(*)替换成async，将yield替换成awiait

**改进点：**

- 内置执行器

- 更好的语义

- 更广的适用性

- 返回值是Promise，可以用then方法指定下一步操作

  await命令后面是一个promise对象，返回该对象的结果



**5.class类**

```js
class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```





