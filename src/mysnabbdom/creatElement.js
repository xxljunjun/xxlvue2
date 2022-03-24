//真正创建节点。插入到pivot标杆前面
export default function(vnode,pivot){
    console.log('目的是把虚拟节点vnode插入到pivot之前',vnode)
    let domNode = document.createElement(vnode.sel)
    //有子节点还是有文本
    if(vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text
        //将孤儿节点上树
        pivot.parentNode.insertBefore(domNode,pivot)
    }else if(Array.isArray(vnode.children) && vnode.children.length>0){
        //递归的情况
    }
}