/*
    oberve(obj)==>看obj上有没有__ob__==>没有则new Obsever()将产生的实例添加到_-ob__==>遍历下一层属性，逐个defineReactive
*/
//observe.js==>Observer.js==>defineReactive.js
import observe from './observe.js'
var obj = {
    a:{
        m:{
            n:5
        }
    },
    b:10
}

observe(obj)
//第一层变成响应式数据了
console.log('已经是响应式数据了',obj)