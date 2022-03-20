var uid = 0
export default class Dep{
    constructor(){
        // console.log("我是Dep的构造器")
        this.id = uid++
        //用数组存储自己的订阅者。sub是英语subscribes订阅者的意思
        //这个数组放的是watcher的实例
        this.subs =[]
    }
    //添加订阅
    addSub(sub){ 
        this.subs.push(sub)
        // console.log('push之后',this.subs)
    }
    //添加依赖
    depend(){
        //只要是全局唯一（不要紧张）
        if(Dep.target){
            // console.log('depend方法',Dep.target)
            this.addSub(Dep.target)
        }
    }
    //通知更新
    notify(){
        // console.log("我是notify")
        //浅克隆一份
        const subs = this.subs.slice()
        // console.log("通知了更新",subs)
        //遍历
        for(let i = 0,l=subs.length;i<l;i++){
            subs[i].update()
        }
    }
}