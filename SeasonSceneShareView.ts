System.register("chunks:///_virtual/SeasonSceneShareView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./NodeUtil.ts","./PlatformUtil.ts","./StringUtil.ts","./index57.ts","./GlobalDefine.ts","./SLGMapData.ts","./ChatDataCache.ts","./ChatDefine.ts","./SeasonDefine.ts","./SeasonSceneControl.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,s,a,r,h,d,l,u,c,f,p,S,m,C,_,g,v;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.Label,s=t.EditBox,a=t.Sprite,r=t.sys,h=t.Vec2},function(t){d=t.V2},function(t){l=t.default},function(t){u=t.PlatformUtil},function(t){c=t.default},null,function(t){f=t._GlobalDefine},function(t){p=t.SLGMapData},function(t){S=t.ChatDataCache},function(t){m=t.ChatDefine},function(t){C=t.SeasonEventDefine,_=t.SceneActionType},function(t){g=t.default},function(t){v=t.BaseView}],execute:function(){n._RF.push({},"3578e+vutVKl7vB0W5tBnwR","SeasonSceneShareView",void 0);var x={5:"dhh_biaoti_biaoji",4:"dhh_biaoti_fenxiang",3:"dhh_biaoti_qingbao"};t("default",function(t){function n(){var e;return(e=t.call(this)||this).txtName=void 0,e.inputField=void 0,e.txtServer=void 0,e.txtNum=void 0,e.txtBattleNum=void 0,e.nodeGrid=void 0,e.imgTitle=void 0,e.pos=new h,e.shareType=1,e.baseId=0,e.shareAction=null,e.name="SeasonSceneShareView",e.url="ui/module/season/scene-view/SeasonSceneShareView",e}e(n,t);var v=n.prototype;return v.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()}));var n=this.findChild("content");this.txtName=l.findChildComponent(n,"info/txtName",o),this.txtServer=l.findChildComponent(n,"info/txtServer",o),this.txtNum=l.findChildComponent(n,"info/txtNum",o),this.txtBattleNum=l.findChildComponent(n,"info/txtBattleNum",o),this.nodeGrid=l.findChild(n,"info/grid"),this.inputField=l.findChildComponent(n,"inputField",s),this.addComponentCallbackListener(this.inputField.node,s.EventType.EDITING_DID_BEGAN,(function(){u.UpdateCurrentEditBox(t.inputField)})),this.imgTitle=l.findChildComponent(n,"imgTitle",a);var r=l.findChild(n,"btnShare");this.addComponentCallbackListener(r,i.EventType.CLICK,(function(){null!=t.shareAction&&(t.shareAction(),t.close())}))},v.registerUpdateHandler=function(){this.addEvent(C.SEASON_SCENE_SHARE_INFO,this.onShareInfo,this)},v.onAfterOpen=function(){var t=this.openArgs[0],e=this.openArgs[1],n=this.openArgs[2];this.shareType=n,this.baseId=t;var i=configSeason_building_plot.getDataByKey(t);this.txtName.string=c.formatStr(r.uiMirror?"[##2,##3] ##1":"##1 [##2,##3]",i.name,e.x,e.y),this.pos.set(e),this.addUIEffect("prefab/map/slgmap/"+i.prefab_name,this.nodeGrid,-1,new d(0,i.ui_scale[1]),i.ui_scale[0]/1e4,(function(t){r.uiMirror&&(t.dir=-1)})),this.loadIcon(this.imgTitle,"season_map",x[n]),IS(g).reqShareInfo(this.pos)},v.onBeforeClose=function(){this.shareAction=null},v.onDestroy=function(){},v.onShareInfo=function(t){var e=this;0==t.server_id?this.txtServer.string=GetLanguage(204650):this.txtServer.string=c.formatStr("[s##1]",t.server_id),this.shareType==_.Detection||this.shareType==_.Flag&&t.is_spy_on?(this.txtNum.string=String(t.num),this.txtBattleNum.string=c.GetNumString(t.total_power)):(this.txtNum.string="????",this.txtBattleNum.string="????"),this.shareAction=function(){var n,i=null!=(n=e.inputField.string)?n:"";f.ENABLE_SDK?sdkControl.checkStr(i,(function(n,o){1==o&&IS(S).SendShareData(m.ChatLinkType.SeasonMapShare,{action:e.shareType,base_id:e.baseId,grid_id:p.getCRToIndex(e.pos.x,e.pos.y),msg:i,spy_end_time:t.is_spy_on?t.spy_end_time:0},m.Channel.SeasonMapBattle)})):IS(S).SendShareData(m.ChatLinkType.SeasonMapShare,{action:e.shareType,base_id:e.baseId,grid_id:p.getCRToIndex(e.pos.x,e.pos.y),msg:i,spy_end_time:t.is_spy_on?t.spy_end_time:0},m.Channel.SeasonMapBattle)}},n}(v));n._RF.pop()}}}));

