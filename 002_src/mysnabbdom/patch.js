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
        //重点！！！
        console.log("需要比较的旧节点",oldVnode)
        console.log("需要比较的新节点",newVnode)
        //1、判断新旧是否是同一个对象
        if(newVnode === oldVnode) return
        //2、判断新vonde有没有text属性
        if(newVnode.text !== undefined && (newVnode.children == undefined || newVnode.children.length ==0)){
            console.log("新虚拟dom中有text属性")
            if(newVnode.text !== oldVnode.text){
                oldVnode.elm.innerText = newVnode.text
            }
        }else{
            console.log("新虚拟dom中没有text属性")
            //判断旧vnode是否有chillden
            if(oldVnode.children != undefined && oldVnode.children.length >0){
                 //此时是最复杂的情况;新老vnode都有children;比较多层利用递归
            }else{
                //文字能把dom覆盖，dom不能把文字覆盖
                oldVnode.elm.innerHTML = ''
                // 老的没有children,新的vnode有
                //遍历新的vnode子节点，创建DOM，上树
                for(let i  =0;i<newVnode.children.length;i++){
                    let dom = creactElment(newVnode.children[i])
                    oldVnode.elm.appendChild(dom)
                }
            }
        }
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