
import parseTemplateToTokens from './parseTemplateToTokens.js' 
window.SSG_TemplateEngine = {
    //调用渲染方法
    rend(templataStr,data){
        //让模板字符串变成tokens数组
        var tokens = parseTemplateToTokens(templataStr)
        console.log("转换了tokens",tokens)
    }
}
