### vue源码
```js
尤雨溪团队开发的前端框架，有很多源码思想值得探索。
2022年前端3个框架：React，Vue，Angular；微服务、工程化、前后端分离的时代。
```
+ 数据响应式原理(双向数据绑定)
+ 虚拟dom和diff算法
+ vue指令和生命周期

### axiso源码
```js
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
首先需要知道：axios不是一种新的技术。
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，有以下特点：
`从浏览器中创建 XMLHttpRequests`
`从 node.js 创建 http 请求`
`支持 Promise API`
`拦截请求和响应`
`转换请求数据和响应数据`
`取消请求`
`自动转换 JSON 数据`
`客户端支持防御 XSRF`
```

### mstache源码
```js
mustache是最早的模板引擎库，比Vue诞生早多了，它的底层实现机理在当时是非常有创造性的、轰动性的，为后续模板引擎的发展提供了崭新的思路。
// 模板引擎：解决数据变成视图最优雅的方法
                              数 据
                               ||
                               ||`结合`
                               ||
模板字符串===========>tokens============>dom字符串
```

### snabbdom源码
```js
snabbdom是著名的虚拟DOM库，是diff算法的鼻祖，Vue源码借鉴了snabbdom。
`真实dom通过${模板编译}变成vnode`
`vnode可以通过${diff算法}调用${patch函数}生成真实dom`
`人为通过${h函数}生成vnode`
```

