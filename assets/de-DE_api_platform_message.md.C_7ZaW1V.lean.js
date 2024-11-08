import{_ as o,k as d,m as i,l as e,B as a,f as n,y as l,A as r,j as g}from"./chunks/framework.Cum5LaDG.js";const y=JSON.parse('{"title":"消息 (Message)","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/platform/message.md","filePath":"de-DE/api/platform/message.md"}'),h={name:"de-DE/api/platform/message.md"},c={id:"bot-getmessageiter",tabindex:"-1"},p={id:"bot-broadcast",tabindex:"-1"};function k(b,s,m,u,I,B){const t=r("badge");return g(),d("div",null,[s[8]||(s[8]=i(`<h1 id="消息" tabindex="-1">消息 (Message) <a class="header-anchor" href="#消息" aria-label="Permalink to &quot;消息 (Message)&quot;">​</a></h1><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  isDirect</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  channelId</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  messageId</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  userId</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  content</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  timestamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-sendmessage" tabindex="-1">bot.sendMessage(channelId, content, guildId?) <a class="header-anchor" href="#bot-sendmessage" aria-label="Permalink to &quot;bot.sendMessage(channelId, content, guildId?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li><strong>guildId:</strong> <code>string</code> 群组 ID</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 发送的消息 ID</li></ul><p>向特定频道发送消息。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>只要你能够获取到会话对象，你就不应使用此 API，而应该使用 <code>session.send()</code>。一些平台会将主动发送的消息同被动接收后回复的消息区分开来，甚至可能限制主动消息的发送，因此使用 <code>session.send()</code> 总是有更好的可靠性。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>bot.sendMessage()</code> 既可以发送群聊消息，也可以发送私聊消息。当发送私聊消息时，其与 <code>bot.sendPrivateMessage()</code> 的区别在于前者传入的是频道 ID，而后者传入的是用户 ID。</p></div><h3 id="bot-sendprivatemessage" tabindex="-1">bot.sendPrivateMessage(userId, content) <a class="header-anchor" href="#bot-sendprivatemessage" aria-label="Permalink to &quot;bot.sendPrivateMessage(userId, content)&quot;">​</a></h3><ul><li><strong>userId:</strong> <code>string</code> 对方 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li>返回值: <code>Promise&lt;string[]&gt;</code> 发送的消息 ID</li></ul><p>向特定用户发送私聊消息。</p><h3 id="bot-getmessage" tabindex="-1">bot.getMessage(channelId, messageId) <a class="header-anchor" href="#bot-getmessage" aria-label="Permalink to &quot;bot.getMessage(channelId, messageId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li>返回值: <code>Promise&lt;Message&gt;</code></li></ul><p>获取特定消息。</p><h3 id="bot-deletemessage" tabindex="-1">bot.deleteMessage(channelId, messageId) <a class="header-anchor" href="#bot-deletemessage" aria-label="Permalink to &quot;bot.deleteMessage(channelId, messageId)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>撤回特定消息。</p><h3 id="bot-editmessage" tabindex="-1">bot.editMessage(channelId, messageId, content) <a class="header-anchor" href="#bot-editmessage" aria-label="Permalink to &quot;bot.editMessage(channelId, messageId, content)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>content:</strong> <code>Fragment</code> 要发送的内容</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>修改特定消息。</p><h3 id="bot-getmessagelist" tabindex="-1">bot.getMessageList(channelId, next?) <a class="header-anchor" href="#bot-getmessagelist" aria-label="Permalink to &quot;bot.getMessageList(channelId, next?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;Message&gt;&gt;</code> 消息列表</li></ul><p>获取频道消息列表。</p>`,24)),e("h3",c,[s[1]||(s[1]=a("bot.getMessageIter(channelId) ")),n(t,null,{default:l(()=>s[0]||(s[0]=[a("内置")])),_:1}),s[2]||(s[2]=a()),s[3]||(s[3]=e("a",{class:"header-anchor",href:"#bot-getmessageiter","aria-label":'Permalink to "bot.getMessageIter(channelId) <badge>内置</badge>"'},"​",-1))]),s[9]||(s[9]=e("ul",null,[e("li",null,[e("strong",null,"channelId:"),a(),e("code",null,"string"),a(" 频道 ID")]),e("li",null,[a("返回值: "),e("code",null,"AsyncIterable<Message>"),a(" 异步迭代器")])],-1)),s[10]||(s[10]=e("p",null,"获取频道消息的异步迭代器。",-1)),e("h3",p,[s[5]||(s[5]=a("bot.broadcast(channels, content, delay?) ")),n(t,null,{default:l(()=>s[4]||(s[4]=[a("内置")])),_:1}),s[6]||(s[6]=a()),s[7]||(s[7]=e("a",{class:"header-anchor",href:"#bot-broadcast","aria-label":'Permalink to "bot.broadcast(channels, content, delay?) <badge>内置</badge>"'},"​",-1))]),s[11]||(s[11]=i('<ul><li><strong>channels:</strong> <code>string[]</code> 频道列表</li><li><strong>content:</strong> <code>string</code> 要发送的内容</li><li><strong>delay:</strong> <code>number</code> 发送消息间的延迟，默认值为 <a href="./../core/app.html#options-delay"><code>config.delay.broadcast</code></a></li><li>返回值: <code>Promise&lt;string[]&gt;</code> 成功发送的消息 ID 列表</li></ul><p>向多个频道广播消息。如有失败不会抛出错误。</p>',2))])}const C=o(h,[["render",k]]);export{y as __pageData,C as default};
