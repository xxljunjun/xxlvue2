### vnode,真实dom,h函数，diff算法,模板编译
```js
`真实dom通过${模板编译}变成vnode`
`人为通过${h函数}生成vnode`
`vnode可以通过${diff算法}调用${patch函数}生成真实dom`
```

### 虚拟dom和diff算法
+ diff算法：精细化比对,实现最小量更新；key是节点的唯一标识符
+ 虚拟dom：用javaScript对象描述DOM的层次结构。DOM中的一切属性都在虚拟DOM中有对应的属性
```html
<div class="box"></div>
```
```js
//新虚拟DOM与老虚拟DOM进行diff(精细化比较),算出应该如何最小量更新，最后反映到真正的DOM上。
{
    "sel":"div",
    "data":{
        "class":{"box":true}
    }
}
```
+ snabbdom简介
```js
npm install -S snabbdom
//snabbdom是著名的虚拟DOM库，是diff算法的鼻祖，Vue源码借鉴了snabbdom
//!!!有坑webpack5的package的export
```
+ snabbdom的h函数如何工作
+ diff算法原理
+ 手写diff算法


### 安装snabbdom 

### 提出疑问DOM如何变为虚拟DOM？属于模板编译原理范畴mustache

### 提出问题：虚拟DOM如何被渲染函数（h函数)产生
+ h函数是用来产生虚拟节点(vnode)virtual
```js
h('a',{props:{href:'http://baidu.com'}},'小溪流')
// `{"sel":'a'."data":{props:{href:'http://baidu.com'}},'text':'小溪流'}`
```
+ 虚拟节点的属性
```js
{
    children:undefined,//表示子元素
    data:{},  //属性和样式
    elm:undefined, //对应的真正的dom节点
    key:undefined,  //节点的唯一标识
    sel:'div',
    text:'我是一个盒子'
}
```
+ h函数可以嵌套使用，从而得到虚拟DOM树！！！
```js
 const meVnode3 = h('ul',[
    h('li','西瓜'),
    h('li','雪梨'),
    h('li','苹果')
  ])
```
+ 手写h函数

### 提出问题：diff算法原理
```
patch修补函数是关键函数，当然key很重要,key是这个节点的唯一标志符，告诉diff算法，更改前后它们是同一个DOM节点
只有同一个虚拟节点，才能进行精细化比较
只进行同层比较，不会进行跨层比较
```
+ patch流程图
```
oldVnode是虚拟节点还是DOM节点
oldVnode与newVnode是不是同一个节点：key和sel（选择器）相同
```

### 提出问题：虚拟DOM如何通过diff变成真正的DOM的


