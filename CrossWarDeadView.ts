System.register("chunks:///_virtual/CrossWarDeadView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./UIList.ts","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./MessageView.ts","./EquipModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./CrossWarControl.ts","./CrossWarDatacache.ts","./CrossWarDefine.ts","./BaseView.ts"],(function(e){"use strict";var t,i,n,o,s,r,v,a,d,l,h,c,C,f,u,R,g;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Label,o=e.ProgressBar,s=e.Button,r=e.Sprite},function(e){v=e.V2},null,function(e){a=e.default},function(e){d=e.default},null,function(e){l=e.default},function(e){h=e.EquipModel},function(e){c=e.RoleDataCache},function(e){C=e.PlayerAttr},function(e){f=e.default},function(e){u=e.CrossWarDataCache},function(e){R=e.CrossWarEventDefine},function(e){g=e.BaseView}],execute:function(){i._RF.push({},"e6233VfQatJMLX8CI+Kocgr","CrossWarDeadView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).txtServer=void 0,t.txtName=void 0,t.txtLevel=void 0,t.nodeModel=void 0,t.nodePb1=void 0,t.nodePb2=void 0,t.revivelTime=void 0,t.deadCount=void 0,t.model=void 0,t.btnRevivel1=void 0,t.btnRevivel2=void 0,t.btnRevivel3=void 0,t.btnBack=void 0,t.pbRevivel=void 0,t.txtRevivel=void 0,t.pbInvasion=void 0,t.txtInvasion=void 0,t.countTimer=void 0,t.txtCost=void 0,t.canRevivel=!1,t.name="CrossWarDeadView",t.url="ui/module/crosswar/CrossWarDeadView",t.poolTime=3e3,t}t(i,e);var g=i.prototype;return g.onInit=function(){var e=this;this.txtServer=this.findChildComponent("content/node/txtServer",n),this.txtName=this.findChildComponent("content/node/txtName",n),this.txtLevel=this.findChildComponent("content/node/txtLevel",n),this.nodeModel=this.findChild("content/node/model"),this.nodePb1=this.findChild("content/nodeReward/content/item1"),this.nodePb2=this.findChild("content/nodeReward/content/item2"),this.pbRevivel=this.findChildComponent("content/nodeReward/content/item2/ProgressBar",o),this.txtRevivel=this.findChildComponent("content/nodeReward/content/item2/ProgressBar/txtTime",n),this.pbInvasion=this.findChildComponent("content/nodeReward/content/item1/ProgressBar",o),this.txtInvasion=this.findChildComponent("content/nodeReward/content/item1/ProgressBar/txtTime",n),this.btnRevivel1=this.findChild("content/nodeBtn/btnRevival1"),this.addComponentCallbackListener(this.btnRevivel1,s.EventType.CLICK,(function(){e.refreshRevivel()<=0?IS(f).reqCrossWarRevive(1):l.showFlyTip(GetLanguage(200223))})),this.btnRevivel2=this.findChild("content/nodeBtn/btnRevival2"),this.addComponentCallbackListener(this.btnRevivel2,s.EventType.CLICK,(function(){e.refreshRevivel()<=0?IS(f).reqCrossWarRevive(2):l.showFlyTip(GetLanguage(200223))})),this.btnRevivel3=this.findChild("content/nodeBtn/btnRevival3"),this.addComponentCallbackListener(this.btnRevivel3,s.EventType.CLICK,(function(){e.refreshRevivel()<=0?IS(f).reqCrossWarRevive(1):l.showFlyTip(GetLanguage(200223))})),this.txtCost=a.findChildComponent(this.btnRevivel3,"Label-001",n),this.btnBack=this.findChild("content/nodeBtn/btnBack"),this.addComponentCallbackListener(this.btnBack,s.EventType.CLICK,(function(){uiMgr.close("CrosswarMapSceneView"),e.close(),uiMgr.openView("CrossWarView")}))},g.onAfterOpen=function(){var e=this;this.canRevivel=!1,this.revivelTime=this.openArgs[0],this.deadCount=this.openArgs[1],this.txtName.string=IS(c).GetRoleName(),this.txtLevel.string="Lv."+IS(c).GetLevel(),this.txtServer.string="s"+IS(c).GetServerId(),this.txtCost.string=configCross_war_kv.getDataByKey(7).value[0][1],this.loadRoleModel(this.nodeModel),this.checkBtnShow(),this.refreshCountDown(),this.countTimer=this.addTimer(1,-1,(function(){e.refreshCountDown()}))},g.loadRoleModel=function(e){this.removeUnitModel(this.model);var t=IS(h).getShowEquipCfgIdByLocation(1),i=IS(h).getShowEquipCfgIdByLocation(2),n=IS(h).getShowEquipCfgIdByLocation(3),o=IS(c).GetTypeUsedSkin(1);this.model=this.addUnitModel({job:IS(c).GetTypeUsedSkin(0),dressId:IS(c).GetTypeUsedSkin(2)||0,gender:IS(c).GetRoleAttr(C.ROLE_ATTR_GENDER),weapon:t,ornaments:i,face:n,color:o,parent:e,shenqi:0},v.ZERO,1.5)},g.checkBtnShow=function(){if(this.btnRevivel1.active=!1,this.btnRevivel2.active=!1,this.btnRevivel3.active=!1,this.btnRevivel1.getComponent(r).grayscale=!0,this.btnRevivel2.getComponent(r).grayscale=!0,this.btnRevivel3.getComponent(r).grayscale=!0,this.btnBack.active=!1,IS(u).serv_id==IS(c).GetServerId())this.btnRevivel1.active=!0;else{var e=IS(u).end_time;this.revivelTime>e?this.btnBack.active=!0:(this.btnRevivel2.active=!0,this.btnRevivel3.active=!0)}},g.refreshCountDown=function(){var e=this.refreshRevivel(),t=IS(u).end_time;this.revivelTime>t?(this.nodePb1.active=!1,e<0&&(this.removeTimer(this.countTimer),this.canRevivel=!0)):(this.nodePb1.active=!0,this.refreshInvasion())},g.refreshRevivel=function(){var e=configCross_war_kv.getDataByKey(8).value,t=0;t=this.deadCount>e.length?e[e.length-1]:e[this.deadCount],IS(u).serv_id==IS(c).GetServerId()&&(t=configCross_war_kv.getDataByKey(20).value[0]);var i=this.revivelTime-d.serverTime;return i<0?(this.btnRevivel1.getComponent(r).grayscale=!1,this.btnRevivel2.getComponent(r).grayscale=!1,this.btnRevivel3.getComponent(r).grayscale=!1,i):(this.pbRevivel.progress=i/t,this.txtRevivel.string=d.getTimeLeft(i),i)},g.refreshInvasion=function(){var e=IS(u).end_time-d.serverTime;this.txtInvasion.string=d.getTimeLeft(e);var t=configCross_war_kv.getDataByKey(3).value[0];this.pbInvasion.progress=e/t},g.registerUpdateHandler=function(){this.addEvent(R.CROSS_WAR_LEAVE,this.close,this)},g.onBeforeClose=function(){},g.onDestroy=function(){},i}(g));i._RF.pop()}}}));
