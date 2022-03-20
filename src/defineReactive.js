import observe from './observe.js'
import Dep from './Dep.js'
/*
* @function 将对象的某一层变成相应式数据
* @params data key value
**/
export default function defineReactive(data,key,val){
    const dep = new Dep()
    // console.log("defineReactive工作了",data,key,val)
    if(arguments.length == 2){
        val = data[key]
    }

    //第二层子元素observe，至此形成了递归，这个递归不是函数调用自己，而是多个函数，类循环
    let childOb = observe(val) 

    Object.defineProperty(data,key,{
        // value:'男',
        // writable:true,  //是否可更改
        enumerable:true, //是否可被枚举
        configurable:true,  //可以被配置
        get(){
            console.log("你试图访问obj的属性")
            //如果现在处于依赖阶段
            if(Dep.target){
                dep.depend()
                if(childOb){
                    childOb.dep.depend()
                }
            }
            return val
        },
        set(newVal){
            console.log("你试图改变obj的属性",newVal)
            if(val === newVal){
                return
            }
            val = newVal
            //当设置了新值，这个新值也要被oberve,防止新值也是一个对象
            childOb = observe(newVal)
            //发布订阅模式
            dep.notify()
        }
    })
}