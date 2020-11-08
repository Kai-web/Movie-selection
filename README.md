## #项目结构

- │index.html -- html结构
  │script.js -- js文件
  │style.css -- css样式

## #JS中  ”+“ 号的用法

- JavaScript中可以在某个元素前使用 ‘+’ 号，这个操作是将该元素转换成Number类型，如果转换失败，那么将得到 NaN，通常使用+操作符可以快速地将字符串转换为数字。

```javascript
// 获取下拉框影片票价
    let ticketPrice = +movieSelect.value;
```

## #JS扩展运算符

- 扩展运算符的第一个作用就是将数组变成一个参数序列

```javascript
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);


// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);
```

- 复制数组

```javascript
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

- 合并数组

```javascript
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

- 将字符串转成数组

```javascript
[...'hello']   // [ "h", "e", "l", "l", "o" ]
```

- 合并对象

```javascript
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
```

## #JSON.stringify()方法

- JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
- 语法

```javascript
JSON.stringify(value[, replacer[, space]])
```

```javascript
localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));
```

- value：是必须要的字段。就是你输入的对象，比如数组啊，类啊等等。
- replacer：这个是可选的。它又分为2种方式，一种是方法，第二种是数组

## #JSON.parse()方法

- JSON.parse() 方法用于将一个 JSON 字符串转换为对象。

- 语法

```javascript
JSON.parse(text[, reviver])
```

```javascript
const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
```

- text:必需， 一个有效的 JSON 字符串
- reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

## #注意

- 如果使用JSON.parse()方法来转化成json对象的数据格式的话，需要注意的是被转化的字符串里面的属性要使用引号，并且总体是单引号套双引号的方式。

## #Storage getItem() 方法

- getItem()方法返回指定的Storage Object项的值。。getItem()方法属于Storage对象，可以是localStorage对象 ，也可以是sessionStorrage对象。
  获取此域的localStorage的值

```javascript
const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
```

## #Storage setItem() 方法

- setItem()方法设置指定的存储对象项的值。setItem()方法属于Storage对象，可以是localStorage对象 ，也可以是sessionStorrage对象。

```javascript
// 保存电影索引值和票价
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}
```

## #Array map() 方法

```javascript
const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
```

- map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

  map() 方法按照原始数组元素顺序依次处理元素。

  注意： map() 不会对空数组进行检测。

  注意： map() 不会改变原始数组。

## #contains()方法

- js原生方法，用于判断DOM元素的包含关系，它以HTMLElement为参数，且返回布尔值

```javascript
// 座位点击事件
container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});
```

## #target 事件属性

- target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。

```javascript
// 电影下拉框事件监听
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});
```

