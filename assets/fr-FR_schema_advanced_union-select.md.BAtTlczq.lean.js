import{_ as i,k as a,m as n,j as h}from"./chunks/framework.Cum5LaDG.js";const B=JSON.parse(`{"title":"Union : boutons radio","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nvalue1: Schema.union(['foo', 'bar', 'qux']).description('从三个值中选择一个。'),\\nvalue2: Schema.union([\\nSchema.const('foo').description('选项 1'),\\nSchema.const('bar').description('选项 2'),\\nSchema.const('baz').description('选项 3'),\\n]).role('radio').description('从三个值中选择一个。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/advanced/union-select.md","filePath":"fr-FR/schema/advanced/union-select.md"}`),t={name:"fr-FR/schema/advanced/union-select.md"};function k(e,s,l,p,r,d){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="union-boutons-radio" tabindex="-1">Union : boutons radio <a class="header-anchor" href="#union-boutons-radio" aria-label="Permalink to &quot;Union : boutons radio&quot;">​</a></h1><p>Union 描述了多个子类型的联合。它的最基础形式是从多个固定值中选择一个。这里的每一个字符串是 <code>Schema.const()</code> 的简写形式。如果每个可选值有较长的描述文本，你可以进一步将 <code>role</code> 设置为 <code>radio</code>，这样一来所有的选项将显示在下方而不是右侧。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  value1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">union</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;qux&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  value2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">union</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;选项 1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;选项 2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;baz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;选项 3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;radio&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre></div>`,3)]))}const c=i(t,[["render",k]]);export{B as __pageData,c as default};
