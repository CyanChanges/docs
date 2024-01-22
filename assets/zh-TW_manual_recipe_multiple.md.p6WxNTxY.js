import{_ as a,k as e,j as t,m as i}from"./chunks/framework.dWv-GhMG.js";const u=JSON.parse('{"title":"维护多份配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/manual/recipe/multiple.md","filePath":"zh-TW/manual/recipe/multiple.md"}'),l={name:"zh-TW/manual/recipe/multiple.md"},r=i('<h1 id="维护多份配置" tabindex="-1">维护多份配置 <a class="header-anchor" href="#维护多份配置" aria-label="Permalink to &quot;维护多份配置&quot;">​</a></h1><p>有很多情况下你会想要维护同一个插件的多份配置：</p><ul><li>你希望同时运行多个插件实例</li><li>你希望在合适的时机切换另一份插件配置</li><li>你希望在不同的群中使用不同的插件配置</li></ul><p>不同的需求往往有不同的解决方案，因此我无法给你统一的答案。但好在对于上面的三种情况 Koishi 都已经提供了支持，你只需要根据自己的需求选择合适的方案即可。</p><h2 id="单实例" tabindex="-1">单实例 <a class="header-anchor" href="#单实例" aria-label="Permalink to &quot;单实例&quot;">​</a></h2><p>在同一个 Koishi 应用中，有些插件可以同时启用多份，有些则不能——这并非插件的实现缺陷，而是预期的行为。事实上，插件的作者可以指定具体哪些功能可以被独立地启用。这表现在插件上就是两种不同的类型：那些可以同时启用多份的插件被称为可重用插件，反之则称为不可重用插件。</p><p>典型的可重用插件是 <a href="./../usage/adapter.html">适配器插件</a>。每个适配器对应着一个正在运行的机器人，不同平台的机器人由不同的适配器进行配置。因此，如果你想在同一个平台中配置多个机器人，直接按照上一节中的方法添加多个适配器插件即可。</p><p>与此同时，绝大多数插件都是不可重用的。对于这类插件，你只能同时拥有一份运行中的配置。如果已经有一份正在运行的配置，那么你会在其他配置处看到一行提示「此插件正在运行且不可重用」。当然，你仍然可以准备多份配置，并在合适的时机将一份配置停用，并启用另一份。</p><p>对于那些不可重用的插件，如果希望在不同的场景下切换到不同的配置，就需要插件作者提供带有 <a href="./../usage/customize.html#过滤器">过滤器</a> 的配置项。如果你想要修改的配置不支持过滤器，那么你可以考虑向插件作者提出建议，或采用下面介绍的 <a href="#多实例">多实例</a> 方案。</p><h2 id="多实例" tabindex="-1">多实例 <a class="header-anchor" href="#多实例" aria-label="Permalink to &quot;多实例&quot;">​</a></h2><p>另一种方案是同时运行多个 Koishi 应用。这样做的好处是，你可以在不同的应用中使用完全不同的插件配置，甚至启用完全不同的插件组合。但与之相对的，你需要额外维护多个应用，而且每个应用都需要一个独立的端口。</p>',11),o=[r];function p(s,h,n,c,_,d){return t(),e("div",null,o)}const f=a(l,[["render",p]]);export{u as __pageData,f as default};
