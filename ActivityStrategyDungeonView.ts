System.register("chunks:///_virtual/ActivityStrategyDungeonView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ChapterDataCache.ts","./ChapterDefine.ts","./DungeonControl.ts","./MessageView.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityStrategyDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,a,r,s,d,l,c,h,u,f,g,v,m,y,C,p,I;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.ScrollView,o=t.Button,a=t.js,r=t.Label},function(t){s=t.ItemGrid},function(t){d=t.ListItem},function(t){l=t.default},function(t){c=t.default},function(t){h=t.default},null,function(t){u=t.ChapterDataCache},function(t){f=t.DungeonDefine},function(t){g=t.default},function(t){v=t.default},function(t){m=t.default},function(t){y=t.ActivityType,C=t.ActivityState},function(t){p=t.default},function(t){I=t.BaseView}],execute:function(){i._RF.push({},"6ce9fS9GS9IHZzqfy4FMyo9","ActivityStrategyDungeonView",void 0);t("ActivityStrategyDungeonView",function(t){function i(){var e;return(e=t.call(this)||this).curDay=0,e.dungeonInfo=void 0,e.scrollDungeonList=void 0,e.name="ActivityStrategyDungeonView",e.url="ui/module/ActivityStrategy/ActivityStrategyDungeonView",e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this,e=this.findChildComponent("BG/bg/scrollDungeon",n);this.addComponentCallbackListener(this.findChild("BG/bottom/btnClose"),o.EventType.CLICK,(function(){t.close()})),this.scrollDungeonList=this.addUIList(e,D)},r.registerUpdateHandler=function(){},r.onAfterOpen=function(){var t=this,e=IS(m).GetActivityInfo(y.Strategy);if(e){this.dungeonInfo=IS(u).getDungeonInfoByID(f.CHAPTER_TYPE_STRATEGY_ACTIVITY);var i=e.state_time[C.Open],n=h.ServerDate(1e3*i.start_time),o=a.formatStr("%s/%s/%s %s:%s:%s",n.getFullYear(),n.getMonth()+1,n.getDate(),0,0,0),r=h.getServerDateByLocalStr(o).getTime()/1e3,s=h.serverTime-r;this.curDay=Math.floor(s/86400+1);for(var d,l=[],c=configStrategy_activity_chapter.getDatas(),g=0;g<c.length;g++){if(!(this.curDay>=c[g].level)){d={type:2};break}l.push({type:1,cfg:c[g]})}l.sort((function(e,i){var n=0,o=0;return e.cfg.id==t.dungeonInfo.max_level&&(n+=1e7),i.cfg.id==t.dungeonInfo.max_level&&(o+=1e7),e.cfg.id>t.dungeonInfo.max_level&&(n+=1e5),i.cfg.id>t.dungeonInfo.max_level&&(o+=1e5),e.cfg.id<t.dungeonInfo.max_level&&(n+=1e3),i.cfg.id<t.dungeonInfo.max_level&&(o+=1e3),e.cfg.id<i.cfg.id?n+=10:e.cfg.id>i.cfg.id&&(o+=10),n>o?-1:1})),d&&l.push(d),this.scrollDungeonList.datas=l,this.scrollDungeonList.scrollTo(0,-1)}},r.onBeforeClose=function(){IS(p).setDungeonRed()},r.onDestroy=function(){},i}(I));var D=t("DunngeonItem",function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).normalNode=void 0,e.btnGoto=void 0,e.haveReward=void 0,e.title=void 0,e.lockNode=void 0,e.lockDes=void 0,e.des=void 0,e.rewardScroll=void 0,e.red=void 0,e}e(i,t);var a=i.prototype;return a.onInit=function(){var t=this;this.red=l.findChild(this.node,"normal/btnGoto/red"),this.normalNode=l.findChild(this.node,"normal"),this.btnGoto=l.findChild(this.node,"normal/btnGoto"),this.haveReward=l.findChild(this.node,"normal/haveReward"),this.des=l.findChildComponent(this.node,"Des",r),this.lockNode=l.findChild(this.node,"normal/lock"),this.lockDes=l.findChildComponent(this.node,"normal/lock/desc",r),this.title=l.findChildComponent(this.node,"normal/title",r),this.view.addComponentCallbackListener(this.btnGoto,o.EventType.CLICK,(function(){t.onClickGoto()}));var e=l.findChildComponent(this.node,"normal/rewardScroll",n);this.rewardScroll=this.view.addUIList(e,S,!1),this.rewardScroll.touchEvent=!1},a.onRender=function(t,e){if(this.data=t,1==this.data.type){var i=t.cfg;if(this.rewardScroll.datas=i.reward,this.normalNode.active=!0,this.title.string=i.name,this.des.string="",this.haveReward.active=i.id<this.view.dungeonInfo.max_level,this.btnGoto.active=i.id>=this.view.dungeonInfo.max_level,this.red.active=i.id==this.view.dungeonInfo.max_level&&IS(p).GetDungeonRed()>0,i.id>0&&i.id>this.view.dungeonInfo.max_level){this.lockNode.active=!0;var n=configStrategy_activity_chapter.getDataByKey(i.id-1);this.lockDes.string=c.formatStrWithMirrorDeal(GetLanguage(200091),n.name)}else this.lockNode.active=!1}else this.des.string=GetLanguage(200092),this.normalNode.active=!1},a.onClickGoto=function(){IS(m).GetActivityInfo(y.Strategy).state==C.Open?(IS(g).reqDungeonBattleStart(f.CHAPTER_TYPE_STRATEGY_ACTIVITY,this.data.cfg.id),battleMain.enterChapter(0),uiMgr.close("ActivityStrategyView"),this.view.close()):v.showFlyTip(GetLanguage(200026))},i}(d)),S=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=l.findChild(this.node,"itemGrid"),this.itemGrid=new s(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(d);i._RF.pop()}}}));
