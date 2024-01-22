import{_ as l,k as n,f as e,z as a,m as h,l as s,C as i,B as o,j as r,aP as p,aQ as k,aR as d}from"./chunks/framework.dWv-GhMG.js";const z=JSON.parse('{"title":"环境搭建","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/guide/develop/setup.md","filePath":"ru-RU/guide/develop/setup.md"}'),c={name:"ru-RU/guide/develop/setup.md"},g=h("",16),y=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")])])])],-1),u=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"### 注册 npm")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"如果你打算发布插件，你还需要注册一个"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," 账号。这一步非常简单，只需前往这里的"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," [注册页面]("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"https://www.npmjs.com/signup"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},")。填写你的用户名、邮箱和密码，勾选同意协议，点击注册即可。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"注册完成后，你就可以在命令行中使用"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," `"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," login`"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}}," 来登录你的账号：")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"```"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sh")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," login "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"--registry=https://registry.npmjs.org")])])])],-1),m=s("h2",{id:"版本控制",tabindex:"-1"},[i("版本控制 "),s("a",{class:"header-anchor",href:"#版本控制","aria-label":'Permalink to "版本控制"'},"​")],-1),_=s("p",null,"我们强烈推荐使用版本控制系统 (VCS) 来管理你的代码。这一方面允许你在任何时候回退到之前的版本，另一方面也能让你与其他开发者协作。",-1),F=s("h3",{id:"安装-git",tabindex:"-1"},[i("安装 Git "),s("a",{class:"header-anchor",href:"#安装-git","aria-label":'Permalink to "安装 Git"'},"​")],-1),C=s("p",null,[i("Git 是最普遍使用的版本控制工具。前往 "),s("a",{href:"https://git-scm.com/downloads",target:"_blank",rel:"noreferrer"},"官网"),i("，点击右上角的青色按钮下载安装包。")],-1),b=s("p",null,[s("img",{src:d,alt:"downloads"})],-1),v=s("p",null,[i("国内的 Windows 用户也可以选择从 "),s("a",{href:"https://registry.npmmirror.com/binary.html?path=git-for-windows/",target:"_blank",rel:"noreferrer"},"镜像"),i(" 下载。如果不知道下载哪个版本，可以在上面的官网中看到 (比如图中就是 2.39.1)。")],-1),f=s("p",null,"获取到安装包后，双击运行。安装过程无需手动配置，一直点击下一步即可完成安装。",-1),A=s("p",null,[i("安装完成后，可以在命令行中输入 "),s("code",null,"git --version"),i(" 来查看版本号，以确认安装成功：")],-1),E=s("div",{class:"language-sh vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"git"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --version"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"           # git version 2.39.1")])])])],-1),x=s("p",null,"最后你还需要设置你的姓名和邮箱。它们将会默认作为你创建的插件的作者，也会出现在你的提交记录中：",-1),P=s("div",{class:"language-sh vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --global"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," user.name"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},' "Your Name"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," –-global"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," user.email"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},' "you@example.com"')])])])],-1),w=s("h3",{id:"注册-github",tabindex:"-1"},[i("注册 GitHub "),s("a",{class:"header-anchor",href:"#注册-github","aria-label":'Permalink to "注册 GitHub"'},"​")],-1),j=s("p",null,[i("通常来说我还会建议你注册一个 GitHub 账号。"),s("a",{href:"https://github.com",target:"_blank",rel:"noreferrer"},"GitHub"),i(" 是一个代码托管平台，我们可以在上面创建仓库来存放我们的代码。由于篇幅有限，请在互联网搜索相关的教程，自行完成注册。如果发现无法注册，也不用担心，你仍然可以在本地进行开发。")],-1),D=s("h2",{id:"安装-koishi",tabindex:"-1"},[i("安装 Koishi "),s("a",{class:"header-anchor",href:"#安装-koishi","aria-label":'Permalink to "安装 Koishi"'},"​")],-1),N=s("p",null,"打开命令行，并进入你想要创建 Koishi 项目的目录。",-1),T=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"这个目录不宜过长，且路径中请避免出现中文或者空格。我们推荐的目录如下："),s("ul",null,[s("li",null,[i("Windows："),s("code",null,"C:\\dev"),i(" 或者 "),s("code",null,"D:\\dev"),i(" (也不要直接在盘根创建项目，最好是建一层目录)")]),s("li",null,[i("其他操作系统："),s("code",null,"~/dev")])])],-1),S=s("p",null,"输入下面的命令以创建 Koishi 项目：",-1),q=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," init"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi@latest")])])])],-1),B=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," create"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi")])])])],-1),G=s("p",null,"跟随提示即可完成全套初始化流程。",-1),K=s("p",null,[i("如果你顺利完成了上述操作，你的应用此时应该已经是启动状态，并弹出了控制台界面。接下来的几节中我们将学习更多的命令行用法，因此我们可以先关闭 Koishi。在命令行中按下 "),s("code",null,"Ctrl+C"),i(" 组合键即可停止 Koishi 的运行。")],-1);function V(R,H,I,$,L,U){const t=o("tab-select");return r(),n("div",null,[g,e(t,{class:"code"},{"tab-npm":a(()=>[y]),"tab-yarn":a(()=>[u]),default:a(()=>[m,_,F,C,b,v,f,A,E,x,P,w,j,D,N,T]),_:1}),S,e(t,{class:"code"},{"tab-npm":a(()=>[q]),"tab-yarn":a(()=>[B]),_:1}),G,K])}const J=l(c,[["render",V]]);export{z as __pageData,J as default};
