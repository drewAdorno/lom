System.register("chunks:///_virtual/GuildMainView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index57.ts","./RoleDataCache.ts","./RoleDefine.ts","./GuildDefine.ts","./BaseSubView.ts"],(function(i){"use strict";var e,t,n,s,u,o,a,c;return{setters:[function(i){e=i.inheritsLoose},function(i){t=i.cclegacy},function(i){n=i.audioMgr},null,function(i){s=i.RoleDataCache},function(i){u=i.RoleEventDefine,o=i.PlayerAttr},function(i){a=i.GuildEventDefine},function(i){c=i.BaseSubView}],execute:function(){t._RF.push({},"04c88LIvHhFLJ21Y5Nu/lHD","GuildMainView",void 0);i("default",function(i){function t(){var e;return(e=i.call(this)||this).subs=[],e.curScene=0,e.isPlayingGuildBgm=!1,e.nodeLoad=void 0,e.nodeLoad1=void 0,e.name="GuildMainView",e.url="ui/module/guild/GuildMainView",e.fullScreen=!0,e}e(t,i);var c=t.prototype;return c.onInit=function(){this.nodeLoad=this.findChild("load"),this.nodeLoad1=this.findChild("load1"),this.subs[0]=this.addSubView("GuildMainApplyView"),this.subs[1]=this.addSubView("GuildMapSceneView")},c.registerUpdateHandler=function(){var i=this;this.addEvent(a.GUILD_SCENE_LOAD_FINISH,(function(){i.nodeLoad1.active=!1})),this.addEvent(u.ROLE_INFO_UPDATE,this.updateRoleInfo,this)},c.onAfterOpen=function(){var i;IS(s).HasGuild()?(this.curScene=1,this.isPlayingGuildBgm=!0,this.nodeLoad.active=!1,this.nodeLoad1.active=!0):(this.curScene=0,this.nodeLoad.active=!0),null==(i=this.subs[this.curScene])||i.setActive(!0)},c._beforeClose=function(){var e;null==(e=this.subs[this.curScene])||e.setActive(!1),i.prototype._beforeClose.call(this)},c.onBeforeClose=function(){},c.onDestroy=function(){},c.onUpdate=function(i){},c.tryReplyBattleMusic=function(){this.isPlayingGuildBgm&&(n.playMusic("battle"),this.isPlayingGuildBgm=!1)},c.updateRoleInfo=function(i){i[o.ROLE_ATTR_GUILD_ID]&&(IS(s).HasGuild()?(this.isPlayingGuildBgm=!0,this.subs[0].setActive(!1),this.curScene=1,this.nodeLoad.active=!1):(this.curScene=0,this.nodeLoad.active=!0,this.subs[1].setActive(!1))),this.subs[this.curScene].setActive(!0)},t}(c));t._RF.pop()}}}));

