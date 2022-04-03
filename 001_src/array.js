/*
    vue改写7个改变原数组的方法
        ==>Array.prototype
        ==>以Array.prototype为原型通过Object.setPrototypeOf创建了一个arrayMthods对象，使得这个这个对象的__proto__指向了Array.prototype
        ==>步骤
            + 1创建一个以Array.prototype为原型的对象
*/
import { def } from './utils'

const arrayPrototype = Array.prototype
export const arrayMethods = Object.create(arrayPrototype) //提供容器放改写的方法并暴露
//要被改写的方法
const methodsNeedChange = [
    'push', //都是插入
    'pop',
    'shift',
    'unshift', //都是插入
    'sort',
    'splice',  //插入的情况
    'reverse']
methodsNeedChange.forEach(methodName => {
    //备份方法
    const original = arrayPrototype[methodName]
    //定义新的方法
    def(arrayMethods, methodName, function () {
        //恢复原有的功能....不能直接调用，this指向问题(谁调用函数this就指向谁)
        const result = original.apply(this, arguments)

        //把类数组变成数组
        const args = [...arguments]
        console.log('啦啦啦可以去更新模板',
        arguments)

        //把这个数组身上的__ob__取出来，__ob__已经被添加了，为什么已经添加了？因为数组肯定不是最高层，比如obj.g属性是数组，obj不能是数组了，第一次遍历obj这个对象的第一层的时候，已经给g属性添加了__ob__
        const ob = this.__ob__;
        //有三种方法可以插入新项push/unshift/splice,现在要把插入的新项变成oberve的
        let inserted = []

        switch (methodName) {
            case 'push':
                inserted = arguments
                break;
            case 'unshift':
                break;
            case 'splice':
                //splice格式是splice(下标，数量，插入的新项)
                inserted = args.slice(2)
                break;
        }
        //判断有没有要插入的新项
        if (inserted) {
            ob.observeArray(inserted)
        }

        ob.dep.notify()
        return result  //数组的方法是有返回值的
    }, false)
})



