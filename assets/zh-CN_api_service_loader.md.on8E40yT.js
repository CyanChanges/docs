import{_ as l,k as r,l as a,C as e,f as t,z as d,m as c,B as i,j as n}from"./chunks/framework.dWv-GhMG.js";const y=JSON.parse('{"title":"加载器 (Loader) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/service/loader.md","filePath":"zh-CN/api/service/loader.md"}'),s={name:"zh-CN/api/service/loader.md"},h={id:"加载器-实验性",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#加载器-实验性","aria-label":'Permalink to "加载器 (Loader) <badge type="warning">实验性</badge>"'},"​",-1),u=c('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个实验性 API，未来可能会发生变化。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>此服务仅在 CLI (启动器 / 模板项目) 环境下可用，<a href="./../../manual/starter/direct.html">作为依赖调用</a> 的 Koishi 将不具备此服务。</p></div><p>Loader 服务可用于管理 Koishi 实例加载的插件。通常情况下你不需要手动调用此服务，除非你在开发 <a href="./../../plugins/console/config.html">config</a> 或者 <a href="./../../plugins/develop/hmr.html">HMR</a> 这样的底层插件。</p><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><h3 id="ctx-loader-envdata" tabindex="-1">ctx.loader.envData <a class="header-anchor" href="#ctx-loader-envdata" aria-label="Permalink to &quot;ctx.loader.envData&quot;">​</a></h3><ul><li>类型: <code>object</code></li></ul><p>一个特殊的对象，可以在环境变量中存储少量数据。可以配合 <code>ctx.loader.fullReload()</code> 方法使用，以便在重启后恢复数据。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你的插件需要持久化大量数据，请使用本地文件或者数据库。</p></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-loader-keyfor" tabindex="-1">ctx.loader.keyFor(plugin) <a class="header-anchor" href="#ctx-loader-keyfor" aria-label="Permalink to &quot;ctx.loader.keyFor(plugin)&quot;">​</a></h3><ul><li><strong>plugin:</strong> <code>any</code> 插件导出</li><li>返回值: <code>string</code></li></ul><p>获取插件的短名称。</p><h3 id="ctx-loader-replace" tabindex="-1">ctx.loader.replace(plugin1, plugin2) <a class="header-anchor" href="#ctx-loader-replace" aria-label="Permalink to &quot;ctx.loader.replace(plugin1, plugin2)&quot;">​</a></h3><ul><li><strong>plugin1:</strong> <code>any</code> 插件导出</li><li><strong>plugin2:</strong> <code>any</code> 插件导出</li></ul><p>替换插件导出。</p><h3 id="ctx-loader-resolve" tabindex="-1">ctx.loader.resolve(name) <a class="header-anchor" href="#ctx-loader-resolve" aria-label="Permalink to &quot;ctx.loader.resolve(name)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 插件的短名称</li></ul><p>从短名称获取插件。</p><h3 id="ctx-loader-reload" tabindex="-1">ctx.loader.reload(parent, key, config) <a class="header-anchor" href="#ctx-loader-reload" aria-label="Permalink to &quot;ctx.loader.reload(parent, key, config)&quot;">​</a></h3><ul><li><strong>parent:</strong> <code>Context</code> 父级上下文</li><li><strong>key:</strong> <code>string</code> 插件的短名称</li><li><strong>config:</strong> <code>object</code> 插件配置</li><li>返回值: <code>Promise&lt;ForkScope&gt;</code></li></ul><p>启用一个插件。这里的 <code>key</code> 对应于 <a href="./../../guide/develop/config.html">配置文件</a> 中的键名。</p><p>如果 <code>key</code> 已经存在于父级上下文中，则会重载该插件实例；如果 <code>key</code> 不存在于父级上下文中，则会创建一个新的插件实例。</p><h3 id="ctx-loader-unload" tabindex="-1">ctx.loader.unload(parent, key) <a class="header-anchor" href="#ctx-loader-unload" aria-label="Permalink to &quot;ctx.loader.unload(parent, key)&quot;">​</a></h3><ul><li><strong>parent:</strong> <code>Context</code> 父级上下文</li><li><strong>key:</strong> <code>string</code> 插件的短名称</li></ul><p>停用一个插件。这里的 <code>key</code> 对应于 <a href="./../../guide/develop/config.html">配置文件</a> 中的键名。</p><h3 id="ctx-loader-fullreload" tabindex="-1">ctx.loader.fullReload() <a class="header-anchor" href="#ctx-loader-fullreload" aria-label="Permalink to &quot;ctx.loader.fullReload()&quot;">​</a></h3><p>重启被守护的 Koishi 进程。</p>',27);function g(x,f,m,k,b,_){const o=i("badge");return n(),r("div",null,[a("h1",h,[e("加载器 (Loader) "),t(o,{type:"warning"},{default:d(()=>[e("实验性")]),_:1}),e(),p]),u])}const q=l(s,[["render",g]]);export{y as __pageData,q as default};
