import Observer from './Observer.js'
//创建observe入口函数
export default function observe(value){
    if(typeof value != 'object') return;
    var ob;
    if(typeof value.__ob__ != 'undefined'){
        //如果传入对象的原型上的__ob__上有值
        ob = value.__ob__
    }else{
        //初次传入的value经过Observer类把数据转化成响应式数据
        ob = new Observer(value)
    }
    return ob
}