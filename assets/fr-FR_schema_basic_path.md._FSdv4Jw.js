import{_ as s,k as i,j as a,m as t}from"./chunks/framework.dWv-GhMG.js";const g=JSON.parse(`{"title":"Path : Chemin","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\npath1: Schema.string().description('假装右边是一个文件选择器。'),\\npath2: Schema.string().description('假装右边是一个文件选择器。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/basic/path.md","filePath":"fr-FR/schema/basic/path.md"}`),h={name:"fr-FR/schema/basic/path.md"},e=t(`<h1 id="path-chemin" tabindex="-1">Path : Chemin <a class="header-anchor" href="#path-chemin" aria-label="Permalink to &quot;Path : Chemin&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此类型基于 @koishijs/plugin-explorer，仅在加载该插件时可用。未加载该插件时，类型只会表现为普通的字符串 (比如现在就是这样)。</p></div><p><code>Schema.path()</code> 描述了一个路径。如果是相对路径，则会基于 <code>ctx.baseDir</code> 进行解析。该配置项会显示成一个能够打开文件选择器的按钮。</p><p>支持传入一些额外的选项：</p><ul><li><code>allowCreate</code>：是否允许创建目录和上传文件</li><li><code>extensions</code>：可选的文件的扩展名列表，扩展名全需要以 <code>.</code> 开头；特别地其中如果包含 <code>directory</code> 则表示可以选择文件夹</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  path1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  path2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    extensions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;directory&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,6),n=[e];function p(l,k,c,d,r,o){return a(),i("div",null,n)}const y=s(h,[["render",p]]);export{g as __pageData,y as default};
