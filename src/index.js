console.log("入口文件index")
import Scan from './Scan.js'
window.my_mustache = {
    rend(templataStr,data){
        console.log('需要转换的字符串模板',templataStr)
        console.log('需要插入的对象',data)
        let scan = new Scan()
        console.log("实例化",scan)
    }
}
let templataStr = `<h1>我买了一个{{thing}},好{{mood}}呀</h1>`
let data = {}
window.my_mustache.rend(templataStr,data)