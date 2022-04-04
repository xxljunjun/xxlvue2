import Vnode from './vnode.js'

//编写一个低配版本的h函数
//①h('div',{},'文字')
//②h('div',{},[])
//③h('div',{},h())
export default function(sel,data,c){
    //检查参数的个数
    if(arguments.length != 3){
        
        throw new Error("低配版的h函数请传入3个参数！")
    }
    //检查参数c的类型
    if(typeof c == 'string' || typeof c =='number'){
        //①
        return Vnode(sel,data,undefined,c,undefined)
    }else if(Array.isArray(c)){
        //②
        let children = []
        for(let i = 0;i<c.length;i++){
            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))){
                throw new Error("传入的数组的项目不是h函数")
            }
            children.push(c[i])
        }
        return Vnode(sel,data,children,undefined,undefined)
    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){
        //hasOwnProperty() 方法用来检测一个属性是否是对象的自有属性，而不是从原型链继承的。
         //③
         let children = []
         return Vnode(sel,data,children,undefined,undefined)
    }else {
        throw new Error("传入的第三个参数类型错误")
    }
}