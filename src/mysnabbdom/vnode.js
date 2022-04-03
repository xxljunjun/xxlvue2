/**
 * @function 用于输出虚拟dom对象对象
 * @params sel html标签
 * @params data 对象放一些属性，例如id
 * @params children 子节点
 * @params text 文本
 * @params elm html结构
*/
export default function(sel,data,children,text,elm){
    return {
         sel, data, children, text, elm 
    }
}