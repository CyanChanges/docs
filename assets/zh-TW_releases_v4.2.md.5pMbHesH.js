import{_ as i,k as a,j as s,m as e}from"./chunks/framework.dWv-GhMG.js";const u=JSON.parse('{"title":"v4.2 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/releases/v4.2.md","filePath":"zh-TW/releases/v4.2.md"}'),t={name:"zh-TW/releases/v4.2.md"},l=e(`<h1 id="v4-2-版本介绍" tabindex="-1">v4.2 版本介绍 <a class="header-anchor" href="#v4-2-版本介绍" aria-label="Permalink to &quot;v4.2 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/482" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.1.1" target="_blank" rel="noreferrer">v4.1.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.1.2" target="_blank" rel="noreferrer">v4.1.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.2.0" target="_blank" rel="noreferrer">v4.2.0</a></li></ul><h2 id="指令系统优化" tabindex="-1">指令系统优化 <a class="header-anchor" href="#指令系统优化" aria-label="Permalink to &quot;指令系统优化&quot;">​</a></h2><h3 id="git-风格的指令调用" tabindex="-1">Git 风格的指令调用 <a class="header-anchor" href="#git-风格的指令调用" aria-label="Permalink to &quot;Git 风格的指令调用&quot;">​</a></h3><p>Koishi 将子指令分为两类：<strong>层级式</strong> 和 <strong>派生式</strong>。前者从形式上将指令组织起来方便查看和管理，而后者则从行为上限制了指定的调用方式。说白了层级式子指令 <code>foo/bar</code> 仍然可以使用 <code>bar</code> 进行调用，而派生式子指令 <code>foo.bar</code> 则必须完整写全整个指令路径。</p><p>从这个版本起我们内置支持了 Git 风格的指令调用，即当父指令 <code>foo</code> 没有实现时，<code>foo bar</code> 将自动视为 <code>foo.bar</code> 的调用，其参数和选项也会被保留。</p><h3 id="koishijs-plugin-forward" tabindex="-1">@koishijs/plugin-forward <a class="header-anchor" href="#koishijs-plugin-forward" aria-label="Permalink to &quot;@koishijs/plugin-forward&quot;">​</a></h3><p>作为官方的第一个实例，最新版本的 @koishijs/plugin-forward 提供了在运行时通过指令查看、添加、删除转发规则的功能：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">forward</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // 添加目标频道</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">forward</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> list</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                    // 查看全部目标频道</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> clear</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                       // 移除全部目标频道</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rm</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                     // 移除特定目标频道</span></span></code></pre></div><p>无论是父指令还是子指令，我们都支持使用别名书写。在上面的例子里，<code>fwd rm</code> 与 <code>forward remove</code> 的效果是完全一致的。</p><h2 id="控制台优化" tabindex="-1">控制台优化 <a class="header-anchor" href="#控制台优化" aria-label="Permalink to &quot;控制台优化&quot;">​</a></h2><p>我们引入了全新的客户端 API，以实现控制台插件在客户端的可插拔性。这些改动也让我们得以提供全面的控制台体验。</p><h3 id="更多的控制台插件" tabindex="-1">更多的控制台插件 <a class="header-anchor" href="#更多的控制台插件" aria-label="Permalink to &quot;更多的控制台插件&quot;">​</a></h3><p>在这个版本中我们优化了控制台系统，并将部分功能单独发布为新的插件。它们包括：</p><ul><li><a href="https://github.com/koishijs/koishi-plugin-dataview" target="_blank" rel="noreferrer">@koishijs/plugin-dataview</a> (来自 status 插件)</li><li><a href="./../plugins/console/insight.html">@koishijs/plugin-insight</a> (来自 manager 插件)</li><li><a href="./../plugins/console/logger.html">@koishijs/plugin-logger</a> (来自 status 插件)</li></ul><h3 id="koishijs-plugin-manager" tabindex="-1">@koishijs/plugin-manager <a class="header-anchor" href="#koishijs-plugin-manager" aria-label="Permalink to &quot;@koishijs/plugin-manager&quot;">​</a></h3><p>@koishijs/plugin-manager 作为新人可能接触到的第一个插件，我们也大幅优化了它的能力，包括：</p><ul><li>优化了暗色主题的配色方案</li><li>表单支持了更多类型的 Schemastery 类型，基本完成了对常见表单类型的覆盖</li><li>重构了插件市场的界面，使用卡片进行展示，并辅以搜索和标签功能</li><li>新增了依赖管理界面，允许批量安装 / 更新 / 删除依赖</li><li>新增了机器人配置页面，支持了登录 / 下线 / 移除等操作</li></ul>`,18),r=[l];function h(o,n,k,p,d,c){return s(),a("div",null,r)}const f=i(t,[["render",h]]);export{u as __pageData,f as default};
