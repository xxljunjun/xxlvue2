import vnode from './vnode.js'
import creactElment from './creatElement.js'
export default function(oldVnode,newVnode){
    console.log(oldVnode)
    console.log(newVnode)
    //1、判断第一个参数oldVnode是DOM节点还是oldVnode
    if(oldVnode.sel == '' || oldVnode.sel ==undefined){
        oldVnode= vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }
    console.log("包装后的",oldVnode)
    //2、判断是否为同一个节点：key和sel相同
    if(oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key){
        console.log("是同一个节点：需要精细比较")
    }else{
        console.log("不是同一个节点，暴力删除并插入")
        creactElment(newVnode,oldVnode.elm)
    }
}