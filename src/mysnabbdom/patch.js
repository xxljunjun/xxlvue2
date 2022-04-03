import vnode from './vnode.js'
import creactElment from './creatElement.js'
export default function (oldVnode, newVnode) {
    console.log('旧的dom节点', oldVnode)
    console.log('新的虚拟dom节点', newVnode)
    //1、判断第一个参数oldVnode是DOM节点还是oldVnode,是否为第一次上树
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    console.log("包装后的", oldVnode)
    //2、判断是否为同一个节点：key和sel相同
    if (oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key) {
        console.log("是同一个节点：需要精细比较")
    } else {
        console.log("不是同一个节点，暴力删除并插入")
        let newVnodeElm = creactElment(newVnode)
        console.log("newVnodeElm", newVnodeElm)
        //插入到老节点之前
        if(oldVnode.elm.parentNode && newVnodeElm){
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
        }
        //删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}