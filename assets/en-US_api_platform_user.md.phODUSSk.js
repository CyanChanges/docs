import{_ as i,k as l,l as s,C as e,f as r,z as n,m as a,B as o,j as d}from"./chunks/framework.dWv-GhMG.js";const A=JSON.parse('{"title":"用户 (User)","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/platform/user.md","filePath":"en-US/api/platform/user.md"}'),h={name:"en-US/api/platform/user.md"},p=a(`<h1 id="用户" tabindex="-1">用户 (User) <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户 (User)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>消歧义：本节介绍跨平台协议中的用户对象。</p><ul><li>要了解数据库中的用户，请前往 <a href="./../database/built-in.html#user">API &gt; 数据库 &gt; 内置数据结构</a></li><li>要了解两者的区别，请前往 <a href="./../glossary.html#用户">API &gt; 术语表</a></li></ul></div><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  avatar</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-getself" tabindex="-1">bot.getSelf() <a class="header-anchor" href="#bot-getself" aria-label="Permalink to &quot;bot.getSelf()&quot;">​</a></h3><ul><li>返回值: <code>Promise&lt;User&gt;</code> 用户信息</li></ul><p>获取机器人自己的信息。</p><h3 id="bot-getuser" tabindex="-1">bot.getUser(userId) <a class="header-anchor" href="#bot-getuser" aria-label="Permalink to &quot;bot.getUser(userId)&quot;">​</a></h3><ul><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;User&gt;</code> 用户信息</li></ul><p>获取用户信息。</p><h3 id="bot-getfriendlist" tabindex="-1">bot.getFriendList(next?) <a class="header-anchor" href="#bot-getfriendlist" aria-label="Permalink to &quot;bot.getFriendList(next?)&quot;">​</a></h3><ul><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;User&gt;&gt;</code> 好友列表</li></ul><p>获取机器人的好友列表。</p>`,14),c={id:"bot-getfrienditer-内置",tabindex:"-1"},g=s("a",{class:"header-anchor",href:"#bot-getfrienditer-内置","aria-label":'Permalink to "bot.getFriendIter() <badge>内置</badge>"'},"​",-1),k=a('<ul><li>返回值: <code>AsyncIterable&lt;User&gt;</code> 异步迭代器</li></ul><p>获取机器人的好友列表的异步迭代器。</p><h3 id="bot-handlefriendrequest" tabindex="-1">bot.handleFriendRequest(messageId, approve, comment?) <a class="header-anchor" href="#bot-handlefriendrequest" aria-label="Permalink to &quot;bot.handleFriendRequest(messageId, approve, comment?)&quot;">​</a></h3><ul><li><strong>messageId:</strong> <code>string</code> 请求 ID</li><li><strong>approve:</strong> <code>boolean</code> 是否通过请求</li><li><strong>comment:</strong> <code>string</code> 备注信息</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>处理好友请求。</p>',5);function u(b,_,m,f,C,B){const t=o("badge");return d(),l("div",null,[p,s("h3",c,[e("bot.getFriendIter() "),r(t,null,{default:n(()=>[e("内置")]),_:1}),e(),g]),k])}const I=i(h,[["render",u]]);export{A as __pageData,I as default};
