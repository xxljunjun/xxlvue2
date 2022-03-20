export function def(obj,key,value,enumerable){
    Object.defineProperty(obj,key,{
        value,
        writable:true,  //是否可更改
        enumerable, //是否可被枚举
        configurable:true,  //可以被配置
    })
}