import{_ as l,k as h,f as e,z as i,m as n,l as s,C as t,B as p,j as o,aP as r,aQ as d,aR as c}from"./chunks/framework.dWv-GhMG.js";const w=JSON.parse('{"title":"环境搭建","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/develop/setup.md","filePath":"zh-CN/guide/develop/setup.md"}'),k={name:"zh-CN/guide/develop/setup.md"},g=n('<h1 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h1><p>本节将介绍推荐的开发环境搭建流程。如果某些软件已经安装完成，可以跳过对应的步骤。</p><h2 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js&quot;">​</a></h2><p>Koishi 需要 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> (最低 v18，推荐使用 LTS) 运行环境，你需要自己安装它。</p><h3 id="下载安装包" tabindex="-1">下载安装包 <a class="header-anchor" href="#下载安装包" aria-label="Permalink to &quot;下载安装包&quot;">​</a></h3><p>首先我们前往 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 的官方网站：</p><p class="dark-only"><img src="'+r+'" alt="home"></p><p class="light-only"><img src="'+d+`" alt="home"></p><p>在这里可以看到两个巨大的按钮，分别对应着 <strong>LTS (长期维护版)</strong> 和 <strong>Current (最新版本)</strong>。我们建议你选择更加稳定的 LTS 版本，点击按钮即可下载安装包。</p><p>随后，运行下载好的安装包，根据提示完成整个安装流程即可。</p><h3 id="安装包管理器" tabindex="-1">安装包管理器 <a class="header-anchor" href="#安装包管理器" aria-label="Permalink to &quot;安装包管理器&quot;">​</a></h3><p>Node.js 自带名为 <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a> 的包管理器，你可以直接使用它。我们同时也推荐功能更强大的 <a href="https://classic.yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> 作为包管理器。它的安装非常简单，只需打开命令行输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 安装 yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yarn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -v</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>部分 Windows 用户可能会发现以下错误 (<a href="https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies" target="_blank" rel="noreferrer">参考链接</a>)：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>yarn：无法加载文件 yarn.ps1，因为在此系统上禁止运行脚本。</span></span></code></pre></div><p>此时请以管理员身份重新运行终端，并输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> RemoteSigned</span></span></code></pre></div><p>之后就可以正常使用 yarn 了。</p></div><h3 id="配置镜像源" tabindex="-1">配置镜像源 <a class="header-anchor" href="#配置镜像源" aria-label="Permalink to &quot;配置镜像源&quot;">​</a></h3><p>如果你是国内用户，从 npm 或 yarn 上下载依赖可能非常慢。因此，我们推荐你配置一下镜像源，以提升安装速度。</p>`,16),u=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")])])])],-1),m=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")])])])],-1),y=n('<h3 id="注册-npm" tabindex="-1">注册 npm <a class="header-anchor" href="#注册-npm" aria-label="Permalink to &quot;注册 npm&quot;">​</a></h3><p>如果你打算发布插件，你还需要注册一个 npm 账号。这一步非常简单，只需前往这里的 <a href="https://www.npmjs.com/signup" target="_blank" rel="noreferrer">注册页面</a>。填写你的用户名、邮箱和密码，勾选同意协议，点击注册即可。</p><p>注册完成后，你就可以在命令行中使用 <code>npm login</code> 来登录你的账号：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> login</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --registry=https://registry.npmjs.org</span></span></code></pre></div><h2 id="版本控制" tabindex="-1">版本控制 <a class="header-anchor" href="#版本控制" aria-label="Permalink to &quot;版本控制&quot;">​</a></h2><p>我们强烈推荐使用版本控制系统 (VCS) 来管理你的代码。这一方面允许你在任何时候回退到之前的版本，另一方面也能让你与其他开发者协作。</p><h3 id="安装-git" tabindex="-1">安装 Git <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 Git&quot;">​</a></h3><p>Git 是最普遍使用的版本控制工具。前往 <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">官网</a>，点击右上角的青色按钮下载安装包。</p><p><img src="'+c+`" alt="downloads"></p><p>国内的 Windows 用户也可以选择从 <a href="https://registry.npmmirror.com/binary.html?path=git-for-windows/" target="_blank" rel="noreferrer">镜像</a> 下载。如果不知道下载哪个版本，可以在上面的官网中看到 (比如图中就是 2.39.1)。</p><p>获取到安装包后，双击运行。安装过程无需手动配置，一直点击下一步即可完成安装。</p><p>安装完成后，可以在命令行中输入 <code>git --version</code> 来查看版本号，以确认安装成功：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --version</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">           # git version 2.39.1</span></span></code></pre></div><p>最后你还需要设置你的姓名和邮箱。它们将会默认作为你创建的插件的作者，也会出现在你的提交记录中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Your Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> –-global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;you@example.com&quot;</span></span></code></pre></div><h3 id="注册-github" tabindex="-1">注册 GitHub <a class="header-anchor" href="#注册-github" aria-label="Permalink to &quot;注册 GitHub&quot;">​</a></h3><p>通常来说我还会建议你注册一个 GitHub 账号。<a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a> 是一个代码托管平台，我们可以在上面创建仓库来存放我们的代码。由于篇幅有限，请在互联网搜索相关的教程，自行完成注册。如果发现无法注册，也不用担心，你仍然可以在本地进行开发。</p><h2 id="安装-koishi" tabindex="-1">安装 Koishi <a class="header-anchor" href="#安装-koishi" aria-label="Permalink to &quot;安装 Koishi&quot;">​</a></h2><p>打开命令行，并进入你想要创建 Koishi 项目的目录。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个目录不宜过长，且路径中请避免出现中文或者空格。我们推荐的目录如下：</p><ul><li>Windows：<code>C:\\dev</code> 或者 <code>D:\\dev</code> (也不要直接在盘根创建项目，最好是建一层目录)</li><li>其他操作系统：<code>~/dev</code></li></ul></div><p>输入下面的命令以创建 Koishi 项目：</p>`,21),C=s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," init"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi@latest")])])])],-1),b=s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," create"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi")])])])],-1),_=s("p",null,"跟随提示即可完成全套初始化流程。",-1),v=s("p",null,[t("如果你顺利完成了上述操作，你的应用此时应该已经是启动状态，并弹出了控制台界面。接下来的几节中我们将学习更多的命令行用法，因此我们可以先关闭 Koishi。在命令行中按下 "),s("code",null,"Ctrl+C"),t(" 组合键即可停止 Koishi 的运行。")],-1);function F(f,A,q,x,P,E){const a=p("tab-select");return o(),h("div",null,[g,e(a,{class:"code"},{"tab-npm":i(()=>[u]),"tab-yarn":i(()=>[m]),_:1}),y,e(a,{class:"code"},{"tab-npm":i(()=>[C]),"tab-yarn":i(()=>[b]),_:1}),_,v])}const N=l(k,[["render",F]]);export{w as __pageData,N as default};
