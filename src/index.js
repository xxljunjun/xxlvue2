import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const container = document.getElementById('container')
// console.log("dom节点第一次上树",container)
const myVnode = h('p',{},"小溪流")
console.log(myVnode)

patch(container,myVnode)

