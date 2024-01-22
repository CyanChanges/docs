import{_ as e,k as a,j as r,m as i}from"./chunks/framework.dWv-GhMG.js";const _=JSON.parse('{"title":"v4.12 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/about/releases/v4.12.md","filePath":"de-DE/about/releases/v4.12.md"}'),t={name:"de-DE/about/releases/v4.12.md"},l=i('<h1 id="v4-12-版本介绍" tabindex="-1">v4.12 版本介绍 <a class="header-anchor" href="#v4-12-版本介绍" aria-label="Permalink to &quot;v4.12 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/1000" target="_blank" rel="noreferrer">Roadmap</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.0" target="_blank" rel="noreferrer">v4.12.0</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.1" target="_blank" rel="noreferrer">v4.12.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.2" target="_blank" rel="noreferrer">v4.12.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.3" target="_blank" rel="noreferrer">v4.12.3</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.4" target="_blank" rel="noreferrer">v4.12.4</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.5" target="_blank" rel="noreferrer">v4.12.5</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.6" target="_blank" rel="noreferrer">v4.12.6</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.7" target="_blank" rel="noreferrer">v4.12.7</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.8" target="_blank" rel="noreferrer">v4.12.8</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.12.9" target="_blank" rel="noreferrer">v4.12.9</a></li></ul><h2 id="用户绑定" tabindex="-1">用户绑定 <a class="header-anchor" href="#用户绑定" aria-label="Permalink to &quot;用户绑定&quot;">​</a></h2><p>在这个版本中，我们引入了新的内置数据表 <code>binding</code>，用于存储账号绑定信息。在新的架构下，我们更新了 <code>auth</code> 和 <code>bind</code> 插件，支持了同平台的用户绑定和解绑等功能。</p><p>为了能让旧版本的用户平滑升级，我们还引入了数据库迁移技术，支持插件在升级时将已有的数据迁移到新的表中。</p><h2 id="资源管理器" tabindex="-1">资源管理器 <a class="header-anchor" href="#资源管理器" aria-label="Permalink to &quot;资源管理器&quot;">​</a></h2><p>新增了官方插件 @koishijs/plugin-explorer，可用于在控制台中查看和编辑实例目录内的文件。该插件除了能够方便云端部署的用户进行文件管理外，还为路径类型的配置项提供了便捷的选择界面。至此，Koishi 的控制台生态已经趋于完善。</p><h2 id="配置界面优化" tabindex="-1">配置界面优化 <a class="header-anchor" href="#配置界面优化" aria-label="Permalink to &quot;配置界面优化&quot;">​</a></h2><p>v4.12 版本期间，我们对配置 UI 库 schemastery-vue 进行了全面的重构：</p><ul><li>提供了更好的扩展性</li><li>修复了一些边界情况下的已知问题，同时提高了性能</li><li>对于 <code>array</code> 和 <code>dict</code> 等类型支持了折叠</li><li>支持了配置项国际化</li></ul><h2 id="适配器更新" tabindex="-1">适配器更新 <a class="header-anchor" href="#适配器更新" aria-label="Permalink to &quot;适配器更新&quot;">​</a></h2><ul><li>优化了多个适配器的消息元素支持，包括 Telegram, KOOK 等</li><li>将 Feishu 适配器更名为 Lark，并同时支持了飞书的国内与国际版本</li><li>新增了 Mail 适配器，允许用户通过邮件与机器人交互</li></ul><h2 id="热重载优化" tabindex="-1">热重载优化 <a class="header-anchor" href="#热重载优化" aria-label="Permalink to &quot;热重载优化&quot;">​</a></h2><p>将热重载相关逻辑从 CLI 内置迁移到了独立的插件 @koishijs/plugin-hmr 中，并提供了更多的配置项与功能。例如，如果当前保存的文件存在编译错误，将会显示色彩丰富的提示信息。</p>',14),s=[l];function o(h,n,c,d,k,u){return r(),a("div",null,s)}const g=e(t,[["render",o]]);export{_ as __pageData,g as default};
