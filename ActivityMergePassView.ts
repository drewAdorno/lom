System.register("chunks:///_virtual/ActivityMergePassView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./MathUtil.ts","./ObjectUtil.ts","./BagDefine.ts","./BagModel.ts","./BattlePassControl.ts","./BattlePassDataCache.ts","./BattlePassDefine.ts","./MessageView.ts","./PayDataCache.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityMergeDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,s,o,a,d,r,h,l,c,v,f,p,u,m,g,C,x,y,b,w,I,_,L,P,E,S;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,s=t.Label,o=t.Layout,a=t.ProgressBar,d=t.Sprite,r=t.ScrollView},function(t){h=t.ItemGrid},function(t){l=t.ListItem},function(t){c=t.default},function(t){v=t.default},function(t){f=t.default},null,function(t){p=t.default},function(t){u=t.default},function(t){m=t.ItemIdDefine},function(t){g=t.BagModel},function(t){C=t.default},function(t){x=t.BattlePassDataCache},function(t){y=t.BattlePassDefine},function(t){b=t.default},function(t){w=t.default},function(t){I=t.default},function(t){_=t.default},function(t){L=t.ActivityType,P=t.ActivityState},function(t){E=t.ActivityMergeEvent},function(t){S=t.BaseView}],execute:function(){i._RF.push({},"707c8G1AQJIEap3AmGLYdH2","ActivityMergePassView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).curPassId=0,e.passInfo=void 0,e.passList=void 0,e.txtPrice=void 0,e.nodePay=void 0,e.nodeGet=void 0,e.nodeReceived=void 0,e.txtPoint=void 0,e.boxDesc=void 0,e.boxCount=void 0,e.boxExp=void 0,e.boxPb=void 0,e.boxImg=void 0,e.txtNum=void 0,e.txtLeftTime=void 0,e.deltaTime=0,e.leftTime=0,e.canUpdate=!1,e.rewardScore=[],e.name="ActivityMergePassView",e.url="ui/module/activityMerge/ActivityMergePassView",e}e(i,t);var h=i.prototype;return h.onInit=function(){var t=this,e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()})),this.txtPrice=this.findChildComponent("view/nodeEnergy/nodePay/btnBuy/Label",s),this.txtPoint=this.findChildComponent("view/nodeHead/nodePoint/txtPoint",s),this.txtLeftTime=this.findChildComponent("view/time/txtLeftTime",s),this.txtNum=this.findChildComponent("view/nodeEnergy/nodeGet/txtNum",s),this.dealMirrorLayout(this.findChildComponent("view/time",o)),this.nodePay=this.findChild("view/nodeEnergy/nodePay"),this.nodeGet=this.findChild("view/nodeEnergy/nodeGet"),this.nodeReceived=this.findChild("view/nodeEnergy/nodeReceived"),this.boxDesc=c.findChildComponent(this.node,"view/state2/imgExtBG/Label",s),this.boxCount=c.findChildComponent(this.node,"view/state2/txtExtCount",s),this.boxExp=c.findChildComponent(this.node,"view/state2/pbExperience/txtExtExp",s),this.boxPb=c.findChildComponent(this.node,"view/state2/pbExperience",a),this.boxImg=c.findChildComponent(this.node,"view/state2/imgBox",d),this.addComponentCallbackListener(this.boxImg.node,n.EventType.CLICK,(function(){t.onGetExtReward()}));var i=this.findChild("view/nodeEnergy/nodePay/btnBuy");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){var e=configWartoken.getDataByKey(t.curPassId),i=configPay_mall.getDataByKey(e.bundle_id);IS(g).getGoodsCountByGoodsGtid(m.FakeRechare)>=i.cost_level?IS(w).Pay(IS(x).getPassInfo(t.curPassId).bundle_id):IS(w).Pay(e.bundle_id)}));var h=this.findChild("view/nodeEnergy/nodeGet/btnGet");this.addComponentCallbackListener(h,n.EventType.CLICK,(function(){IS(I).send_24_167()}));var l=this.findChildComponent("view/passList",r);this.passList=this.addUIList(l,G,!0,0),this.adjustMirrorNode(this.findChild("view/nodeEnergy/nodeGet/Sprite"))},h.registerUpdateHandler=function(){this.addEvent(E.OnMergeGameEnergyUpdate,this.onPassEnergyUpdate,this),this.addEvent(y.BATTLE_PASS_INFO_UPDATE,this.updateBattlePass,this)},h.onAfterOpen=function(){var t;this.dealMirrorLayout(this.findChildComponent("view/time",o));var e=IS(_).GetActivityInfo(L.MergeGame);if(e&&e.state==P.Open){var i,n=null!=(i=e.state_time[e.state])?i:e.state_time[P.Open];this.leftTime=n.end_time-f.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=f.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(200026)}this.updateBattlePass();var s=u.copyArray(null!=(t=configWartoken_reward.getDataByList("id",this.curPassId))?t:[]);s.sort((function(t,e){return t.level-e.level}));var a=0;this.rewardScore[1]=0;for(var d=0;d<s.length;d++){var r=s[d];r&&(a+=r.exp,this.rewardScore[r.level+1]=a)}this.passList.datas=s,this.showBox()},h.onBeforeClose=function(){this.canUpdate=!1},h.onDestroy=function(){},h.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=f.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},h.onPassEnergyUpdate=function(t){0==t.is_buy?(this.nodePay.active=!0,this.nodeGet.active=!1,this.nodeReceived.active=!1):t.num>0?(this.nodePay.active=!1,this.nodeGet.active=!0,this.txtNum.string="X"+t.num,this.nodeReceived.active=!1):(this.nodePay.active=!1,this.nodeGet.active=!1,this.nodeReceived.active=!0)},h.updateBattlePass=function(){IS(I).send_24_166();var t=IS(_).GetActivityInfo(L.MergeGame);if(this.curPassId=t.roundCfg.group_id,this.passInfo=IS(x).getPassInfo(this.curPassId),this.passInfo){var e=configPay_mall.getDataByKey(this.passInfo.bundle_id);this.txtPrice.string=IS(w).GetPriceString(e.cost_level),this.txtPoint.string=p.formatNum(this.passInfo.total_exp),this.showBox()}this.passList.updateAll()},h.showBox=function(){var t=this.passInfo;this.boxDesc.string=v.formatStr(GetLanguage(201750),this.rewardScore[t.max_lev],GetLanguage(302341),t.extra_need_exp,GetLanguage(302341),t.extra_max_times),this.boxCount.string="("+t.extra_times+"/"+t.extra_max_times+")",t.lev<t.max_lev?(this.boxExp.string="0/"+t.extra_need_exp,this.boxPb.progress=0):(this.boxImg.grayscale=t.exp<t.extra_need_exp,this.boxExp.string=t.exp+"/"+t.extra_need_exp,this.boxPb.progress=t.exp/t.extra_need_exp)},h.onGetExtReward=function(){var t=this.passInfo;t.extra_times>=t.extra_max_times?b.showFlyTip(GetLanguage(200030)):t.lev>=t.max_lev&&t.exp>=t.extra_need_exp?t.if_buy?1==this.curPassId?IS(C).reqBattlePassExtReward():IS(C).send_40_6(this.curPassId):b.showFlyTip(v.formatStrWithMirrorDeal(GetLanguage(201062),GetLanguage(10410022))):b.showFlyTip(GetLanguage(200032))},i}(S));var G=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).lockNode=void 0,e.lockNode2=void 0,e.txtLev=void 0,e.imgLev=void 0,e.pbExp=void 0,e.rewardScroll=void 0,e.highRewardScroll=void 0,e.btnClaim1=void 0,e.btnClaim2=void 0,e.nodeReceived1=void 0,e.nodeReceived2=void 0,e.btnNotComplete1=void 0,e.btnNotComplete2=void 0,e.btnLock=void 0,e}e(i,t);var h=i.prototype;return h.onInit=function(){var t=this;this.imgLev=c.findChildComponent(this.node,"pbExp/icon",d),this.txtLev=c.findChildComponent(this.node,"pbExp/icon/txtLabel",s),this.pbExp=c.findChildComponent(this.node,"pbExp",a),this.btnLock=c.findChild(this.node,"high/btnLock"),this.view.addComponentCallbackListener(this.btnLock,n.EventType.CLICK,(function(){var e=configWartoken.getDataByKey(t.view.curPassId),i=configPay_mall.getDataByKey(e.bundle_id);IS(g).getGoodsCountByGoodsGtid(m.FakeRechare)>=i.cost_level?IS(w).Pay(IS(x).getPassInfo(t.view.curPassId).bundle_id):IS(w).Pay(e.bundle_id)})),this.nodeReceived1=c.findChild(this.node,"normal/received"),this.nodeReceived2=c.findChild(this.node,"high/received"),this.btnNotComplete1=c.findChild(this.node,"normal/btnNotComplete"),this.btnNotComplete2=c.findChild(this.node,"high/btnNotComplete"),this.btnClaim1=c.findChild(this.node,"normal/btnClaim"),this.view.addComponentCallbackListener(this.btnClaim1,n.EventType.CLICK,(function(){IS(C).send_40_5(t.view.curPassId,t.data.level,1)})),this.btnClaim2=c.findChild(this.node,"high/btnClaim"),this.view.addComponentCallbackListener(this.btnClaim2,n.EventType.CLICK,(function(){IS(C).send_40_5(t.view.curPassId,t.data.level,2)}));var e=c.findChildComponent(this.node,"normal/scroll",r);this.rewardScroll=this.view.addUIList(e,T,!1,0),this.rewardScroll.touchEvent=!1,this.rewardScroll.lackCenter=!0;var i=c.findChildComponent(this.node,"high/scroll",r);this.highRewardScroll=this.view.addUIList(i,T,!1,0),this.highRewardScroll.touchEvent=!1,this.highRewardScroll.lackCenter=!0,this.view.dealMirrorLayout(c.findChildComponent(this.node,"high/nodeSpecial",o))},h.onRender=function(t,e){var i,n,s=null==(i=this.view.passInfo)?void 0:i.free_reward[t.level-1].status,o=null==(n=this.view.passInfo)?void 0:n.high_reward[t.level-1].status;this.btnNotComplete1.active=0==s,this.btnNotComplete2.active=0==o,this.btnClaim1.active=1==s,this.btnClaim2.active=1==o&&this.view.passInfo.if_buy,this.nodeReceived1.active=2==s,this.nodeReceived2.active=2==o,this.showLev()},h.showLev=function(){var t=this.view.passInfo,e=this.data;if(this.txtLev.string=p.formatNum(this.view.rewardScore[e.level]),this.btnLock.active=!!t&&!t.if_buy,t){var i,n,s=null!=(i=null==(n=configWartoken_reward.getDataByKeys("id",t.id,"level",t.lev))?void 0:n.exp)?i:t.need_exp;0==s?this.pbExp.progress=1:e.level==t.lev+1?this.pbExp.progress=t.exp/s-.5:e.level==t.lev?this.pbExp.progress=.5+t.exp/s:e.level<t.lev?this.pbExp.progress=1:this.pbExp.progress=0}else this.pbExp.progress=0;this.rewardScroll.datas=e.reward,this.highRewardScroll.datas=e.high_reward},i}(l),T=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=c.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(l);i._RF.pop()}}}));
