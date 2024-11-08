import{_ as a,k as r,m as t,j as s}from"./chunks/framework.Cum5LaDG.js";const m=JSON.parse('{"title":"Release Notes: v4.9","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/releases/v4.9.md","filePath":"en-US/releases/v4.9.md"}'),i={name:"en-US/releases/v4.9.md"};function l(o,e,h,n,k,g){return s(),r("div",null,e[0]||(e[0]=[t('<h1 id="release-notes-v4-9" tabindex="-1">Release Notes: v4.9 <a class="header-anchor" href="#release-notes-v4-9" aria-label="Permalink to &quot;Release Notes: v4.9&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/790" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.0" target="_blank" rel="noreferrer">v4.9.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.1" target="_blank" rel="noreferrer">v4.9.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.2" target="_blank" rel="noreferrer">v4.9.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.3" target="_blank" rel="noreferrer">v4.9.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.4" target="_blank" rel="noreferrer">v4.9.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.5" target="_blank" rel="noreferrer">v4.9.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.6" target="_blank" rel="noreferrer">v4.9.6</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.9.7" target="_blank" rel="noreferrer">v4.9.7</a></li></ul><h2 id="message-element" tabindex="-1">Message Element <a class="header-anchor" href="#message-element" aria-label="Permalink to &quot;Message Element&quot;">​</a></h2><p>在这个版本中，我们引入了消息元素，作为 Satori 的新的消息格式。消息元素是拥有类似 XML 的结构，由标签、属性和内容组成。与过去所使用的 CQ 码相比，消息元素有以下优势：</p><ul><li>更加通用，不与任何特定平台耦合，编码规范也与主流实践相符</li><li>可以表达多层的结构，从而适配了 Matrix 等支持富文本的平台</li><li>具有更强的扩展性，未来还可以支持模板渲染等高级特性</li></ul><h2 id="细粒度的热重载" tabindex="-1">细粒度的热重载 <a class="header-anchor" href="#细粒度的热重载" aria-label="Permalink to &quot;细粒度的热重载&quot;">​</a></h2><p>我们还引入了更细粒度的热重载功能：当你在运行时通过配置文件或控制台，修改某个插件或全局的部分配置时，会根据这个配置的具体功能决定是否需要重载插件或整个应用。开发者可以声明自己插件的具体哪些配置项应该触发重载，以及不触发重载的配置项被修改时的回调函数。基于这个特性，我们也大幅优化了 @koishijs/loader 的加载逻辑，使得插件组本身也成为了真正的插件。</p><h2 id="用户登录优化" tabindex="-1">用户登录优化 <a class="header-anchor" href="#用户登录优化" aria-label="Permalink to &quot;用户登录优化&quot;">​</a></h2><p>这个版本也同样迎来了 auth 插件的一些更新：</p><ul><li>优化了个人信息界面，支持了跨平台用户绑定功能</li><li>支持自动创建初始管理员用户，一定程度上避免了盲目启用插件而导致无法登录的问题</li></ul>',10)]))}const u=a(i,[["render",l]]);export{m as __pageData,u as default};
