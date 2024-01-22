import{_ as n,k as l,l as a,C as e,f as t,z as i,m as o,B as r,j as c}from"./chunks/framework.dWv-GhMG.js";const x=JSON.parse('{"title":"服务端 API","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/console/server.md","filePath":"ru-RU/api/console/server.md"}'),d={name:"ru-RU/api/console/server.md"},h=o(`<h1 id="服务端-api" tabindex="-1">服务端 API <a class="header-anchor" href="#服务端-api" aria-label="Permalink to &quot;服务端 API&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中所涉及的 API 都在 @koishijs/plugin-console 中导出。</p></div><h2 id="类-console" tabindex="-1">类：Console <a class="header-anchor" href="#类-console" aria-label="Permalink to &quot;类：Console&quot;">​</a></h2><p><code>Console</code> 类封装了控制台服务的所有功能，你可以通过 <code>ctx.console</code> 来访问它。</p><h3 id="console-addentry" tabindex="-1">console.addEntry(entry) <a class="header-anchor" href="#console-addentry" aria-label="Permalink to &quot;console.addEntry(entry)&quot;">​</a></h3><ul><li><strong>entry:</strong> <code>Entry</code> 要添加的入口</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Entry</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  dev</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  prod</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>添加客户端入口文件。</p><h3 id="console-addlistener" tabindex="-1">console.addListener(event, callback, options) <a class="header-anchor" href="#console-addlistener" aria-label="Permalink to &quot;console.addListener(event, callback, options)&quot;">​</a></h3><ul><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>callback:</strong> <code>Function</code> 回调函数，其中 <code>this</code> 指向 <a href="#类-client"><code>Client</code></a> 对象</li></ul><p>注册一个事件监听器。</p><h3 id="console-broadcast" tabindex="-1">console.broadcast(event, body, options) <a class="header-anchor" href="#console-broadcast" aria-label="Permalink to &quot;console.broadcast(event, body, options)&quot;">​</a></h3><ul><li><strong>event:</strong> <code>string</code> 事件名称</li><li><strong>body:</strong> <code>any</code> 事件内容</li></ul><p>向所有客户端广播一个事件。</p><h2 id="类-client" tabindex="-1">类：Client <a class="header-anchor" href="#类-client" aria-label="Permalink to &quot;类：Client&quot;">​</a></h2><p><code>Client</code> 类代表一个客户端连接。</p><h3 id="client-socket" tabindex="-1">client.socket <a class="header-anchor" href="#client-socket" aria-label="Permalink to &quot;client.socket&quot;">​</a></h3><ul><li>类型: <code>WebSocket</code></li></ul><p>客户端连接的 WebSocket 对象。</p><h3 id="client-request" tabindex="-1">client.request <a class="header-anchor" href="#client-request" aria-label="Permalink to &quot;client.request&quot;">​</a></h3><ul><li>类型: <code>IncomingMessage</code></li></ul><p>客户端发出的 HTTP 请求对象。</p><h3 id="client-send" tabindex="-1">client.send(data) <a class="header-anchor" href="#client-send" aria-label="Permalink to &quot;client.send(data)&quot;">​</a></h3><ul><li><strong>data:</strong> <code>any</code> 要发送的数据</li></ul><p>向客户端发送数据。<code>data</code> 会被序列化为 JSON 字符串。</p>`,25),p={id:"类-dataservice-抽象",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#类-dataservice-抽象","aria-label":'Permalink to "类：DataService <badge>抽象</badge>"'},"​",-1),u=o('<p><code>DataService</code> 类封装了一些与客户端进行 <a href="./../../guide/console/data.html">数据通信</a> 的实用方法。</p><h3 id="new-dataservice" tabindex="-1">new DataService(ctx, key, options) <a class="header-anchor" href="#new-dataservice" aria-label="Permalink to &quot;new DataService(ctx, key, options)&quot;">​</a></h3><ul><li><strong>ctx:</strong> <code>Context</code> 上下文对象</li><li><strong>key:</strong> <code>string</code> 服务的唯一标识符</li></ul><p>构造一个数据服务。</p><h3 id="service-refresh" tabindex="-1">service.refresh() <a class="header-anchor" href="#service-refresh" aria-label="Permalink to &quot;service.refresh()&quot;">​</a></h3><p>向全体客户端重新发布该服务的数据。</p>',6),g={id:"service-get-抽象",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#service-get-抽象","aria-label":'Permalink to "service.get() <badge>抽象</badge>"'},"​",-1),b=a("p",null,"实现此方法以返回该服务的数据。",-1);function v(y,f,m,C,q,B){const s=r("badge");return c(),l("div",null,[h,a("h2",p,[e("类：DataService "),t(s,null,{default:i(()=>[e("抽象")]),_:1}),e(),k]),u,a("h3",g,[e("service.get() "),t(s,null,{default:i(()=>[e("抽象")]),_:1}),e(),_]),b])}const A=n(d,[["render",v]]);export{x as __pageData,A as default};
