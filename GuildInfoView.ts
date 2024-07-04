System.register("chunks:///_virtual/GuildInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FlagItem.ts","./TranslateTips.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./FriendControl.ts","./GuildControl.ts","./GuildDataCache.ts","./GuildDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,s,a,r,d,l,h,u,c,f,m,p,g,v,C;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.Label,s=t.ProgressBar,a=t.ScrollView,r=t.js,d=t.Sprite},function(t){l=t.FlagItem},function(t){h=t.TranslateTips},function(t){u=t.ListItem},function(t){c=t.default},function(t){f=t.default},null,function(t){m=t.default},function(t){p=t.default},function(t){g=t.default},function(t){v=t.GuildEventDefine},function(t){C=t.BaseView}],execute:function(){i._RF.push({},"cb71dnZiYdGT5+xI7Mnpe22","GuildInfoView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtName=void 0,e.txtNum=void 0,e.txtLev=void 0,e.txtExp=void 0,e.flagItem=void 0,e.pbExp=void 0,e.txtNotice=void 0,e.memberList=void 0,e.guildInfo=void 0,e.translateTips=void 0,e.notice=void 0,e.name="GuildInfoView",e.url="ui/module/guild/GuildInfoView",e}e(i,t);var d=i.prototype;return d.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.txtName=this.findChildComponent("view/name/desc",o),this.txtNum=this.findChildComponent("view/num/desc",o),this.txtLev=this.findChildComponent("view/lev/desc",o),this.flagItem=new l(this,this.findChild("view/flag/flag")),this.txtNotice=this.findChildComponent("view/notice/ScrollView/view/content/desc",o),this.txtExp=this.findChildComponent("view/progress/txtProgress",o),this.pbExp=this.findChildComponent("view/progress/pb",s);var r=this.findChildComponent("view/list",a);this.memberList=this.addUIList(r,I),this.translateTips=new h(this,c.findChild(this.node,"view/notice/translateBtn"),(function(){t.txtNotice.string=""==t.notice?GetLanguage(200334):t.translateTips.GetShowContent()}))},d.registerUpdateHandler=function(){this.addEvent(v.GUILD_MEMBER_INFO,this.updateMemberList,this),this.translateTips.AddTranslateEvent()},d.onAfterOpen=function(){this.guildInfo=this.openArgs[0],this.guildInfo&&(IS(p).send_29_16(this.guildInfo.guild_id),this.updateInfo())},d.onBeforeClose=function(){this.translateTips.ClearInfo()},d.onDestroy=function(){},d.updateInfo=function(){var t=this.guildInfo;if(t){var e=configGuild_level.getDataByKey(t.level);this.txtName.string=t.name,this.txtNum.string=r.formatStr("%s/%s",t.member_num,e.max_num),this.txtLev.string=f.formatStrWithMirrorDeal(GetLanguage(200333),t.level),this.txtExp.string=r.formatStr("%s/%s",t.exp,e.exp),this.pbExp.progress=t.exp/e.exp,this.notice!=t.notice&&(this.translateTips.ClearInfo(),this.notice=t.notice,this.translateTips.SetTranslateInfo("GuildInfoView","notice",t.notice),this.txtNotice.string=""==t.notice?GetLanguage(200334):this.translateTips.GetShowContent()),this.flagItem.SetFlag(t.country)}},d.updateMemberList=function(t){if(this.guildInfo&&t.guild_id==this.guildInfo.guild_id){var e=t.member_list;e.sort((function(t,e){return t.career!=e.career?IS(g).CompareCareer(t.career,e.career):t.donate_week!=e.donate_week?e.donate_week-t.donate_week:t.role_id-e.role_id})),this.memberList.datas=e}},i}(C));var I=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,e.imgIcon=void 0,e.txtName=void 0,e.txtDonate=void 0,e.txtCareer=void 0,e}e(i,t);var s=i.prototype;return s.onInit=function(){var t=this;this.imgFrame=c.findChildComponent(this.node,"imgFrame",d),this.imgIcon=c.findChildComponent(this.node,"imgFrame/imgIcon",d),this.txtName=c.findChildComponent(this.node,"name",o),this.txtDonate=c.findChildComponent(this.node,"donate",o),this.txtCareer=c.findChildComponent(this.node,"career",o),this.view.addComponentCallbackListener(this.imgFrame.node,n.EventType.CLICK,(function(){IS(m).reqOtherRoleNotice(t.data.role_id)}))},s.onRender=function(t,e){this.view.loadRemoteIcon(t.role_head.url,this.imgIcon),this.txtName.string=t.role_name,this.txtDonate.string=t.donate_week,this.txtCareer.string=configGuild_career.getDataByKey(t.career).name},i}(u);i._RF.pop()}}}));
