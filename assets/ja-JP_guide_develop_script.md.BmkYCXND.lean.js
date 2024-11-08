import{_ as p,k as l,m as e,f as n,y as a,A as h,j as o,l as s}from"./chunks/framework.Cum5LaDG.js";const B=JSON.parse('{"title":"スクリプトを実行する","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/develop/script.md","filePath":"ja-JP/guide/develop/script.md"}'),k={name:"ja-JP/guide/develop/script.md"};function d(r,i,c,g,y,u){const t=h("tab-select");return o(),l("div",null,[i[4]||(i[4]=e(`<h1 id="スクリプトを実行する" tabindex="-1">スクリプトを実行する <a class="header-anchor" href="#スクリプトを実行する" aria-label="Permalink to &quot;スクリプトを実行する&quot;">​</a></h1><p>Koishi 提供了一套命令行工具，用于读取配置文件快速启动应用。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中介绍的命令行都需要在 <a href="./config.html#应用目录">应用目录</a> 下运行。</p></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>我们通常使用 <strong>启动脚本</strong> 来启动 Koishi 应用。打开应用目录下的 <code>package.json</code> 文件：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;cross-env NODE_ENV=development koishi start -r esbuild-register -r yml-register&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;koishi start&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>在应用目录运行下面的命令行以启动 Koishi 应用：</p>`,7)),n(t,{class:"code"},{"tab-npm":a(()=>i[0]||(i[0]=[s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," start")])])])],-1)])),"tab-yarn":a(()=>i[1]||(i[1]=[s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," start")])])])],-1)])),_:1}),i[5]||(i[5]=e('<p>在本节的后续部分，我们会介绍上述启动脚本的更多参数。无论你做何改动，你都可以使用上面的命令行来快速启动。这也是启动脚本的意义所在。</p><h3 id="启动参数" tabindex="-1">启动参数 <a class="header-anchor" href="#启动参数" aria-label="Permalink to &quot;启动参数&quot;">​</a></h3><p>启动脚本支持 Node.js 的 <a href="https://nodejs.org/api/cli.html" target="_blank" rel="noreferrer">命令行参数</a>。例如，上面的 <code>-r</code> 对应于 <code>--require</code>，它将允许你加载 <code>.ts</code> 和 <code>.yml</code> 后缀的文件。</p><p>除了 Node.js 的命令行参数，Koishi 还提供了一些额外的参数。我们将在下面逐一介绍。</p><h3 id="自动重启" tabindex="-1">自动重启 <a class="header-anchor" href="#自动重启" aria-label="Permalink to &quot;自动重启&quot;">​</a></h3><p>Koishi 的命令行工具支持自动重启。当运行 Koishi 的进程崩溃时，如果 Koishi 已经启动成功，则监视进程将自动重新启动一个新的进程。</p><h2 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-label="Permalink to &quot;开发模式&quot;">​</a></h2><p>除了 <code>start</code> 以外，模板项目还准备了名为 <code>dev</code> 的开发模式启动脚本。在应用目录运行下面的命令行可以以开发模式启动应用：</p>',8)),n(t,{class:"code"},{"tab-npm":a(()=>i[2]||(i[2]=[s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dev")])])])],-1)])),"tab-yarn":a(()=>i[3]||(i[3]=[s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," dev")])])])],-1)])),_:1}),i[6]||(i[6]=e(`<p>如你所见，<code>dev</code> 相当于在 <code>start</code> 指令的基础上添加了额外的参数和环境变量。这些参数为我们启用了额外的特性，而环境变量则能影响插件的部分行为。</p><h3 id="typescript-支持" tabindex="-1">TypeScript 支持 <a class="header-anchor" href="#typescript-支持" aria-label="Permalink to &quot;TypeScript 支持&quot;">​</a></h3><p>Koishi 模板项目原生地支持 TypeScript 开发。上述 <code>-r esbuild-register</code> 参数允许我们在运行时直接使用工作区插件的 TypeScript 源代码。</p><p>你也可以自行扩展更多的后缀名支持。例如，如果你更喜欢 CoffeeScript，你可以这样修改你的开发脚本为：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;koishi start -r coffeescript/register&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;coffeescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;^2.7.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>这样你就可以使用 CoffeeScript 编写你的插件源代码 (当然你还得自行处理构建逻辑)，甚至连配置文件都可以使用 <code>koishi.coffee</code> 书写了。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>我们并不推荐使用高级语言来编写配置文件，因为动态的配置无法支持环境变量、配置热重载和插件市场等特性。大部分情况下我们建议仅将 <code>-r</code> 用于开发目的。</p></div><h3 id="模块热替换" tabindex="-1">模块热替换 <a class="header-anchor" href="#模块热替换" aria-label="Permalink to &quot;模块热替换&quot;">​</a></h3><p>如果你开发着一个巨大的 Koishi 项目，可能光是加载一遍全部插件就需要好几秒了。在这种时候，像前端框架一样支持模块热替换就成了一个很棒的主意。幸运的是，Koishi 也做到了这一点！内置插件 @koishijs/plugin-hmr 实现了插件级别的热替换。每当你修改你的本地文件时，Koishi 就会尝试重载你的插件，并在命令行中提醒你。</p><p>这里的行为也可以在配置文件中进行定制：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">koishi.yml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  group:develop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    $if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">env.NODE_ENV === &#39;development&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hmr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      root</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 要忽略的文件列表，支持 glob patterns</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      ignore</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">some-file</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于部分 Linux 系统有着 8192 个文件的监听数量限制，你可能会发现运行 <code>yarn dev</code> 后出现了如下的报错：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>NOSPC: System limit for number of file watchers reached</span></span></code></pre></div><p>此时你可以使用下面的命令来增加监听数量限制：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> fs.inotify.max_user_watches=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">524288</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/sysctl.conf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span></span></code></pre></div><p>另一种方案是只监听部分子路径，例如将 <code>root</code> 改为 <code>external/foo</code> (其中 <code>foo</code> 是你正在开发的插件目录，参见下一节的工作区指南)，这将忽略其他目录下的变化，并依然对你的插件进行热重载。当你同时开发多个插件时，你也可以将 <code>root</code> 改成一个数组来使用。</p></div>`,12))])}const m=p(k,[["render",d]]);export{B as __pageData,m as default};
