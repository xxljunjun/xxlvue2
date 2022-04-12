import Scanner from './Scanner.js'
/*
    将模板字符串变成tokens数组
*/
export default function parseTemplateToTokens(templataStr){
    console.log('parseTemplateToTokens',templataStr)
    //创建扫描器
    var scanner = new Scanner(templataStr)
    var tokens = []
    var words
    //让扫描器工作
    while(!scanner.eos()){
        //收集开始标记之前的文字
        words = scanner.scanUtil("{{")
        if(words != ''){
            tokens.push(['text',words])
        }
       
        scanner.scan("{{")

        words = scanner.scanUtil("}}")
        if(words != ''){
            tokens.push(['name',words])
        }
        
        scanner.scan("}}")
    }
    console.log(tokens)
    return tokens
}   