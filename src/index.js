import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const container = document.getElementById('container')
// console.log("dom节点第一次上树",container)

//没有子节点时
// const myVnode = h('p',{},"小溪流")
// console.log(myVnode)
//有子节点时
const meVnode_1 = h('ul', { key: 1 }, [
    h('li', {}, '111'), 
    h('li', {}, [
        h('div',{},[
            h('li',{},'2-11111'),
            h('li',{},'2-222'),
            h('li',{},'2-333')
        ])
    ]), 
    h('li', {}, '333')
])
console.log(meVnode_1)


patch(container, meVnode_1)

