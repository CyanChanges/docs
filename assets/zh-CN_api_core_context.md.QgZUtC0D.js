import{_ as i,k as r,l as t,C as e,f as c,z as o,m as a,B as s,j as n}from"./chunks/framework.dWv-GhMG.js";const P=JSON.parse('{"title":"上下文 (Context)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/core/context.md","filePath":"zh-CN/api/core/context.md"}'),h={name:"zh-CN/api/core/context.md"},d=a('<h1 id="上下文" tabindex="-1">上下文 (Context) <a class="header-anchor" href="#上下文" aria-label="Permalink to &quot;上下文 (Context)&quot;">​</a></h1><p><strong>上下文 (Context)</strong> 是 Koishi 的核心概念。Koishi 的绝大多数功能也直接通过上下文提供，包括插件、中间件、监听器和指令等。</p><h2 id="服务与混入" tabindex="-1">服务与混入 <a class="header-anchor" href="#服务与混入" aria-label="Permalink to &quot;服务与混入&quot;">​</a></h2><p>Koishi 使用了组合 (Compose) 的开发方式，绝大部分上下文属性和方法都通过混入的方式搭载在了服务上。以下的属性和方法是由内置服务提供的，你可以像使用实例属性和方法一样使用它们。这些 API 的具体用法在服务文档中详细介绍，你可以点击对应的链接前往查看。</p><ul><li><a href="./../service/filter.html#ctx-any">ctx.any</a></li><li><a href="./../service/events.html#ctx-bail">ctx.bail</a></li><li><a href="./../service/events.html#ctx-before">ctx.before</a></li><li><a href="./../service/timer.html#ctx-debounce">ctx.debounce</a></li><li><a href="./../service/events.html#ctx-emit">ctx.emit</a></li><li><a href="./../service/events.html">ctx.events</a></li><li><a href="./../service/filter.html#ctx-exclude">ctx.exclude</a></li><li><a href="./../service/filter.html#ctx-filter">ctx.filter</a></li><li><a href="./../service/http.html">ctx.http</a></li><li><a href="./../service/i18n.html">ctx.i18n</a></li><li><a href="./../service/registry.html#ctx-inject">ctx.inject</a></li><li><a href="./../service/filter.html#ctx-intersect">ctx.intersect</a></li><li><a href="./../service/loader.html">ctx.loader</a></li><li><a href="./../service/events.html#ctx-middleware">ctx.middleware</a></li><li><a href="./../database/model.html">ctx.model</a></li><li><a href="./../service/filter.html#ctx-never">ctx.never</a></li><li><a href="./../service/events.html#ctx-off">ctx.off</a></li><li><a href="./../service/events.html#ctx-on">ctx.on</a></li><li><a href="./../service/events.html#ctx-once">ctx.once</a></li><li><a href="./../service/events.html#ctx-parallel">ctx.parallel</a></li><li><a href="./../service/permissions.html">ctx.permissions</a></li><li><a href="./../service/registry.html#ctx-plugin">ctx.plugin</a></li><li><a href="./../service/registry.html">ctx.registry</a></li><li><a href="./../service/registry.html#ctx-scope">ctx.scope</a></li><li><a href="./../service/events.html#ctx-serial">ctx.serial</a></li><li><a href="./../service/timer.html#ctx-setinterval">ctx.setInterval</a></li><li><a href="./../service/timer.html#ctx-settimeout">ctx.setTimeout</a></li><li><a href="./../service/timer.html#ctx-sleep">ctx.sleep</a></li><li><a href="./../service/registry.html#ctx-start">ctx.start</a></li><li><a href="./../service/registry.html#ctx-stop">ctx.stop</a></li><li><a href="./../service/timer.html#ctx-throttle">ctx.throttle</a></li><li><a href="./../service/timer.html">ctx.timer</a></li><li><a href="./../service/filter.html#ctx-union">ctx.union</a></li></ul><p>除此以外，以下服务由官方插件提供，因此使用时需要 <a href="./../../guide/plugin/service.html#inject">声明依赖</a>：</p><ul><li><a href="./../console/server.html">ctx.console</a></li><li><a href="./../database/database.html">ctx.database</a></li><li><a href="./../../plugins/develop/mock.html">ctx.mock</a></li><li><a href="./../../plugins/develop/server.html">ctx.server</a></li></ul><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><h3 id="ctx-root-config" tabindex="-1">ctx.root.config <a class="header-anchor" href="#ctx-root-config" aria-label="Permalink to &quot;ctx.root.config&quot;">​</a></h3><ul><li>类型: <a href="./app.html"><code>Context.Config</code></a></li></ul><p>当前的 Koishi 全局配置，相当于配置文件中的配置经过默认值处理后的结果。</p><h3 id="ctx-basedir" tabindex="-1">ctx.baseDir <a class="header-anchor" href="#ctx-basedir" aria-label="Permalink to &quot;ctx.baseDir&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>当前的 Koishi 默认路径。如果你使用配置文件，则这个路径是配置文件所在的路径；否则这个路径是当前工作路径。</p><h3 id="ctx-bots" tabindex="-1">ctx.bots <a class="header-anchor" href="#ctx-bots" aria-label="Permalink to &quot;ctx.bots&quot;">​</a></h3><ul><li>类型: <code>Bot[]</code></li></ul><p>当前应用的全部机器人实例。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-extend" tabindex="-1">ctx.extend(meta) <a class="header-anchor" href="#ctx-extend" aria-label="Permalink to &quot;ctx.extend(meta)&quot;">​</a></h3><ul><li><strong>meta:</strong> <code>Partial&lt;Context.Meta&gt;</code> 要覆盖的属性</li><li>返回值: <code>this</code> 新的上下文</li></ul><p>以当前上下文为原型创建一个新上下文。<code>meta</code> 中的属性将覆盖当前上下文的属性。</p><h3 id="ctx-command" tabindex="-1">ctx.command(def, desc?, config?) <a class="header-anchor" href="#ctx-command" aria-label="Permalink to &quot;ctx.command(def, desc?, config?)&quot;">​</a></h3><ul><li><strong>def:</strong> <code>string</code> 指令名以及可能的参数</li><li><strong>desc:</strong> <code>string</code> 指令的描述</li><li><strong>config:</strong> <code>CommandConfig</code> 指令的配置 <ul><li><strong>checkUnknown:</strong> <code>boolean</code> 是否对未知选项进行检测，默认为 <code>false</code></li><li><strong>checkArgCount:</strong> <code>boolean</code> 是否对参数个数进行检测，默认为 <code>false</code></li><li><strong>authority:</strong> <code>number</code> 最低调用权限，默认为 <code>1</code></li><li><strong>showWarning:</strong> <code>boolean</code> 当小于最短间隔时是否进行提醒，默认为 <code>true</code></li></ul></li><li>返回值：<a href="./command.html"><code>Command</code></a> 注册或修改的指令</li></ul><p>在当前上下文中注册或修改一个指令。</p>',24),x={id:"ctx-broadcast-需要数据库",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#ctx-broadcast-需要数据库","aria-label":'Permalink to "ctx.broadcast(channels?, content, forced?) <badge>需要数据库</badge>"'},"​",-1),f=a('<ul><li><strong>channels:</strong> <code>string[]</code> 频道列表，格式为 <code>{platform}:{channelId}</code> (如 <code>discord:1234567890</code>)</li><li><strong>content:</strong> <code>string</code> 要发送的内容</li><li><strong>forced:</strong> <code>boolean</code> 是否无视 silent 标记</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 成功发送的消息 ID 列表</li></ul><p>所有机器人向自己分配的频道广播消息，存在标记 silent 的频道除外。如有失败不会抛出错误。</p><h3 id="ctx-logger" tabindex="-1">ctx.logger(scope?) <a class="header-anchor" href="#ctx-logger" aria-label="Permalink to &quot;ctx.logger(scope?)&quot;">​</a></h3><ul><li><strong>scope:</strong> <code>string</code> 要指定的类型，默认为 <code>&#39;&#39;</code></li><li>返回值: <a href="./../utils/logger.html"><code>Logger</code></a></li></ul><p>根据命名空间生成一个 <a href="./../utils/logger.html">Logger</a> 对象。</p><h2 id="静态属性和方法" tabindex="-1">静态属性和方法 <a class="header-anchor" href="#静态属性和方法" aria-label="Permalink to &quot;静态属性和方法&quot;">​</a></h2><h3 id="context-filter" tabindex="-1">Context.filter <a class="header-anchor" href="#context-filter" aria-label="Permalink to &quot;Context.filter&quot;">​</a></h3><ul><li>类型: <code>symbol</code></li></ul><h3 id="context-current" tabindex="-1">Context.current <a class="header-anchor" href="#context-current" aria-label="Permalink to &quot;Context.current&quot;">​</a></h3><ul><li>类型: <code>symbol</code></li></ul><p>特殊的键值，可以在通用上下文属性对象的方法上访问。参见 <a href="./../../guide/plugin/service.html#声明通用上下文属性">声明通用上下文属性</a>。</p>',11);function u(g,p,b,v,_,q){const l=s("badge");return n(),r("div",null,[d,t("h3",x,[e("ctx.broadcast(channels?, content, forced?) "),c(l,null,{default:o(()=>[e("需要数据库")]),_:1}),e(),m]),f])}const k=i(h,[["render",u]]);export{P as __pageData,k as default};
