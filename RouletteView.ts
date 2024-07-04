System.register("chunks:///_virtual/RouletteView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index3.ts","./ItemGrid.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./AdDefine.ts","./AdModel.ts","./RouletteControl.ts","./RouletteDataCache.ts","./RouletteDefine.ts","./EaseMethod.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,l,s,a,r,h,d,c,u,f,m,v,C,T,g,D,R;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Label,o=t.Button,l=t.Vec2,s=t.randomRangeInt,a=t.Sprite},function(t){r=t.audioMgr},null,function(t){h=t.ItemGrid},function(t){d=t.default},function(t){c=t.default},function(t){u=t.default},null,function(t){f=t.AdEventDefine,m=t.ADS_TYPE},function(t){v=t.AdModel},function(t){C=t.default},function(t){T=t.RouletteDataCache},function(t){g=t.RouletteEventDefine},function(t){D=t.EasingMethod},function(t){R=t.BaseView}],execute:function(){i._RF.push({},"8052eXYj+RL2qX/wFba/sh1","RouletteView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).btnRoll=void 0,e.nodeTable=void 0,e.moveTween=void 0,e.rollTips=void 0,e.adTips=void 0,e.actionTime=5,e.rollItemList=[],e.nodeCanGet=void 0,e.nodeAD=void 0,e.nodeCD=void 0,e.timerID=void 0,e.imgMask=void 0,e.isRolling=!1,e.name="RouletteView",e.url="ui/module/activity/RouletteView",e.poolTime=3e3,e}e(i,t);var R=i.prototype;return R.onInit=function(){var t=this;this.nodeTable=this.findChild("root/turntable"),this.btnRoll=this.findChild("root/arrow"),this.nodeCanGet=this.findChild("root/arrow/nodeCanGet"),this.nodeAD=this.findChild("root/arrow/nodeAD"),this.nodeCD=this.findChild("root/arrow/nodeCD"),this.rollTips=this.findChildComponent("root/bottom/Label",n),this.adTips=this.findChildComponent("root/arrow/nodeAD/Label",n),this.imgMask=this.findChild("imgMask"),this.addComponentCallbackListener(this.imgMask,o.EventType.CLICK,(function(){t.isRolling||t.close()})),this.addComponentCallbackListener(this.btnRoll,o.EventType.CLICK,(function(){r.playSound("common_zhuanpan"),IS(C).reqStartRoll()})),this.addRedPoint("Roulette_Redpoint",this.btnRoll,new l(80,25)),this.nodeTable.removeAllChildren();for(var e=configTurntable.getDatas(),i=0;i<e.length;i++){var s=this.findChild("root/item"),a=nodeInstantiate.instantiate(s);a.active=!0,a.setParent(this.nodeTable),a.angle=-360/e.length*i;var c=new h(this,d.findChild(a,"itemnode")),u=e[i].reward;c.SetItemId(u[0],u[1]),this.rollItemList.push(a)}},R.onAfterOpen=function(){this.refreshShow(),this.nodeTable.angle=0;for(var t=0;t<this.rollItemList.length;t++)d.findChild(this.rollItemList[t],"select").active=!1},R.registerUpdateHandler=function(){this.addEvent(g.ROULETTE_INFO_UPDATE,this.refreshRollTips,this),this.addEvent(f.AD_INFO_UPDATE,this.checkRoll,this)},R.checkRoll=function(t){t==m.AD_TURNTABLE&&(r.playSound("common_zhuanpan"),IS(C).reqStartRoll())},R.refreshRollTips=function(){this.refreshShow(),this.startRoll()},R.startRoll=function(){var t=this;this.isRolling=!0;var e=IS(T).rewardNum-1,i=360/this.rollItemList.length;null!=this.moveTween&&this.moveTween.stop();for(var n=720+i*e+s(-i/2+1,i/2),o=0;o<this.rollItemList.length;o++)d.findChild(this.rollItemList[o],"select").active=!1;this.moveTween=this.addTween(0,1,this.actionTime,(function(e,i){t.nodeTable.angle=n*i})).easing(D.CUBIC_OUT).call((function(){for(var n=0;n<t.rollItemList.length;n++){var o=360-(t.nodeTable.angle+t.rollItemList[n].angle)%360;d.findChild(t.rollItemList[n],"select").active=!1,(o<=i/2||o>=360-i/2)&&(d.findChild(t.rollItemList[n],"select").active=!0)}d.findChild(t.rollItemList[e],"select").active=!0;var l=configTurntable.getDatas()[e].reward;uiMgr.openView("GoodsGetView",[{gtid:l[0],num:l[1]}]),t.isRolling=!1})).start()},R.refreshShow=function(){var t=this,e=IS(T).rollTime;this.rollTips.string=c.formatStrWithMirrorDeal(GetLanguage(300099),e);var i=IS(v).getAdWatchCount(m.AD_TURNTABLE),o=configAds.getDataByKey(m.AD_TURNTABLE),l=o.times-i+"/"+o.times;this.adTips.string=l;var s=IS(T).rollCD,r=Math.max(0,s-u.serverTime);if(r>0)return this.nodeCD.active=!0,this.btnRoll.getComponent(a).grayscale=!0,this.nodeCanGet.active=!1,this.nodeAD.active=!1,d.findChildComponent(this.nodeCD,"Label",n).string=u.formatTimeForSecond(r),void(this.timerID=this.addTimer(1,-1,(function(){t.updateTime()})));this.nodeCD.active=!1,this.btnRoll.getComponent(a).grayscale=!1,this.checkCanGetShow()},R.updateTime=function(){var t=IS(T).rollCD,e=Math.max(0,t-u.serverTime);0==e&&(this.removeTimer(this.timerID),this.refreshShow(),C.checkRedPoint()),d.findChildComponent(this.nodeCD,"Label",n).string=u.formatTimeForSecond(e)},R.checkCanGetShow=function(){IS(T).rollTime<=0?(this.nodeCanGet.active=!1,this.checkWatchADShow()):this.nodeCanGet.active=!0},R.checkWatchADShow=function(){IS(v).getAdWatchCount(m.AD_TURNTABLE)<=configAds.getDataByKey(m.AD_TURNTABLE).times?this.nodeAD.active=!0:this.nodeAD.active=!1},R.onBeforeClose=function(){null!=this.moveTween&&this.moveTween.stop()},R.onDestroy=function(){},i}(R));i._RF.pop()}}}));
