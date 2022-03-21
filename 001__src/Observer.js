/*
    Obseerver类的功能是将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
*/
import {def} from './utils.js'
import {arrayMethods} from './array.js'
import defineReactive from './defineReactive.js'
import oberve from './observe.js'
import Dep  from './Dep.js'
export default class Observer{
    constructor(value){
        //每个observer的实例上都有一个dep
        this.dep = new Dep()
        // console.log("class类身上的this",this)
        // console.log("我是Oberver构造器",value)
        //往实例原型上添加__ob__
        def(value,'__ob__',this,false) 

        //判断是数组还是对象
        if(Array.isArray(value)){
            //如果是数组，要强行将数组的原型指向arrayMethods
            Object.setPrototypeOf(value,arrayMethods)
            this.observeArray(value)
        }else{
            this.walk(value)
        }   
    }
    //遍历
    walk(value){
        for(let k in value){
            defineReactive(value,k)
        }
    }
    //数组的特殊遍历
    observeArray(arr){
        // console.log("数组需要实现响应式",arr)
        for(let i = 0,l = arr.length;i<l;i++){
            //逐项进行oberve
            oberve(arr[i])
        }
    }
}