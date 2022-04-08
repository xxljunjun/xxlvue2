console.log("入口文件index")
import mustache from './mustache.js'
console.log("mustache对象",mustache)
let templateStr = `
<ul>
    {{#arr}}
    <li>
        <div class="hd">{{name}}的基本信息</div>
        <div class="bd">
            <p>姓名：{{name}}</p>
            <p>年龄：{{age}}</p>
            <p>性别：{{sex}}</p>

        </div>
    </li>
    {{/arr}}
</ul>
`
mustache.render(templateStr,{})