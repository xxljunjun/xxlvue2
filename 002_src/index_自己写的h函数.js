import h from './mysnabbdom/h.js'
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
} from "snabbdom";
//创建patch函数
const patch = init([classModule,propsModule,styleModule,eventListenersModule])
//h('div',{},'文字')
//h('div',{},[])
//h('div',{},h())
const myVnode = h('div',{},[
  h('p',{},'111'),
  h('p',{},'222'),
  h('p',{},[
    h('span',{},'333'),
  ]),
])

console.log("测试用例",myVnode)

 //让虚拟节点上树
 const container = document.getElementById('container')
 patch(container,myVnode)