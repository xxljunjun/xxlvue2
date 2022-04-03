var uid = 0
import Dep from './Dep.js'
export default class Watcher{
    constructor(target,expression,callback){
        console.log("我是Watcher的构造器")
        this.id = uid++
        this.target = target
        this.getter = parsePath(expression) //a.b.c.d拆分点
        this.callback = callback
        this.value = this.get()
    }
    update(){
        console.log("执行了run方法")
        this.run()
    }
    get(){
        // console.log(this)
        //进入依赖收集阶段。让全局的Dep.target设置为Watcher本身，那么就是进入依赖收集阶段
        Dep.target = this;
        // console.log('get',this)
        const obj = this.target

        var value;
        //只要能找就一直找
        try{
            value = this.getter(obj)
        }finally{
           Dep.target = null
        }

        return value
       
    }
    run(){
        this.getAndInvoke(this.callback)
    }
    getAndInvoke(cb){
        const value = this.get()

        if(value !== this.value || typeof value =='object'){
            const oldValue = this.value
            this.value = value
            cb.call(this.target,value,oldValue)
        }
    }
}

function parsePath(str){ 
    var segments = str.split('.')
    return (obj)=>{
        for(let i =0;i<segments.length;i++){
            if(!obj) return;
            obj = obj[segments[i]]
        }
        return obj
    }
}