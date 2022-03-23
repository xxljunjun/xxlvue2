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

  //创建虚拟节点
  const myVnode1 =  h('a',{props:{href:'http://baidu.com'}},'小溪流')
  const meVnode2 = h('div','我是一个盒子')
  const meVnode3 = h('ul',[
    h('li','西瓜'),
    h('li','雪梨'),
    h('li','苹果')
  ])


  //让虚拟节点上树
  const container = document.getElementById('container')
  patch(container,meVnode3)