/*
    扫描器类
*/
export default class Scanner {
    constructor(templataStr){
        console.log("我是scanner",templataStr)
        //指针
        this.pos = 0
        this.tail=templataStr //尾巴
        this.templataStr = templataStr
    }
    //功能弱，就是走过指定的内容，没有返回值
    scan(tag){
       if(this.tail.indexOf(tag) ==0){
           //tag有多长，就让指针后移多少位
            this.pos+=tag.length
            //尾巴也要变，改变尾巴从当前指针这个字符开始，到最后的全部字符
            this.tail = this.templataStr.substr(this.pos)
       }
    }
    //让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
    scanUtil(stopTag){
        //记录一下执行方法时的pos的值
        const pos_backup = this.pos
        //当尾巴的开头并不是stopTag的时候，就说明还没有扫描到stopTag
        //写&&防止死循环
        while(this.tail.indexOf(stopTag) !=0 && !this.eos()){
            this.pos++
            this.tail = this.templataStr.substr(this.pos)
        }
        
        return this.templataStr.substring(pos_backup,this.pos)
    }
    //指针是否已经到头，返回布尔值
    eos(){
        return this.pos>=this.templataStr.length
    }
}