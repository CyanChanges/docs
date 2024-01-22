import{_ as s,k as i,j as a,m as n}from"./chunks/framework.dWv-GhMG.js";const g=JSON.parse('{"title":"Fonctions rendues","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/message/api.md","filePath":"fr-FR/api/message/api.md"}'),t={name:"fr-FR/api/message/api.md"},h=n(`<h1 id="fonctions-rendues" tabindex="-1">Fonctions rendues <a class="header-anchor" href="#fonctions-rendues" aria-label="Permalink to &quot;Fonctions rendues&quot;">​</a></h1><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><p>一个消息元素对象的结构如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> object</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><h3 id="h" tabindex="-1">h(type, attrs?, ...children?) <a class="header-anchor" href="#h" aria-label="Permalink to &quot;h(type, attrs?, ...children?)&quot;">​</a></h3><ul><li><strong>type:</strong> <code>string | Function</code> 消息元素类型</li><li><strong>attrs:</strong> <code>object</code> 消息元素属性</li><li><strong>children:</strong> <code>Element[]</code> 子消息元素</li><li>返回值: <code>Element</code> 生成的消息元素</li></ul><p>构造一个消息元素对象。如果 <code>type</code> 是一个函数，则会视为一个自定义消息组件。</p><h3 id="h-escape" tabindex="-1">h.escape(source, inline?) <a class="header-anchor" href="#h-escape" aria-label="Permalink to &quot;h.escape(source, inline?)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string</code> 源文本</li><li><strong>inline:</strong> <code>boolean</code> 在属性内部转义 (会额外处理引号)</li><li>返回值: <code>string</code> 转义过后的文本</li></ul><p>转义一段文本到消息元素格式。</p><h3 id="h-unescape" tabindex="-1">h.unescape(source) <a class="header-anchor" href="#h-unescape" aria-label="Permalink to &quot;h.unescape(source)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string</code> 源文本</li><li>返回值: <code>string</code> 转义前的文本</li></ul><p>取消一段文本的消息元素转义。</p><h3 id="h-parse" tabindex="-1">h.parse(source, context?) <a class="header-anchor" href="#h-parse" aria-label="Permalink to &quot;h.parse(source, context?)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string</code> 源文本</li><li><strong>context:</strong> <code>object</code> 插值上下文</li><li>返回值: <code>Element[]</code> 消息元素数组</li></ul><p>解析一段文本内的全部消息元素。其中的纯文本将会解析成 <code>text</code> 类型。</p><p>当传入 <code>context</code> 对象时，将会自动识别源文本中的插值语法并进行替换。</p><h3 id="h-select" tabindex="-1">h.select(source, query) <a class="header-anchor" href="#h-select" aria-label="Permalink to &quot;h.select(source, query)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string | Element[]</code> 源文本或消息元素数组</li><li><strong>query:</strong> <code>string</code> 选择器</li><li>返回值: <code>Element[]</code> 消息元素数组</li></ul><p>使用选择器在一段文本或消息元素数组中查找。支持的语法包括：</p><ul><li>通配选择器 <code>*</code></li><li>元素选择器 <code>type</code></li><li>选择器列表 <code>sel1, sel2</code></li><li>组合器 <ul><li>后代组合器 <code>sel1 sel2</code></li><li>直接子代组合器 <code>sel1 &gt; sel2</code></li><li>一般兄弟组合器 <code>sel1 ~ sel2</code></li><li>紧邻兄弟组合器 <code>sel1 + sel2</code></li></ul></li></ul><p>如果传入了字符串，则会先使用 <a href="#h-parse"><code>h.parse()</code></a> 进行解析。</p><h3 id="h-transform" tabindex="-1">h.transform(source, rules, session?) <a class="header-anchor" href="#h-transform" aria-label="Permalink to &quot;h.transform(source, rules, session?)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string | Element[]</code> 源文本或消息元素数组</li><li><strong>rules:</strong> <code>Dict&lt;Transformer&gt;</code> 转换规则，以消息元素类型为键</li><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>返回值: <code>string | Element[]</code> 转换后的文本或消息元素数组</li></ul><p>将一段文本或消息元素数组中的所有消息元素按照规则进行转换。转换规则的定义方式如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Fragment</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Element</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Transformer</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ((</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[],</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  session</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Fragment</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>返回值会与传入的参数保持相同类型。如果传入了字符串，则会先使用 <a href="#h-parse"><code>h.parse()</code></a> 进行解析，并在转换完成后重新序列化。</p><h3 id="h-transformasync" tabindex="-1">h.transformAsync(source, rules, session?) <a class="header-anchor" href="#h-transformasync" aria-label="Permalink to &quot;h.transformAsync(source, rules, session?)&quot;">​</a></h3><ul><li><strong>source:</strong> <code>string | Element[]</code> 源文本或消息元素数组</li><li><strong>rules:</strong> <code>Dict&lt;AsyncTransformer&gt;</code> 转换规则，以消息元素类型为键</li><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>返回值: <code>Promise&lt;string | Element[]&gt;</code> 转换后的文本或消息元素数组</li></ul><p>与 <a href="#h-transform"><code>h.transform()</code></a> 类似，但转换规则可以是异步的，同一层级的各元素的转换将同时进行。转换规则的定义方式如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> AsyncTransformer</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ((</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[],</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  session</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Session</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Awaitable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Fragment</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;)</span></span></code></pre></div><h2 id="快捷调用" tabindex="-1">快捷调用 <a class="header-anchor" href="#快捷调用" aria-label="Permalink to &quot;快捷调用&quot;">​</a></h2><p>我们也为一些常见的标准元素提供了语法糖，可以直接通过一些静态方法进行调用。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// content</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">at</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sharp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">quote</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">audio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// buffer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;image/png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">audio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;audio/mpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">video</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;video/mp4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;application/octet-stream&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div>`,35),l=[h];function e(k,p,r,d,o,B){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};
