import{_ as n,k as t,l as i,C as s,f as e,z as l,m as r,B as h,j as o}from"./chunks/framework.dWv-GhMG.js";const b=JSON.parse('{"title":"交互 (Interaction) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/resources/interaction.md","filePath":"ru-RU/api/resources/interaction.md"}'),p={name:"ru-RU/api/resources/interaction.md"},c={id:"交互-实验性",tabindex:"-1"},k=i("a",{class:"header-anchor",href:"#交互-实验性","aria-label":'Permalink to "交互 (Interaction) <badge type="warning">实验性</badge>"'},"​",-1),d=r(`<h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Argv</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  arguments</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="interaction-button" tabindex="-1">interaction/button <a class="header-anchor" href="#interaction-button" aria-label="Permalink to &quot;interaction/button&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>类型为 <code>action</code> 的按钮被点击时触发。</p><h3 id="interaction-command" tabindex="-1">interaction/command <a class="header-anchor" href="#interaction-command" aria-label="Permalink to &quot;interaction/command&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 会话对象</li><li>触发方式: emit</li></ul><p>调用斜线指令时触发。</p>`,9);function g(B,u,_,m,C,y){const a=h("badge");return o(),t("div",null,[i("h1",c,[s("交互 (Interaction) "),e(a,{type:"warning"},{default:l(()=>[s("实验性")]),_:1}),s(),k]),d])}const A=n(p,[["render",g]]);export{b as __pageData,A as default};
