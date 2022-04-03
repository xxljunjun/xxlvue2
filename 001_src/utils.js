/**
 * @function 通过defineProperty方法往对象上添加属性
 * @params obj 需要添加属性的对象
 * @params key 属性
 * @params value 属性值
 * @params enumerable 是否可被枚举
*/
export function def(obj,key,value,enumerable){
    Object.defineProperty(obj,key,{
        value,
        writable:true,  //是否可更改
        enumerable, //是否可被枚举
        configurable:true,  //可以被配置
    })
}