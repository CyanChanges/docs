# Utilisations avancées des commandes

## Utilisation des guillemets

Comme pour la plupart des outils en ligne de commande, il peut être nécessaire d'utiliser des guillemets pour entourer les paramètres, afin d'éviter qu'ils ne soient interprétés de manière incorrecte comme plusieurs paramètres ou comme une option erronée. Cette astuce est très utile dans de nombreux cas :

- Passez un paramètre contenant des espaces (par défaut, il traite les chaînes qui continent des espaces comme plusieurs paramètres)
- Passez un paramètre commençant par `-` (par défaut, cela est interprété comme l'option suivante)
- 当希望传入一个空字符串时作为参数时 (默认的行为是解析为 `true`)
- 当希望传入只由数字构成的字符串参数时 (默认行为是解析为 `number` 类型)

## L'Interpolation

如果你希望在指令中使用其他指令的内容，可以使用 `$()` 进行指令插值：

<chat-panel>
<chat-message nickname="Alice">echo foo$(echo bar)</chat-message>
<chat-message nickname="Koishi">foobar</chat-message>
</chat-panel>

Koishi ne s'échappe pas automatiquement du texte entre guillemets simples. Si vous ne souhaitez pas que certains paramètres soient échappés par la syntaxe d'interpolation, vous pouvez utiliser des guillemets simples :

<chat-panel>
<chat-message nickname="Alice">echo 'foo$(echo bar)'</chat-message>
<chat-message nickname="Koishi">foo$(echo bar)</chat-message>
</chat-panel>

最后，你还可以在 [koishi-plugin-eval](https://eval.koishi.chat) 中了解到另一种插值方法。

## Correspondance floue

Dans l'utilisation quotidienne, il arrive parfois de faire des fautes de frappe. Dans ces cas, Koishi peut automatiquement corriger en suggérant des commandes similaires :

<chat-panel>
<chat-message nickname="Alice">ecko bonjour</chat-message>
<chat-message nickname="Koishi">Voulez-vous dire « echo » ? 回复句号以使用推测的指令。</chat-message>
<chat-message nickname="Alice">.</chat-message>
<chat-message nickname="Koishi">bonjour</chat-message>
</chat-panel>

如果想调整模糊匹配的程度，你还可以修改配置项 [minSimilarity](../../api/core/app.md#options-minsimilarity)。Pratique, n'est-ce pas ?
