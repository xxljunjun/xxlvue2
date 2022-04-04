import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'
//想要跑起来的002_src,需要在index.html中创建id为container的div标签

//有子节点时
// const myVnode_1 = h('p', { key: 1 }, [
//     h('li', {}, '111'), 
//     h('li', {}, [
//         h('div',{},[
//             h('li',{},'2-11111'),
//             h('li',{},'2-222'),
//             h('li',{},'2-333')
//         ])
//     ]), 
//     h('li', {}, '333')
// ])
// console.log(myVnode_1)

//得到盒子和按钮
const container = document.getElementById('container')
const btn = document.getElementById("btn")
//第一次上树
const myVnode = h('p',{},"小溪流")
patch(container,myVnode)

//相同节点进行精细化比较
const myVnode_2 = h('p',{},[
    h('li',{},'liao'),
    h('li',{},'jun'),
    h('li',{},'xxl')
])
btn.onclick=function(){
    patch(myVnode, myVnode_2)
}

