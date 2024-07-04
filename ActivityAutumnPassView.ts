System.register("chunks:///_virtual/ActivityAutumnPassView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagDefine.ts","./BagModel.ts","./BattlePassControl.ts","./BattlePassDataCache.ts","./BattlePassDefine.ts","./MessageView.ts","./PayDataCache.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,s,n,o,a,d,r,l,h,c,v,u,f,p,m,x,g,I,w,C,b,_,y,G;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){s=t.cclegacy,n=t.Button,o=t.Label,a=t.ScrollView,d=t.Sprite,r=t.ProgressBar,l=t.RichText,h=t.js},function(t){c=t.ItemGrid},function(t){v=t.ListItem},function(t){u=t.default},function(t){f=t.default},null,function(t){p=t.ConfigGlobal},function(t){m=t.BagEventDefine},function(t){x=t.BagModel},function(t){g=t.default},function(t){I=t.BattlePassDataCache},function(t){w=t.BattlePassDefine},function(t){C=t.default},function(t){b=t.default},function(t){_=t.default},function(t){y=t.ActivityType},function(t){G=t.BaseView}],execute:function(){s._RF.push({},"5d7f8lqFiJM6blUOq8a9Xqs","ActivityAutumnPassView",void 0);var P=1042,S=(t("default",function(t){function s(){var i;return(i=t.call(this)||this).btnRed=void 0,i.txtNum=void 0,i.txtNumReward=void 0,i.numScroll=void 0,i.scroll=void 0,i.txtPrice=void 0,i.btnBuy=void 0,i.curPassId=0,i.passInfo=void 0,i.rewardScroe=[],i.name="ActivityAutumnPassView",i.url="ui/module/autumn/ActivityAutumnPassView",i}i(s,t);var d=s.prototype;return d.onInit=function(){var t=this,i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.txtNum=this.findChildComponent("view/banner/num/num",o),this.btnRed=this.findChild("view/banner/btnSend/red");var e=this.findChild("view/banner/btnSend");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){uiMgr.openView("ActivityAutumnPassSendView")})),this.txtPrice=this.findChildComponent("view/scroll/titleHigh/btnBuy/Label",o),this.btnBuy=this.findChild("view/scroll/titleHigh/btnBuy"),this.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){IS(b).Pay(IS(I).getPassInfo(t.curPassId).bundle_id)}));var s=this.findChildComponent("view/scroll",a);this.scroll=this.addUIList(s,S,!0,0),this.txtNumReward=this.findChildComponent("view/numReward/num",o);var d=this.findChildComponent("view/numReward/ScrollView",a);this.numScroll=this.addUIList(d,E)},d.registerUpdateHandler=function(){this.addEvent(w.BATTLE_PASS_INFO_UPDATE,this.updateBattlePass,this),normalEvent.on(m.GOODS_INFO_UPDATE,this.onBagUpdate,this)},d.onAfterOpen=function(){var t=IS(_).GetActivityInfo(y.AutumnPass);if(this.curPassId=t.roundCfg.group_id,this.passInfo=IS(I).getPassInfo(this.curPassId),this.passInfo){this.btnBuy.active=!this.passInfo.if_buy;var i=configPay_mall.getDataByKey(this.passInfo.bundle_id);this.txtPrice.string=IS(b).GetPriceString(i.cost_level),this.txtNumReward.string=this.passInfo.total_exp}else this.btnBuy.active=!0;var s=[].concat(configWartoken_reward.getDataByList("id",this.curPassId));s.sort((function(t,i){return t.level-i.level}));var n=0;this.rewardScroe[1]=0;for(var o=0;o<s.length;o++){var a=s[o];n+=a.exp,this.rewardScroe[a.level+1]=n}s.push({level:s[s.length-1].level+1}),this.scroll.datas=s;for(var d,r=p.autumn_panghong_gift,l=e(r);!(d=l()).done;){var h=d.value;if(h[0]==this.curPassId){this.numScroll.datas=h[1];break}}this.txtNum.string="x"+IS(x).getGoodsCountByGoodsGtid(P),this.btnRed.active=IS(x).getGoodsCountByGoodsGtid(P)>0},d.onBeforeClose=function(){},d.onDestroy=function(){},d.onBagUpdate=function(t,i){i==P&&(this.txtNum.string="x"+IS(x).getGoodsCountByGoodsGtid(P),this.btnRed.active=IS(x).getGoodsCountByGoodsGtid(P)>0)},d.updateBattlePass=function(){if(this.passInfo=IS(I).getPassInfo(this.curPassId),this.passInfo){this.btnBuy.active=!this.passInfo.if_buy;var t=configPay_mall.getDataByKey(this.passInfo.bundle_id);this.txtPrice.string=IS(b).GetPriceString(t.cost_level),this.txtNumReward.string=this.passInfo.total_exp}else this.btnBuy.active=!0;this.scroll.updateAll(),this.numScroll.updateAll()},s}(G)),function(t){function s(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).state1=void 0,i.state2=void 0,i.scrollNormal=void 0,i.scrollHigh=void 0,i.lockNode=void 0,i.txtLev=void 0,i.imgLev=void 0,i.pbExp=void 0,i.boxDesc=void 0,i.boxCount=void 0,i.boxExp=void 0,i.boxPb=void 0,i.boxImg=void 0,i}i(s,t);var l=s.prototype;return l.onInit=function(){var t=this;this.adaptiveSize=!0,this.state1=u.findChild(this.node,"state1"),this.state2=u.findChild(this.node,"state2"),this.lockNode=u.findChild(this.node,"state1/high/lock"),this.imgLev=u.findChildComponent(this.node,"state1/pbExp/icon",d),this.txtLev=u.findChildComponent(this.node,"state1/pbExp/icon/txtLabel",o),this.pbExp=u.findChildComponent(this.node,"state1/pbExp",r);var i=u.findChildComponent(this.node,"state1/normal/scroll",a);this.scrollNormal=this.view.addUIList(i,L,!1,0),this.scrollNormal.touchEvent=!1,this.scrollNormal.lackCenter=!0;var e=u.findChildComponent(this.node,"state1/high/scroll",a);this.scrollHigh=this.view.addUIList(e,B,!1,0),this.scrollHigh.touchEvent=!1,this.scrollNormal.lackCenter=!0,this.boxDesc=u.findChildComponent(this.node,"state2/imgExtBG/Label",o),this.boxCount=u.findChildComponent(this.node,"state2/txtExtCount",o),this.boxExp=u.findChildComponent(this.node,"state2/pbExperience/txtExtExp",o),this.boxPb=u.findChildComponent(this.node,"state2/pbExperience",r),this.boxImg=u.findChildComponent(this.node,"state2/imgBox",d),this.view.addComponentCallbackListener(this.boxImg.node,n.EventType.CLICK,(function(){t.onGetExtReward()}));var s=u.findChild(this.node,"state1/high/lock/btnLock");this.view.addComponentCallbackListener(s,n.EventType.CLICK,(function(){IS(b).Pay(IS(I).getPassInfo(t.view.curPassId).bundle_id)}));var l=u.findChild(this.node,"state1/high/lock/mask");this.view.addComponentCallbackListener(l,n.EventType.CLICK,(function(){IS(b).Pay(IS(I).getPassInfo(t.view.curPassId).bundle_id)}))},l.onRender=function(t,i){var e=this.view.passInfo;e&&t.level>e.max_lev?(this.state1.active=!1,this.state2.active=!0,this.ut.height=210,this.showBox()):(this.state1.active=!0,this.state2.active=!1,this.ut.height=120,this.showLev())},l.showLev=function(){var t=this.view.passInfo,i=this.data;if(this.txtLev.string=this.view.rewardScroe[i.level],this.lockNode.active=!!t&&!t.if_buy,t){var s,n;t.lev>=i.level?this.view.loadIcon(this.imgLev,"autumn_pass","zq_ui_numbg01"):this.view.loadIcon(this.imgLev,"autumn_pass","zq_ui_numbg02");var o=null!=(s=null==(n=configWartoken_reward.getDataByKeys("id",t.id,"level",t.lev))?void 0:n.exp)?s:t.need_exp;0==o?this.pbExp.progress=1:i.level==t.lev+1?this.pbExp.progress=t.exp/o-.5:i.level==t.lev?this.pbExp.progress=.5+t.exp/o:i.level<t.lev?this.pbExp.progress=1:this.pbExp.progress=0}else this.pbExp.progress=0;for(var a,d=[],r=e(i.reward);!(a=r()).done;){var l=a.value;d.push({id:i.id,lev:i.level,rewrad:l})}this.scrollNormal.datas=d;for(var h,c=[],v=e(i.high_reward);!(h=v()).done;){var u=h.value;c.push({id:i.id,lev:i.level,rewrad:u})}this.scrollHigh.datas=c},l.showBox=function(){var t=this.view.passInfo;this.boxDesc.string=f.formatStrWithMirrorDeal(GetLanguage(200029),this.view.rewardScroe[t.max_lev],t.extra_need_exp,t.extra_max_times),this.boxCount.string="("+t.extra_times+"/"+t.extra_max_times+")",t.lev<t.max_lev?(this.boxExp.string="0/"+t.extra_need_exp,this.boxPb.progress=0):(this.boxImg.grayscale=t.exp<t.extra_need_exp,this.boxExp.string=t.exp+"/"+t.extra_need_exp,this.boxPb.progress=t.exp/t.extra_need_exp)},l.onGetExtReward=function(){var t=this.view.passInfo;t.extra_times>=t.extra_max_times?C.showFlyTip(GetLanguage(200030)):t.lev>=t.max_lev&&t.exp>=t.extra_need_exp?t.if_buy?1==this.view.curPassId?IS(g).reqBattlePassExtReward():IS(g).send_40_6(this.view.curPassId):C.showFlyTip(GetLanguage(200766)):C.showFlyTip(GetLanguage(200032))},s}(v)),L=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).canGet=void 0,i.received=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.canGet=u.findChild(this.node,"canGet"),this.received=u.findChild(this.node,"received"),this.itemGridNode=u.findChild(this.node,"itemGrid"),this.itemGrid=new c(this.view,this.itemGridNode,(function(){t.canGet.active?IS(g).send_40_5(t.view.curPassId,t.data.lev,1):IS(x).OpenItemTips(t.data.rewrad[0],t.node)}))},s.onRender=function(t,i){var e;this.itemGrid.SetItemId(t.rewrad[0],t.rewrad[1]);var s=null==(e=this.view.passInfo)?void 0:e.free_reward[t.lev-1].status;this.canGet.active=1==s,this.received.active=2==s},e}(v),B=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).canGet=void 0,i.received=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.canGet=u.findChild(this.node,"canGet"),this.received=u.findChild(this.node,"received"),this.itemGridNode=u.findChild(this.node,"itemGrid"),this.itemGrid=new c(this.view,this.itemGridNode,(function(){t.canGet.active?IS(g).send_40_5(t.view.curPassId,t.data.lev,2):IS(x).OpenItemTips(t.data.rewrad[0],t.node)}))},s.onRender=function(t,i){var e,s,n;this.itemGrid.SetItemId(t.rewrad[0],t.rewrad[1]);var o=null==(e=this.view.passInfo)?void 0:e.high_reward[t.lev-1].status;this.canGet.active=(null==(s=this.view.passInfo)?void 0:s.if_buy)&&1==o,this.received.active=(null==(n=this.view.passInfo)?void 0:n.if_buy)&&2==o},e}(v),E=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).txtDesc=void 0,i.itemGridNode=void 0,i.effNode=void 0,i.itemGrid=void 0,i.isReward=void 0,i.eff=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.txtDesc=u.findChildComponent(this.node,"desc",l),this.itemGridNode=u.findChild(this.node,"itemGrid"),this.effNode=u.findChild(this.node,"eff"),this.itemGrid=new c(this.view,this.itemGridNode,(function(){var i,e,s=null!=(i=null==(e=t.view)?void 0:e.passInfo.total_exp)?i:0;!t.isReward&&s>=t.data[1]?IS(g).send_40_8(t.view.curPassId,t.data[0]):IS(x).OpenItemTips(t.data[2][0],t.itemGridNode)}))},s.onRender=function(t,i){var e,s,n,o=t[2];this.itemGrid.SetItemId(o[0],o[1]);var a=null!=(e=null==(s=this.view)?void 0:s.passInfo.total_exp)?e:0,d=t[1];this.isReward=null==(n=this.view)?void 0:n.passInfo.specialReward[t[0]],this.view.removeUIEffect(this.eff),this.isReward?this.txtDesc.string=h.formatStr("<outline color=#21150f width=2><color=#ffffff>%s</color></outline>",GetLanguage(200314)):a>=d?(this.txtDesc.string=h.formatStr("<outline color=#21150f width=2><color=#ffffff>%s</color></outline>",GetLanguage(200732)),this.eff=this.view.addUIEffect("prefab/ui-effect/MX_tx_tongyong_daojulingqu",this.effNode,-1)):this.txtDesc.string=h.formatStr("<b><outline color=#21150f width=2><color=#ff1c1c>%s</color><color=#ffffff>/%s</color></outline></b>",a,d)},e}(v);s._RF.pop()}}}));

