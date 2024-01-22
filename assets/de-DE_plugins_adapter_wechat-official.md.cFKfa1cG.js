import{_ as e,k as a,j as i,m as o}from"./chunks/framework.dWv-GhMG.js";const g=JSON.parse('{"title":"@koishijs/plugin-adapter-wechat-official","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/plugins/adapter/wechat-official.md","filePath":"de-DE/plugins/adapter/wechat-official.md"}'),c={name:"de-DE/plugins/adapter/wechat-official.md"},t=o('<h1 id="koishijs-plugin-adapter-wechat-official" tabindex="-1">@koishijs/plugin-adapter-wechat-official <a class="header-anchor" href="#koishijs-plugin-adapter-wechat-official" aria-label="Permalink to &quot;@koishijs/plugin-adapter-wechat-official&quot;">​</a></h1><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>根据 <a href="https://kf.qq.com/product/weixinmp.html#hid=87" target="_blank" rel="noreferrer">注册流程指引</a> 注册公众平台。</li><li>在微信公众平台登录后，页面左侧展开「设置与开发」，进入「公众号设置」，翻至页面底部，复制 <code>原始 ID</code> 填入插件的 account 字段。</li><li>页面左侧进入「基本配置」，复制 <code>开发者ID</code> 填入插件的 appId 字段，在网页上获取开发者密码填入插件的 secret 字段，设置白名单 IP。</li><li>页面下方启用服务器配置，将机器人的 <code>selfUrl</code> 值后连接 <code>/wechat-official</code> (如 <code>https://example.com/wechat-official</code>)，在 URL 一栏中填写；在插件配置和公众平台上填入相同的 Token；在公众平台上生成 EncodingAESKey 并填入插件的 aesKey 字段；三种消息加解密方式均可选择。</li><li>如果公众号为企业主体，且通过了微信认证，可在插件配置中启用 customerService。客服接口提供了更宽松的消息回复能力。</li></ol><p>参考文档：<a href="https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html</a></p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="config-account" tabindex="-1">config.account <a class="header-anchor" href="#config-account" aria-label="Permalink to &quot;config.account&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>公众号原始 ID。</p><h3 id="config-appid" tabindex="-1">config.appId <a class="header-anchor" href="#config-appid" aria-label="Permalink to &quot;config.appId&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>AppID。</p><h3 id="config-secret" tabindex="-1">config.secret <a class="header-anchor" href="#config-secret" aria-label="Permalink to &quot;config.secret&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>AppSecret。</p><h3 id="config-token" tabindex="-1">config.token <a class="header-anchor" href="#config-token" aria-label="Permalink to &quot;config.token&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>Webhook Token。</p><h3 id="config-aeskey" tabindex="-1">config.aesKey <a class="header-anchor" href="#config-aeskey" aria-label="Permalink to &quot;config.aesKey&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>EncodingAESKey。</p><h3 id="config-customerservice" tabindex="-1">config.customerService <a class="header-anchor" href="#config-customerservice" aria-label="Permalink to &quot;config.customerService&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li></ul><p>启用客服消息回复。</p>',23),r=[t];function l(n,s,d,h,f,p){return i(),a("div",null,r)}const m=e(c,[["render",l]]);export{g as __pageData,m as default};
