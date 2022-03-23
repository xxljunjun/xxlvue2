import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

//创建patch函数
const patch = init([classModule,propsModule,styleModule,eventListenersModule])
//让虚拟节点上树
const container = document.getElementById('container')
const btn = document.getElementById('btn')

//创建虚拟节点:key是唯一标志符
const meVnode1 = h('ul',{},[
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
  h('li',{key:'D'},'D')
])

patch(container,meVnode1)

const meVnode2 = h('ul',{},[
  h('li',{key:'E'},'E'),
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
  h('li',{key:'D'},'D'),
])

btn.onclick = function(){
  console.log("1111111111")
  patch(meVnode1,meVnode2)
}