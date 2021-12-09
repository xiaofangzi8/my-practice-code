# 数组

- JS数组的长度和元素类型都是非固定的，所以数据在内存中可以不连续。
- 特定场景的数组，可以用类型数组 TypedArray



##### 常见操作

- 遍历数组

```javascript
let fruits = ['Apple','Banana']

fruits.forEach(function(item,index,array){
	console.log(item,index);
})
```

- 添加元素到数组的末尾 - push()
- 删除数组末尾的元素 - pop()
- 删除数组头部元素- shift() 返回被删除的元素
- 添加元素到数组的头部-unshift() 返回数组当前的长度，改变原始数组产生**<u>副作用</u>**
- 元素在数组中的索引-indexOf()
- 通过索引删除某个元素-splice(pros,index) 返回被删除的元素，产生副作用
- 截取数组的指定范围的元素- slice(index1,index2) 不包含index2位置，不产生副作用，生成新的数组  **浅拷贝**
- 复制一个数组-slice() -整个复制 **深拷贝**



**补充**

- 数组内置的几个方法（例如 [`join`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)、[`slice`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、[`indexOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 等）都会考虑 [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 的值。
- 另外还有一些方法（例如 [`push`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)、[`splice`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 等）还会改变 [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 的值。
- 正则表达式[`RegExp.exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)、[`String.match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)、[`String.replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 都会返回这样的数组。

**构造器**

```javascript
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```



```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

**静态方法**

[`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) -可结合set去重，创建新的数组实例

[`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

[`Array.of()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of) 创建新的数组实例

实例方法

- at()-找元素
- copyWithin()-浅复制数组的一部分到同一个数组中的另一个位置，并返回它，不改变原来数组的长度

```js
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

- concat()-合并多个数组
- entries()-返回索引和元素的键值对
- every()-测试数组内所有元素是否通过某个指定函数的测试

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

- fill()-填充指定范围的元素
- filter()-过滤目标元素
- find()-返回数组中满足测试的第一个元素的值。没有则返回undefined
- findIndex()- 同上，但返回索引
- flat() -讲所有元素以及遍历的子元素 合并成一个新的数组，参数depth是深度
- flatMap() -映射函数映射每个元素，然后压缩结果为一个新的数组
- forEach()-遍历
- indexOf()-返回给定元素所在的第一个索引，否则-1
- join()-根据分隔符，连接元素，返回字符串
- keys()-返回一个包含数组中每个索引键的Array Iterator对象

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
```

- lastIndexOf-返回元素的最后一个索引，否则-1
- map()-返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值

```js
onst array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

- pop-删除最后一个元素，返回该元素的值
- push-末尾添加一个/多个元素，返回数组的新长度、
- reduce()-对数组中的每个元素执行一个由自己定义的reducer函数（升序执行），将结果汇总为单个返回值

```js
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

- reduceRight-累加器，从右向左

```js
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
```

- reverse() - 将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组
- shift()-删除数组第一个元素，并返回这个元素
- slice()-提取数组的一部分并返回一个新数组
- some()-测试数组中是不是至少有一个元素通过了被提供的函数测试
- sort()-对数组元素进行原地排序并返回此数组  转为字符串 UTF16比对排序
- splice()-通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的数组，产生副作用

```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

- toLocale String() - 返回一个字符串表示数组中的元素。数组中的元素将使用各自的该方法转成字符串
- toString()-同上

```js
var sd = new Date();

console.log(sd.toLocaleString());   

console.log(sd.toString());
```

- unshift()-将一个或多个元素添加到数组的头部，并返回该数组的新长度
- values()-返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

- arr[Symbol.iterator]-返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
// 浏览器必须支持 for...of 循环
for (let letter of eArr) {
  console.log(letter);
}
```

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e
```

