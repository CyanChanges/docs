import{_ as s,k as i,j as a,m as n}from"./chunks/framework.dWv-GhMG.js";const g=JSON.parse(`{"title":"Union : type somme 2","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\nSchema.object({\\nshared: Schema.string().description('公用的配置项。'),\\ntype: Schema.union(['foo', 'bar']).required().description('选择一个类型。'),\\n}).description('基础配置'),\\nSchema.union([\\nSchema.object({\\ntype: Schema.const('foo').required(),\\nvalue: Schema.number().default(114514).description('请输入一个数值。'),\\n}).description('特殊配置 1'),\\nSchema.object({\\ntype: Schema.const('bar').required(),\\ntext: Schema.string().description('请输入一个字符串。'),\\n}).description('特殊配置 2'),\\n]),\\n])\\n"},"headers":[],"relativePath":"fr-FR/schema/advanced/union-tagged-2.md","filePath":"fr-FR/schema/advanced/union-tagged-2.md"}`),h={name:"fr-FR/schema/advanced/union-tagged-2.md"},t=n("",4),k=[t];function e(p,l,d,r,B,c){return a(),i("div",null,k)}const y=s(h,[["render",e]]);export{g as __pageData,y as default};
