System.register("chunks:///_virtual/ActivityMergeServersLotteryView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AudioMgr.ts","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./SpineSkeleton.ts","./FixMath.ts","./BagDefine.ts","./BagModel.ts","./ResItems.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,o,n,r,s,a,d,c,h,l,f,u,p,w,v,g,m,y,T,C,L,I,S,k,_,b,x,R,G,V,A,M;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose,o=t.regeneratorRuntime},function(t){n=t.cclegacy,r=t.Label,s=t.Button,a=t.ScrollView,d=t.Sprite,c=t.RichText,h=t.Layout,l=t.Toggle,f=t.js},function(t){u=t.V2},function(t){p=t.audioMgr},function(t){w=t.ItemGrid},function(t){v=t.ListItem},function(t){g=t.default},function(t){m=t.default},function(t){y=t.default},function(t){T=t.default},null,function(t){C=t.SpineSkeleton},function(t){L=t.FixMath},function(t){I=t.BagEventDefine},function(t){S=t.BagModel},function(t){k=t.ResItems},function(t){_=t.default},function(t){b=t.default},function(t){x=t.default},function(t){R=t.ActivityEventDefine,G=t.ActivityState,V=t.ActivityType},function(t){A=t.ViewEvent,M=t.BaseView}],execute:function(){n._RF.push({},"8290dqz92xKX5strIUOgTgT","ActivityMergeServersLotteryView",void 0);var D=["ArtifactGetView","HorseGetView","PlayerSkinGetView","FateNewView","GoodsGetView2","WingGetView"],E=(t("default",function(t){function n(){var e;return(e=t.call(this)||this).resItems=void 0,e.actType=void 0,e.txtRound=void 0,e.txtDrawNum=void 0,e.txtNumReward=void 0,e.numScroll=void 0,e.tipsGo=void 0,e.tipsScroll=void 0,e.togSkip=void 0,e.skipAnim=void 0,e.iconTen=void 0,e.iconOne=void 0,e.txtOne=void 0,e.txtTen=void 0,e.redOne=void 0,e.redTen=void 0,e.iconRewardOne=void 0,e.iconRewardTen=void 0,e.txtRewardOne=void 0,e.txtRewardTen=void 0,e.txtLeftTime=void 0,e.deltaTime=0,e.leftTime=0,e.canUpdate=!1,e.curTips=0,e.tipsTimer=0,e.rerwardList=[],e.rewardNum=10,e.lastItemNum=0,e.costId=0,e.waitRewardList=[],e.extraReward=void 0,e.jackpot=0,e.jackpotType=0,e.curIndex=0,e.finalIndex=0,e.reward_list=[],e.moveTween=void 0,e.bgEff=void 0,e.name="ActivityMergeServersLotteryView",e.url="ui/module/activityMergeServers/ActivityMergeServersLotteryView",e.actType=V.MergeServersLottery,e}e(n,t);var w=n.prototype;return w.onInit=function(){var t=this;this.costId=IS(x).getLotteryCost(this.actType)[0],this.resItems=new k(this),this.resItems.init([this.costId]),this.txtLeftTime=this.findChildComponent("root/top/nodeTime/txtTime",r);var e=this.findChild("root/btnClose");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.close()}));var i=this.findChild("root/bottomBtn/btnGift");this.addComponentCallbackListener(i,s.EventType.CLICK,(function(){uiMgr.openView("ActivityMergeServersLotteryGiftView",t.actType)}));var o=this.findChild("root/btnShow/btnShow");this.addComponentCallbackListener(o,s.EventType.CLICK,(function(){uiMgr.openView("ActivityMergeServersLotteryPreView",t.actType)}));var n=this.findChild("root/turn/img/nodeTips/btnTips");this.addComponentCallbackListener(n,s.EventType.CLICK,(function(){IS(x).ShowSysTips(t.actType)})),this.txtRound=this.findChildComponent("root/turn/img/round/Label",r),this.txtDrawNum=this.findChildComponent("root/turn/img/drawNum/Label",r),this.txtNumReward=this.findChildComponent("root/numReward/num",r);var f=this.findChildComponent("root/numReward/ScrollView",a);this.numScroll=this.addUIList(f,B),this.tipsGo=this.findChild("root/top/tips");var u=this.findChildComponent("root/top/tips/ScrollView",a);this.tipsScroll=this.addUIList(u,O),this.iconOne=this.findChildComponent("root/btnOne/icon",d),this.iconTen=this.findChildComponent("root/btnTen/icon",d),this.txtOne=this.findChildComponent("root/btnOne/num",c),this.txtTen=this.findChildComponent("root/btnTen/num",c),this.redOne=this.findChild("root/btnOne/red"),this.redTen=this.findChild("root/btnTen/red"),this.iconRewardOne=this.findChildComponent("root/btnOne/back/iconBack",d),this.iconRewardTen=this.findChildComponent("root/btnTen/back/iconBack",d),this.txtRewardOne=this.findChildComponent("root/btnOne/back/numBack",r),this.txtRewardTen=this.findChildComponent("root/btnTen/back/numBack",r);var p=this.findChild("root/btnOne");this.dealMirrorLayout(this.findChildComponent("root/btnOne/back",h)),this.addComponentCallbackListener(p,s.EventType.CLICK,(function(){t.onLottery(1)}));var w=this.findChild("root/btnTen");this.dealMirrorLayout(this.findChildComponent("root/btnTen/back",h)),this.addComponentCallbackListener(w,s.EventType.CLICK,(function(){t.onLottery(2)})),this.togSkip=this.findChildComponent("root/toggleSkip",l),this.loadIcon(this.findChildComponent("root/toggleSkip/Checkmark",d),"zqkh","zqkh_ui_gouxuan01"),this.addComponentCallbackListener(this.togSkip.node,l.EventType.TOGGLE,(function(){t.togSkip.isChecked?m.set("skipActLottery","1"):m.set("skipActLottery","0")})),this.skipAnim=this.findChild("skipAnim"),this.addComponentCallbackListener(this.skipAnim,s.EventType.CLICK,(function(){t.SkipAnim()}));for(var v=0;v<this.rewardNum;v++){var g=new E;g.init(this.findChild("root/turn/itemRoll/itemGrid"+v),this,v),this.rerwardList.push(g)}},w.registerUpdateHandler=function(){this.addEvent(R.OnActivityLotteryUpdate,this.updateInfo,this),this.addEvent(R.OnActivityLotteryReawrdUpdate,this.updateNumReward,this),this.addEvent(R.OnActivityLotteryChooseUpdate,this.updateReward,this),this.addEvent(R.OnActivityLotteryCallBack,this.updateLotteryResult,this),this.addEvent(I.GOODS_INFO_UPDATE,this.updateResShow,this),this.addEvent(A.ViewClose,this.onViewClose,this)},w.onAfterOpen=function(){var t;IS(x).isLotteryAnim=!1,this.bgEff=null,this.updateResShow(),IS(b).send_act_double_draw_info(this.actType),this.togSkip.isChecked="1"==m.get("skipActLottery"),this.skipAnim.active=!1;var e=IS(x).GetActivityInfo(this.actType),i=null!=(t=e.state_time[e.state])?t:e.state_time[G.Open];this.leftTime=i.end_time-T.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=T.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(200026);var o=configGoods.getDataByKey(this.costId);this.loadIcon(this.iconOne,o.icon_group,o.icon),this.loadIcon(this.iconTen,o.icon_group,o.icon);var n=IS(x).getLotteryDrawReward(this.actType),r=configGoods.getDataByKey(n[0]);this.loadIcon(this.iconRewardOne,r.icon_group,r.icon),this.loadIcon(this.iconRewardTen,r.icon_group,r.icon),this.txtRewardOne.string=f.formatStr("x%s",n[1]),this.txtRewardTen.string=f.formatStr("x%s",10*n[1]);var s=configDouble_cumulative_reward.getDatas(),a=[];for(var d in s)if(s.hasOwnProperty(d)){var c=s[d];c.act_type==e.type&&c.group_id==e.roundCfg.group_id&&a.push(c)}a.sort((function(t,e){return t.time-e.time})),this.numScroll.datas=a;for(var h=0,l=IS(x).getLotteryInfo(this.actType),p=0;p<a.length;p++){h=p;var w=a[p],v=l.count_reward_list[w.id];if(l.count<w.time)break;if(!v&&l.count>=w.time)break}if(this.numScroll.scrollTo(h,.02),null==this.bgEff){this.bgEff=this.addUIEffect("prefab/ui-effect/MX_tx_famuqubao_qiao",this.findChild("root/eff"),-1,new u(62,-337),1,(function(t){t.node.getComponent(C).needAnimation="idle"}))}},w.onBeforeClose=function(){this.canUpdate=!1,this.tipsTimer=0},w.onDestroy=function(){},w.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=T.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},w.updateResShow=function(){0==this.lastItemNum&&this.resItems.update();var t,e,i=IS(x).getLotteryCost(this.actType),o=IS(S).getGoodsCountByGoodsGtid(i[0]);this.redOne.active=o>=i[1],this.redTen.active=o>=10*i[1],o>=i[1]?(e="#5aff42",t="#27720d"):(e="#ff1f1f",t="#891000"),this.txtOne.string=f.formatStr("<b><outline color=%s width=2><color=%s>%s<color></outline></b>",t,e,i[1]),o>=10*i[1]?(e="#5aff42",t="#27720d"):(e="#ff1f1f",t="#891000"),this.txtTen.string=f.formatStr("<b><outline color=%s width=2><color=%s>%s<color></outline></b>",t,e,10*i[1])},w.updateInfo=function(){var t=this;if(!IS(x).isLotteryAnim){var e=IS(x).getLotteryInfo(this.actType);this.tipsGo.active=e.lucky_list.length>0,0!=this.tipsTimer&&this.removeTimer(this.tipsTimer),this.tipsGo.active&&(this.tipsScroll.datas=e.lucky_list,this.curTips=0,this.tipsTimer=this.addTimer(1,-1,(function(){t.curTips=t.curTips+1,t.curTips==e.lucky_list.length&&(t.curTips=0);var i=0==t.curTips?.2:1;t.tipsScroll.scrollTo(t.curTips,i)}))),this.updateReward(),this.updateNumReward()}},w.updateNumReward=function(){this.numScroll.updateAll()},w.updateReward=function(){var t=IS(x).getLotteryInfo(this.actType);this.txtNumReward.string=t.count,this.txtRound.string=y.formatStr(GetLanguage(303637),t.round),this.txtDrawNum.string=y.formatStr(GetLanguage(303573),t.remain_to_mid);for(var e,o=[],n=configDouble_probabillity.getDatas(),r=i(n);!(e=r()).done;){var s=e.value;s.id==t.round_cfg_id&&o.push(s)}o.sort((function(t,e){return t.order-e.order}));for(var a=0;a<this.rewardNum;a++)this.rerwardList[a].show(o[a])},w.onLottery=function(t){for(var e,o=i(this.rerwardList);!(e=o()).done;){if(e.value.notSet.active)return void _.showFlyTip(GetLanguage(303642))}var n=IS(x).getLotteryCost(this.actType),r=n[0],s=n[1];2==t&&(s*=10),IS(S).getGoodsCountByGoodsGtid(r)>=s?IS(b).send_act_double_draw_draw(this.actType,t):uiMgr.openView("ActivityMergeServersLotteryGiftView",this.actType)},w.updateLotteryResult=function(t){var e=this;if(t.act_type==this.actType){var i=IS(x).getLotteryDrawReward(this.actType),o=i[1]*t.id_list.length;if(this.extraReward=[i[0],o],this.checkJackpot(t.id_list),this.togSkip.isChecked)return 0!=this.jackpot?(this.openTypeView(this.jackpot,this.jackpotType),this.waitRewardList=t.reward_list,this.jackpot=0,this.jackpotType=0):(uiMgr.openView("GoodsGetView",t.reward_list,this.extraReward),this.extraReward=null),IS(x).isLotteryAnim=!1,void this.updateInfo();var n=t.id_list[t.id_list.length-1];this.finalIndex=configDouble_probabillity.getDataByKey(n).order-1,this.reward_list=t.reward_list,this.skipAnim.active=!0,coroutine.stopGroup("ActLottery"),1==t.id_list.length?coroutine.start(this.doLotteryTween(this.finalIndex,(function(){for(var i=0;i<e.rerwardList.length;i++)e.rerwardList[i].select.active=!1,e.rerwardList[i].light.active=!1;(e.rerwardList[e.finalIndex].select.active=!0,e.rerwardList[e.finalIndex].light.active=!0,e.curIndex=e.finalIndex,0!=e.jackpot?(e.waitRewardList=t.reward_list,e.openTypeView(e.jackpot,e.jackpotType),e.jackpot=0,e.jackpotType=0):(uiMgr.openView("GoodsGetView",t.reward_list,e.extraReward),e.extraReward=null),e.skipAnim.active=!1,IS(x).isLotteryAnim=!1,e.updateInfo(),null!=e.bgEff)&&e.getUIEffect(e.bgEff).node.getComponent(C).setAnimation(0,"idle",!0)})),"ActLottery"):this.lotteryNext(0,t)}},w.lotteryNext=function(t,e){var i,o=this,n=configDouble_probabillity.getDataByKey(e.id_list[t]).order-1;i=t<e.id_list.length-1?function(){o.curIndex=n,o.lotteryNext(t+1,e)}:function(){for(var t=0;t<o.rerwardList.length;t++)o.rerwardList[t].select.active=!1,o.rerwardList[t].light.active=!1;(o.rerwardList[n].select.active=!0,o.rerwardList[n].light.active=!0,o.curIndex=n,0!=o.jackpot?(o.waitRewardList=e.reward_list,o.openTypeView(o.jackpot,o.jackpotType),o.jackpot=0,o.jackpotType=0):(uiMgr.openView("GoodsGetView",e.reward_list,o.extraReward),o.extraReward=null),o.skipAnim.active=!1,IS(x).isLotteryAnim=!1,o.updateInfo(),null!=o.bgEff)&&o.getUIEffect(o.bgEff).node.getComponent(C).setAnimation(0,"idle",!0);coroutine.stopGroup("ActLottery")},coroutine.start(this.doLotteryTween(n,i),"ActLottery")},w.doLotteryTween=o().mark((function t(e,i){var n,r,s,a,d,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=this.moveTween&&this.moveTween.stop(),p.playSound("hefu_famuqubao"),n=2*this.rewardNum+e-this.curIndex,r=0;case 4:if(!(r<=n)){t.next=14;break}for(s=L.round(n*(r/n)),a=Math.floor((s+this.curIndex)%this.rewardNum),d=0;d<this.rerwardList.length;d++)this.rerwardList[d].select.active=!1,this.rerwardList[d].light.active=!1;return this.rerwardList[a].select.active=!0,t.next=11,coroutine.wait(.1);case 11:r++,t.next=4;break;case 14:return null!=this.bgEff&&(c=this.getUIEffect(this.bgEff),c.node.getComponent(C).setAnimation(0,this.rerwardList[e].nodeBig.active?"skill2":"skill1",!1)),t.next=17,coroutine.wait(1.5);case 17:i();case 18:case"end":return t.stop()}}),t,this)})),w.SkipAnim=function(){null!=this.moveTween&&this.moveTween.stop();for(var t=0;t<this.rerwardList.length;t++)this.rerwardList[t].select.active=!1,this.rerwardList[t].light.active=!1;(this.rerwardList[this.finalIndex].select.active=!0,this.rerwardList[this.finalIndex].light.active=!0,this.curIndex=this.finalIndex,0!=this.jackpot?(this.waitRewardList=this.reward_list,this.openTypeView(this.jackpot,this.jackpotType),this.jackpot=0,this.jackpotType=0):(uiMgr.openView("GoodsGetView",this.reward_list,this.extraReward),this.extraReward=null),this.skipAnim.active=!1,IS(x).isLotteryAnim=!1,this.updateInfo(),null!=this.bgEff)&&this.getUIEffect(this.bgEff).node.getComponent(C).setAnimation(0,"idle",!0);coroutine.stopGroup("ActLottery")},w.checkJackpot=function(t){this.jackpot=0,this.jackpotType=0;for(var e,o=i(t);!(e=o()).done;){var n=e.value,r=configDouble_probabillity.getDataByKey(n);if(r.goods_type)if(r.reward_replace.length>0){var s,a=null!=(s=IS(x).getLotteryInfo(this.actType).choose_list[r.reward_id])?s:0;if(a>0)for(var d,c=i(r.reward_replace);!(d=c()).done;){var h=d.value;if(h[0]==a&&r.goods_type)return this.jackpot=h[1][0],this.jackpotType=r.goods_type,!0}else if(r.goods_type)return this.jackpot=r.reward[0],this.jackpotType=r.goods_type,!0}else if(r.goods_type)return this.jackpot=r.reward[0],this.jackpotType=r.goods_type,!0}return!1},w.onViewClose=function(t){this.waitRewardList.length<=0||D.includes(t)&&(uiMgr.openView("GoodsGetView",this.waitRewardList,this.extraReward),this.extraReward=null,this.waitRewardList=[])},w.openTypeView=function(t,e){switch(e){case 1:return void uiMgr.openView("ArtifactGetView",configGoods.getDataByKey(t).effect[0],!0);case 2:return void uiMgr.openView("HorseGetView",configGoods.getDataByKey(t).effect[0],!0);case 3:return void uiMgr.openView("PlayerSkinGetView",configGoods.getDataByKey(t).effect[0],!0);case 4:return void uiMgr.openView("FateNewView",configGoods.getDataByKey(t).effect[0]);case 5:switch(configGoods.getDataByKey(t).type){case 28:uiMgr.openView("ArtifactGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 27:uiMgr.openView("HorseGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 11:uiMgr.openView("PlayerSkinGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 12:uiMgr.openView("FateNewView",configGoods.getDataByKey(t).effect[0]);break;case 32:uiMgr.openView("WingGetView",configGoods.getDataByKey(t).effect[0],!0);break;default:uiMgr.openView("GoodsGetView2",t)}}},n}(M)),function(){function t(){this.view=void 0,this.node=void 0,this.index=void 0,this.data=void 0,this.nodeReward=void 0,this.notSet=void 0,this.nodeBig=void 0,this.mask=void 0,this.btnSelect=void 0,this.imgIcon=void 0,this.txtNum=void 0,this.txtLimit=void 0,this.select=void 0,this.light=void 0,this.reward=void 0,this.eff=void 0}var e=t.prototype;return e.init=function(t,e,i){this.view=e,this.node=t,this.index=i,this.onInit()},e.onInit=function(){var t=this;this.nodeReward=g.findChild(this.node,"nodeReward"),this.nodeBig=g.findChild(this.node,"nodeBig"),this.mask=g.findChild(this.node,"nodeReward/mask"),this.select=g.findChild(this.node,"select"),this.light=g.findChild(this.node,"light"),this.txtNum=g.findChildComponent(this.node,"nodeReward/num",r),this.txtLimit=g.findChildComponent(this.node,"nodeReward/nodeLimit/Node",r),this.imgIcon=g.findChildComponent(this.node,"nodeReward/imgIcon",d),this.view.addComponentCallbackListener(this.imgIcon.node,s.EventType.CLICK,(function(){t.reward&&IS(S).OpenItemTips(t.reward[0],t.imgIcon.node)})),this.notSet=g.findChild(this.node,"notSet"),this.view.addComponentCallbackListener(this.notSet,s.EventType.CLICK,(function(){var e=t.view;uiMgr.openView("ActivityMergeServersLotterySelectView",e.actType,t.data.reward_id)})),this.btnSelect=g.findChild(this.node,"nodeReward/btnSelect"),this.view.addComponentCallbackListener(this.btnSelect,s.EventType.CLICK,(function(){var e=t.view;uiMgr.openView("ActivityMergeServersLotterySelectView",e.actType,t.data.reward_id)})),this.view.loadIcon(g.findChildComponent(this.node,"nodeReward/mask/common_ui_dagou",d),"common","common_ui_dagou")},e.show=function(t){var e=this;this.data=t,this.nodeBig.active=1==t.reward_type||2==t.reward_type;var o=this.view,n=IS(x).getLotteryInfo(o.actType);if(this.reward=null,t.reward_replace.length>0){var r,s=null!=(r=n.choose_list[t.reward_id])?r:0;if(0!=s){this.nodeReward.active=!0,this.notSet.active=!1,this.btnSelect.active=!0;for(var a,d=i(t.reward_replace);!(a=d()).done;){var c=a.value;if(c[0]==s){this.reward=c[1];break}}}else this.nodeReward.active=!1,this.notSet.active=!0,this.btnSelect.active=!1}else this.nodeReward.active=!0,this.notSet.active=!1,this.btnSelect.active=!1,this.reward=t.reward;if(this.reward){var h;this.txtNum.string=this.reward[1];var l=configGoods.getDataByKey(this.reward[0]);this.view.loadIcon(this.imgIcon,l.icon_group,l.icon);var f=t.reward_limit-(null!=(h=n.draw_count_list[t.reward_id])?h:0);this.txtLimit.string=String(f),this.mask.active=0==f}this.eff&&this.view.removeUIEffect(this.eff),this.eff=this.view.addUIEffect("prefab/ui-effect/MX_tx_famuqubao_pao",this.select,-1,new u(0,-15),1,(function(t){t.node.getComponent(C).needAnimation=e.nodeBig.active?"idle_2":"idle_1"}))},t}()),B=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).txtDesc=void 0,e.itemGridNode=void 0,e.effNode=void 0,e.itemGrid=void 0,e.isReward=void 0,e.eff=void 0,e}e(i,t);var o=i.prototype;return o.onInit=function(){var t=this;this.txtDesc=g.findChildComponent(this.node,"desc",c),this.itemGridNode=g.findChild(this.node,"itemGrid"),this.effNode=g.findChild(this.node,"eff"),this.itemGrid=new w(this.view,this.itemGridNode,(function(){var e=t.view,i=IS(x).getLotteryInfo(e.actType);!t.isReward&&i.count>=t.data.time?IS(b).send_act_double_draw_count_reward(e.actType,t.data.id):IS(S).OpenItemTips(t.data.reward[0],t.itemGridNode)}))},o.onRender=function(t,e){this.itemGrid.SetItemId(t.reward[0],t.reward[1]);var i=this.view,o=IS(x).getLotteryInfo(i.actType);this.isReward=o.count_reward_list[t.id],this.view.removeUIEffect(this.eff),this.isReward?this.txtDesc.string=f.formatStr("<b><color=#80342e>%s</color></b>",GetLanguage(200314)):o.count>=t.time?(this.txtDesc.string=f.formatStr("<b><color=#34951a>%s</color></b>",GetLanguage(200732)),this.eff=this.view.addUIEffect("prefab/ui-effect/MX_tx_tongyong_daojulingqu",this.effNode,-1)):this.txtDesc.string=f.formatStr("<b><color=#ff1c1c>%s</color><color=#80342e>/%s</color></b>",o.count,t.time)},i}(v),O=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).txt=void 0,e}e(i,t);var o=i.prototype;return o.onInit=function(){this.txt=g.findChildComponent(this.node,"txt",c)},o.onRender=function(t,e){var i=configGoods.getDataByKey(t.k).name;this.txt.string=y.formatStrWithMirrorDeal(GetLanguage(200050),t.s,i)},i}(v);n._RF.pop()}}}));
