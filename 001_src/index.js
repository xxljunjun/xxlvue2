/*
    oberve(obj)==>看obj上有没有__ob__==>没有则new Obsever()将产生的实例添加到_-ob__==>遍历下一层属性，逐个defineReactive
*/
//递归执行顺序：observe.js==>Observer.js==>defineReactive.js
import observe from './observe.js'
// import Watcher from './Watcher.js'
var obj = {
    a:{
        m:{
            n:5
        }
    },
    b:10,
    c:{
        d:{
            e:{
                f:6666
            }
        }
    },
    g:[11,22,33],
    h:[{id:1,name:'小溪流'}]
}

observe(obj)
//第一层变成响应式数据了
obj.g.splice(0,2)
console.log('已经是响应式数据了',obj)

//坑!!!先监听后改变
// new Watcher(obj,'a.m.n',(val)=>{
//     console.log("2346346453",val)
// })
// obj.a.m.n = 11



