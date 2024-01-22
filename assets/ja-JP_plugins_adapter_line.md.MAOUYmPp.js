import{_ as e,k as r,j as n,m as a}from"./chunks/framework.dWv-GhMG.js";const b=JSON.parse('{"title":"@koishijs/plugin-adapter-line","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/plugins/adapter/line.md","filePath":"ja-JP/plugins/adapter/line.md"}'),i={name:"ja-JP/plugins/adapter/line.md"},l=a('<h1 id="koishijs-plugin-adapter-line" tabindex="-1">@koishijs/plugin-adapter-line <a class="header-anchor" href="#koishijs-plugin-adapter-line" aria-label="Permalink to &quot;@koishijs/plugin-adapter-line&quot;">​</a></h1><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>在 <a href="https://developers.line.biz/console/" target="_blank" rel="noreferrer">LINE 开发者控制台</a> 注册账号，创建一个新的 Provider，在 Provider 中创建一个 Channel，类型选择 Messaging API，输入相关信息</li><li>在 Basic settings 页面找到 Channel secret，填入插件的 secret 字段</li><li>在 Messaging API 页面底部 Channel access token 处点击 Issue 创建 token，填入插件的 token 字段</li><li>根据使用需求可在上方的 Allow bot to join group chats (允许机器人加入群组) 处点击 Edit，在新页面中找到 Toggle features 一栏，第一对单选框选择 Allow</li><li>在 Messaging API 页面底部，根据使用需求点击 Auto-reply messages 或者 Greeting messages 的修改按钮，在新页面中可设置是否启用平台自带的自动回复或问候消息</li><li>在 Security 页面推荐配置白名单 IP</li><li>启动插件，打开 Messaging API 页面，勾选 Use webhook</li></ol><p>参考文档：<a href="https://developers.line.biz/en/docs/messaging-api/getting-started/" target="_blank" rel="noreferrer">https://developers.line.biz/en/docs/messaging-api/getting-started/</a></p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="options-token" tabindex="-1">options.token <a class="header-anchor" href="#options-token" aria-label="Permalink to &quot;options.token&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>机器人令牌。</p><h3 id="options-secret" tabindex="-1">options.secret <a class="header-anchor" href="#options-secret" aria-label="Permalink to &quot;options.secret&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>机器人密钥。</p><h2 id="内部-api" tabindex="-1">内部 API <a class="header-anchor" href="#内部-api" aria-label="Permalink to &quot;内部 API&quot;">​</a></h2><ul><li><a href="https://developers.line.biz/en/reference/partner-docs/#phone-audience-match" target="_blank" rel="noreferrer"><code>internal.audienceMatch()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message" target="_blank" rel="noreferrer"><code>internal.broadcast()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#cancel-default-rich-menu" target="_blank" rel="noreferrer"><code>internal.cancelDefaultRichMenu()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#create-rich-menu" target="_blank" rel="noreferrer"><code>internal.createRichMenu()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#create-rich-menu-alias" target="_blank" rel="noreferrer"><code>internal.createRichMenuAlias()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu" target="_blank" rel="noreferrer"><code>internal.deleteRichMenu()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu-alias" target="_blank" rel="noreferrer"><code>internal.deleteRichMenuAlias()</code></a></li><li><a href="https://developers.line.biz/en/reference/partner-docs/#get-phone-audience-match" target="_blank" rel="noreferrer"><code>internal.getAdPhoneMessageStatistics()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-name-list-of-units-used-this-month" target="_blank" rel="noreferrer"><code>internal.getAggregationUnitNameList()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-units-used-this-month" target="_blank" rel="noreferrer"><code>internal.getAggregationUnitUsage()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-bot-info" target="_blank" rel="noreferrer"><code>internal.getBotInfo()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-default-rich-menu-id" target="_blank" rel="noreferrer"><code>internal.getDefaultRichMenuId()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-follower-ids" target="_blank" rel="noreferrer"><code>internal.getFollowers()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-members-group-count" target="_blank" rel="noreferrer"><code>internal.getGroupMemberCount()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile" target="_blank" rel="noreferrer"><code>internal.getGroupMemberProfile()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids" target="_blank" rel="noreferrer"><code>internal.getGroupMembersIds()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-group-summary" target="_blank" rel="noreferrer"><code>internal.getGroupSummary()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-content" target="_blank" rel="noreferrer"><code>internal.getMessageContent()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-image-or-video-preview" target="_blank" rel="noreferrer"><code>internal.getMessageContentPreview()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status" target="_blank" rel="noreferrer"><code>internal.getMessageContentTranscodingByMessageId()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-quota" target="_blank" rel="noreferrer"><code>internal.getMessageQuota()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-consumption" target="_blank" rel="noreferrer"><code>internal.getMessageQuotaConsumption()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status" target="_blank" rel="noreferrer"><code>internal.getNarrowcastProgress()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-broadcast-messages" target="_blank" rel="noreferrer"><code>internal.getNumberOfSentBroadcastMessages()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-multicast-messages" target="_blank" rel="noreferrer"><code>internal.getNumberOfSentMulticastMessages()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-push-messages" target="_blank" rel="noreferrer"><code>internal.getNumberOfSentPushMessages()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-reply-messages" target="_blank" rel="noreferrer"><code>internal.getNumberOfSentReplyMessages()</code></a></li><li><a href="https://developers.line.biz/en/reference/partner-docs/#get-number-of-sent-line-notification-messages" target="_blank" rel="noreferrer"><code>internal.getPNPMessageStatistics()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-profile" target="_blank" rel="noreferrer"><code>internal.getProfile()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu" target="_blank" rel="noreferrer"><code>internal.getRichMenu()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-by-id" target="_blank" rel="noreferrer"><code>internal.getRichMenuAlias()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-list" target="_blank" rel="noreferrer"><code>internal.getRichMenuAliasList()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status" target="_blank" rel="noreferrer"><code>internal.getRichMenuBatchProgress()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-id-of-user" target="_blank" rel="noreferrer"><code>internal.getRichMenuIdOfUser()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#download-rich-menu-image" target="_blank" rel="noreferrer"><code>internal.getRichMenuImage()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list" target="_blank" rel="noreferrer"><code>internal.getRichMenuList()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-members-room-count" target="_blank" rel="noreferrer"><code>internal.getRoomMemberCount()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile" target="_blank" rel="noreferrer"><code>internal.getRoomMemberProfile()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids" target="_blank" rel="noreferrer"><code>internal.getRoomMembersIds()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#get-webhook-endpoint-information" target="_blank" rel="noreferrer"><code>internal.getWebhookEndpoint()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#issue-link-token" target="_blank" rel="noreferrer"><code>internal.issueLinkToken()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#leave-group" target="_blank" rel="noreferrer"><code>internal.leaveGroup()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#leave-room" target="_blank" rel="noreferrer"><code>internal.leaveRoom()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user" target="_blank" rel="noreferrer"><code>internal.linkRichMenuIdToUser()</code></a></li><li><a href="https://developers.line.biz/en/reference/partner-docs/#mark-messages-from-users-as-read" target="_blank" rel="noreferrer"><code>internal.markMessagesAsRead()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#send-multicast-message" target="_blank" rel="noreferrer"><code>internal.multicast()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#send-push-message" target="_blank" rel="noreferrer"><code>internal.pushMessage()</code></a></li><li><a href="https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message" target="_blank" rel="noreferrer"><code>internal.pushMessagesByPhone()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#send-reply-message" target="_blank" rel="noreferrer"><code>internal.replyMessage()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu" target="_blank" rel="noreferrer"><code>internal.setDefaultRichMenu()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image" target="_blank" rel="noreferrer"><code>internal.setRichMenuImage()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url" target="_blank" rel="noreferrer"><code>internal.setWebhookEndpoint()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint" target="_blank" rel="noreferrer"><code>internal.testWebhookEndpoint()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user" target="_blank" rel="noreferrer"><code>internal.unlinkRichMenuIdFromUser()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#update-rich-menu-alias" target="_blank" rel="noreferrer"><code>internal.updateRichMenuAlias()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-broadcast-message" target="_blank" rel="noreferrer"><code>internal.validateBroadcast()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-multicast-message" target="_blank" rel="noreferrer"><code>internal.validateMulticast()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-narrowcast-message" target="_blank" rel="noreferrer"><code>internal.validateNarrowcast()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-push-message" target="_blank" rel="noreferrer"><code>internal.validatePush()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message" target="_blank" rel="noreferrer"><code>internal.validateReply()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-batch-control-rich-menus-request" target="_blank" rel="noreferrer"><code>internal.validateRichMenuBatchRequest()</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#validate-rich-menu-object" target="_blank" rel="noreferrer"><code>internal.validateRichMenuObject()</code></a></li></ul><h2 id="内部事件" tabindex="-1">内部事件 <a class="header-anchor" href="#内部事件" aria-label="Permalink to &quot;内部事件&quot;">​</a></h2><ul><li><a href="https://developers.line.biz/en/reference/messaging-api/#account-link-event" target="_blank" rel="noreferrer"><code>line/account-link</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#beacon-event" target="_blank" rel="noreferrer"><code>line/beacon</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#device-link-event" target="_blank" rel="noreferrer"><code>line/device-link</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#device-unlink-event" target="_blank" rel="noreferrer"><code>line/device-unlink</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#follow-event" target="_blank" rel="noreferrer"><code>line/follow</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#join-event" target="_blank" rel="noreferrer"><code>line/join</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#leave-event" target="_blank" rel="noreferrer"><code>line/leave</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#member-joined-event" target="_blank" rel="noreferrer"><code>line/member-joined</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#member-left-event" target="_blank" rel="noreferrer"><code>line/member-left</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#message-event" target="_blank" rel="noreferrer"><code>line/message</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#postback-event" target="_blank" rel="noreferrer"><code>line/postback</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#scenario-result-event" target="_blank" rel="noreferrer"><code>line/scenario-result</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#unfollow-event" target="_blank" rel="noreferrer"><code>line/unfollow</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#unsend-event" target="_blank" rel="noreferrer"><code>line/unsend</code></a></li><li><a href="https://developers.line.biz/en/reference/messaging-api/#video-viewing-complete" target="_blank" rel="noreferrer"><code>line/video-viewing-complete</code></a></li></ul>',15),t=[l];function s(o,c,g,d,p,f){return n(),r("div",null,t)}const m=e(i,[["render",s]]);export{b as __pageData,m as default};
