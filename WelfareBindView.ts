System.register("chunks:///_virtual/WelfareBindView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./ConfigGlobal.ts","./MessageView.ts","./LoginDataCache.ts","./NativeToJs.ts","./WelfareControl.ts","./WelfareDataCache.ts","./WelfareDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var i,e,n,d,o,a,r,s,l,c,h,f,u,v,w,C;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.ScrollView,d=t.Sprite,o=t.Button,a=t.sys},function(t){r=t.ItemGrid},function(t){s=t.ListItem},function(t){l=t.default},null,function(t){c=t.ConfigGlobal},function(t){h=t.default},function(t){f=t.LoginDataCache},null,function(t){u=t.default},function(t){v=t.WelfareDataCache},function(t){w=t.WelfareEvent},function(t){C=t.BaseSubView}],execute:function(){e._RF.push({},"488caj+CAxDE4ET21UjVhCS","WelfareBindView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).imgGrey=void 0,i.txtReward1=void 0,i.txtReward2=void 0,i.rewardList=void 0,i.btnReward=void 0,i.btnBind=void 0,i.nodeApple=void 0,i.node4399=void 0,i.redPointReward=void 0,i.redPointBind=void 0,i.name="WelfareBindView",i.url="ui/module/welfare/WelfareBindView",i}i(e,t);var r=e.prototype;return r.onInit=function(){var t=this;this.imgGrey=this.findChild("btnReward/imgGrey"),this.txtReward1=this.findChild("btnReward/txtReward1"),this.txtReward2=this.findChild("btnReward/txtReward2"),this.rewardList=this.addUIList(this.findChildComponent("content/nodeReward/RewardScroll",n),p),this.rewardList.lackCenter=!0,this.nodeApple=this.findChild("content/nodePlatform/apple"),this.node4399=this.findChild("content/nodePlatform/4399");var i=this.findChildComponent("content/nodePlatform/google/icon",d);this.loadIcon(i,"flzx","flzx_icon_google");var e=this.findChildComponent("content/nodePlatform/facebook/icon",d);this.loadIcon(e,"flzx","flzx_icon_facebook");var a=this.findChildComponent("content/nodePlatform/apple/icon",d);this.loadIcon(a,"flzx","flzx_icon_apple");var r=this.findChildComponent("content/nodePlatform/4399/icon",d);this.loadIcon(r,"flzx","flzx_icon_e-mail"),this.btnReward=this.findChild("btnReward"),this.addComponentCallbackListener(this.btnReward,o.EventType.CLICK,(function(){t.imgGrey.active||IS(u).reqBindReward()})),this.redPointReward=this.findChild("btnReward/RedPoint"),this.btnBind=this.findChild("btnBind"),this.addComponentCallbackListener(this.btnBind,o.EventType.CLICK,(function(){var t=IS(f);if(t.sdkExt&&t.sdkExt.length>0){var i=JSON.parse(t.sdkExt);console.log(i.is_tmp_account),"yes"==i.is_tmp_account?sdkControl.hwLoginBind():h.showFlyTip(GetLanguage(300100))}})),this.redPointBind=this.findChild("btnBind/RedPoint");var s=this.findChild("btnClose");this.addComponentCallbackListener(s,o.EventType.CLICK,(function(){uiMgr.close("MenuView"),uiMgr.close("WelfareCenterView")}))},r.registerUpdateHandler=function(){this.addEvent(w.BIND_INFO_UPDATE,this.updateInfo,this),this.addEvent(w.WELFARE_BIND_CALLBACK,this.onBindCallback,this)},r.onAfterOpen=function(){IS(u).reqBindInfo(),this.rewardList.datas=c.account_bind_reward,this.nodeApple.active=a.os==a.OS.IOS,this.node4399.active=a.os!=a.OS.IOS},r.onBeforeClose=function(){},r.onDestroy=function(){},r.updateInfo=function(){IS(v).bindState>0&&0==IS(v).rewardState?(IS(v).bindRedPoint=1,this.redPointReward.active=!0,this.btnReward.getComponent(o).interactable=!0,this.btnReward.active=!0,this.btnBind.active=!1,this.imgGrey.active=!1,this.txtReward1.active=!0,this.txtReward2.active=!1):IS(v).bindState>0&&1==IS(v).rewardState?(IS(v).bindRedPoint=0,this.redPointReward.active=!1,this.btnReward.getComponent(o).interactable=!1,this.btnReward.active=!0,this.btnBind.active=!1,this.imgGrey.active=!0,this.txtReward1.active=!1,this.txtReward2.active=!0):(IS(v).bindRedPoint=1,this.redPointBind.active=!0,this.btnReward.active=!1,this.btnBind.active=!0,this.imgGrey.active=!0,this.txtReward1.active=!0,this.txtReward2.active=!1),IS(v).updateRedPoint()},r.onBindCallback=function(t){void 0===t&&(t=0),1==t&&IS(u).reqBindInfo()},e}(C));var p=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),d=0;d<e;d++)n[d]=arguments[d];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=l.findChild(this.node,"itemGrid"),this.itemGrid=new r(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(s);e._RF.pop()}}}));
