//真正创建节点。插入到pivot标杆前面
export default function createElement(vnode) {
    console.log('目的是把虚拟节点vnode', vnode)
    //原生创建html结构
    let domNode = document.createElement(vnode.sel)
    console.log('原生创建html结构', domNode)
    //有子节点还是有文本
    if (vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0)) {
        domNode.innerText = vnode.text
        //将孤儿节点上树,因为没有子节点直接上dom树显示页面
       
        console.log("不需要递归", vnode)
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        //递归的情况,考虑递归结束的情况,有子节点
        console.log("需要递归", vnode)
        for(let i = 0;i<vnode.children.length;i++){
            //得到当前这个children
            let ch = vnode.children[i]
            //创建除它的DOM，一旦调用了creatElment意味着：创建出DOM了，并且elm属性指向了创建出的DOM,但是没有上树，是一个guer节点
            let chDOM = createElement(ch)
            // console.log("000000000",chDOM)
            domNode.appendChild(chDOM)
        }
    }
    //补充elm属性
    vnode.elm = domNode
    //返回elm elm是一个纯dom对象,有返回值方便在patch函数中进行上树插入到标杆节点前
    return vnode.elm
}