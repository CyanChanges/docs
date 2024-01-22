import{_ as n,k as o,l as a,C as e,f as s,z as i,m as l,B as r,j as d}from"./chunks/framework.dWv-GhMG.js";const I=JSON.parse('{"title":"Adapter","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/core/adapter.md","filePath":"en-US/api/core/adapter.md"}'),c={name:"en-US/api/core/adapter.md"},p=l("",3),h=l("",7),_={id:"adapter-connect-抽象",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#adapter-connect-抽象","aria-label":'Permalink to "adapter.connect(bot) <badge>抽象</badge>"'},"​",-1),b=a("ul",null,[a("li",null,[a("strong",null,"bot:"),e(),a("code",null,"Bot"),e(" 机器人实例")]),a("li",null,[e("返回值: "),a("code",null,"Promise<void>")])],-1),u=a("p",null,[e("连接 Bot 所需的操作，将在 "),a("code",null,"bot.start()"),e(" 中被调用。")],-1),g={id:"adapter-disconnect-抽象",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#adapter-disconnect-抽象","aria-label":'Permalink to "adapter.disconnect(bot) <badge>抽象</badge>"'},"​",-1),m=l("",14),A={id:"client-prepare-抽象",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#client-prepare-抽象","aria-label":'Permalink to "client.prepare() <badge>抽象</badge>"'},"​",-1),f=a("ul",null,[a("li",null,[e("返回值: "),a("code",null,"WebSocket | Promise<WebSocket>")])],-1),P=a("p",null,"根据机器人实例生成一个 WebSocket 对象。",-1),y={id:"client-accept-抽象",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#client-accept-抽象","aria-label":'Permalink to "client.accept() <badge>抽象</badge>"'},"​",-1),D=a("p",null,[e("WebSocket 连接成功建立后的回调函数。你需要实现这个方法，并在其中手动调用 "),a("code",null,"bot.resolve()"),e(" 回调函数表示已经连接成功。")],-1);function S(T,q,E,v,w,W){const t=r("badge");return d(),o("div",null,[p,a("p",null,[e("标有 "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(" 的方法需要由适配器插件自行实现。")]),h,a("h3",_,[e("adapter.connect(bot) "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),k]),b,u,a("h3",g,[e("adapter.disconnect(bot) "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),C]),m,a("h3",A,[e("client.prepare() "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),B]),f,P,a("h3",y,[e("client.accept() "),s(t,null,{default:i(()=>[e("抽象")]),_:1}),e(),x]),D])}const N=n(c,[["render",S]]);export{I as __pageData,N as default};
