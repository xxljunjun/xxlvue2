/*
    Obseerver类的功能是将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
*/
import {def} from './utils.js'
import {arrayMethods} from './array.js' //重写了7个改变数组的api
import defineReactive from './defineReactive.js'
import oberve from './observe.js'
import Dep  from './Dep.js'
export default class Observer{
    constructor(value){
        //每个observer的实例上都有一个dep对象
        this.dep = new Dep()
        //往实例原型上添加__ob__属性，属性只是Obsever的实例对象（不可枚举）
        def(value,'__ob__',this,false) 

        //判断是数组还是对象
        if(Array.isArray(value)){
            //!!!如果是数组，要强行将数组的原型指向arrayMethods对象，里面有重写7个数组方法的api
            Object.setPrototypeOf(value,arrayMethods)
            this.observeArray(value)
        }else{
            this.walk(value)
        }   
    }
    //对象遍历实现响应式
    walk(value){
        for(let k in value){
            defineReactive(value,k)
        }
    }
    //数组的特殊遍历实现响应式
    observeArray(arr){
        for(let i = 0,l = arr.length;i<l;i++){
            //逐项进行oberve,数组里面嵌套对象的情况
            oberve(arr[i])
        }
    }
}