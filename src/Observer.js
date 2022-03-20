/*
    Obseerver类的功能是将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
*/
import {def} from './utils.js'
import defineReactive from './defineReactive.js'
export default class Observer{
    constructor(value){
        console.log("class类身上的this",this)
        console.log("我是Oberver构造器",value)
        def(value,'__ob__',this,false)
        this.walk(value)
    }
    //遍历
    walk(value){
        for(let k in value){
            defineReactive(value,k)
        }
    }
}