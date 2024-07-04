System.register("chunks:///_virtual/ActivityPoolPartyEndPassView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./ObjectUtil.ts","./BagDefine.ts","./BagModel.ts","./BattlePassControl.ts","./BattlePassDataCache.ts","./BattlePassDefine.ts","./MessageView.ts","./PayDataCache.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,s,n,o,a,r,d,l,h,c,v,u,f,p,g,m,w,C,x,I,y,b,P,_,S,G,L,B,T,E;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){s=t.cclegacy,n=t.Button,o=t.Label,a=t.ScrollView,r=t.UITransform,d=t.Node,l=t.Vec3,h=t.ProgressBar,c=t.Sprite,v=t.RichText},function(t){u=t.ItemGrid},function(t){f=t.ListItem},function(t){p=t.default},function(t){g=t.default},function(t){m=t.default},null,function(t){w=t.ConfigGlobal},function(t){C=t.default},function(t){x=t.BagEventDefine,I=t.ItemIdDefine},function(t){y=t.BagModel},function(t){b=t.default},function(t){P=t.BattlePassDataCache},function(t){_=t.BattlePassDefine},function(t){S=t.default},function(t){G=t.default},function(t){L=t.default},function(t){B=t.ActivityType,T=t.ActivityState},function(t){E=t.BaseView}],execute:function(){s._RF.push({},"a768cBBjNJNMIO38rtW7Ree","ActivityPoolPartyEndPassView",void 0);var N=1224,R=(t("default",function(t){function s(){var i;return(i=t.call(this)||this).btnRed=void 0,i.txtNum=void 0,i.txtNumReward=void 0,i.numScroll=void 0,i.scroll=void 0,i.txtPrice=void 0,i.btnBuy=void 0,i.txtPrice2=void 0,i.btnBuy2=void 0,i.curPassId=0,i.passInfo=void 0,i.rewardScroe=[],i.lineScrollContent=void 0,i.lineScrollProgress=void 0,i.numScrollList=void 0,i.txtLeftTime=void 0,i.leftTime=0,i.deltaTime=0,i.canUpdate=!1,i.name="ActivityPoolPartyEndPassView",i.url="ui/module/activityPoolParty/ActivityPoolPartyEndPassView",i}i(s,t);var c=s.prototype;return c.onInit=function(){var t=this,i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.txtLeftTime=this.findChildComponent("view/bg/nodeTime/txtTime",o),this.txtNum=this.findChildComponent("view/bg/banner/num/num",o),this.btnRed=this.findChild("view/bg/banner/btnSend/red");var e=this.findChild("view/bg/banner/btnSend");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){uiMgr.openView("ActivityPoolPartyPassUseView",N)})),this.txtPrice=this.findChildComponent("view/bg/scroll/titleHigh/btnBuy/Label",o),this.btnBuy=this.findChild("view/bg/scroll/titleHigh/btnBuy"),this.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){t.buyPass(1)})),this.txtPrice2=this.findChildComponent("view/bg/scroll/titleHigh2/btnBuy/Label",o),this.btnBuy2=this.findChild("view/bg/scroll/titleHigh2/btnBuy"),this.addComponentCallbackListener(this.btnBuy2,n.EventType.CLICK,(function(){t.buyPass(2)}));var s=this.findChildComponent("view/bg/scroll",a);this.scroll=this.addUIList(s,R,!0,0),this.txtNumReward=this.findChildComponent("view/bg/numReward/num",o);var c=this.findChildComponent("view/bg/numReward/ScrollView",a);this.numScroll=this.addUIList(c,U),this.lineScrollContent=this.findChildComponent("view/bg/numReward/lineScroll/content",r);var v=this.findChild("view/bg/numReward/ScrollView/view/content");this.addComponentCallbackListener(v,d.EventType.TRANSFORM_CHANGED,(function(i){i&d.TransformBit.POSITION&&(t.lineScrollContent.node.position=new l(v.position.x,0,0))})),this.lineScrollProgress=this.findChildComponent("view/bg/numReward/lineScroll/content/ProgressBar",h)},c.registerUpdateHandler=function(){this.addEvent(_.BATTLE_PASS_INFO_UPDATE,this.updateBattlePass,this),this.addEvent(x.GOODS_INFO_UPDATE,this.onBagUpdate,this)},c.onAfterOpen=function(){var t,i=this,s=IS(L).GetActivityInfo(B.PoolPartyEndPass);if(this.curPassId=s.roundCfg.group_id,this.passInfo=IS(P).getPassInfo(this.curPassId),this.passInfo){this.btnBuy.active=!this.passInfo.if_buy,this.btnBuy2.active=!this.passInfo.if_buy_2;var n=configPay_mall.getDataByKey(this.passInfo.bundle_id);this.txtPrice.string=IS(G).GetPriceString(n.cost_level);var o=configPay_mall.getDataByKey(configWartoken.getDataByKey(this.curPassId).bundle_id2);this.txtPrice2.string=IS(G).GetPriceString(o.cost_level),this.txtNumReward.string=this.passInfo.total_exp}else this.btnBuy.active=!0,this.btnBuy2.active=!0;var a=C.copyArray(null!=(t=configWartoken_reward.getDataByList("id",this.curPassId))?t:[]);a.sort((function(t,i){return t.level-i.level}));a.length;var r=0;this.rewardScroe[1]=0;for(var d=0;d<a.length;d++){var l=a[d];l&&(r+=l.exp,this.rewardScroe[l.level+1]=r)}a.push({level:a[a.length-1].level+1}),this.scroll.setCustomItemsSize(a,(function(t){return a[t].level<=i.passInfo.max_lev?115:150}),!0),this.scroll.datas=a;for(var h,c=w.autumn_panghong_gift,v=e(c);!(h=v()).done;){var u=h.value;if(u[0]==this.curPassId){this.numScrollList=u[1],this.numScroll.datas=u[1];break}}for(var f=0,p=-1,x=0;x<this.numScrollList.length;x++){var I,_=null!=(I=this.passInfo.total_exp)?I:0,S=this.numScrollList[x][1],E=this.passInfo.specialReward[this.numScrollList[x][0]];_>=S&&(f++,-1!=p||E||(p=x))}this.lineScrollContent.width=90*this.numScrollList.length+26*(this.numScrollList.length-1)+20,this.lineScrollProgress.totalLength=this.lineScrollContent.width;var R=0;if(f>0&&(R=90*f+26*(f-1)+20),this.lineScrollProgress.progress=R/this.lineScrollProgress.totalLength,this.txtNum.string="x"+IS(y).getGoodsCountByGoodsGtid(N),this.btnRed.active=IS(y).getGoodsCountByGoodsGtid(N)>0,b.checkRewardRP(this.curPassId)>=0?this.scroll.scrollTo(b.checkRewardRP(this.curPassId)):this.scroll.scrollTo(b.checkRewardRoll(this.curPassId)),this.numScroll.scrollTo(p),s){var k,D=null!=(k=s.state_time[s.state])?k:s.state_time[T.Open];this.leftTime=D.end_time-m.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=g.formatStrWithMirrorDeal("%s",m.formatTimeStringForSecond(this.leftTime))):this.txtLeftTime.string=GetLanguage(200026)}else this.txtLeftTime.string=GetLanguage(200026)},c.onBeforeClose=function(){this.canUpdate=!0},c.onDestroy=function(){},c.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=g.formatStrWithMirrorDeal("%s",m.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},c.buyPass=function(t){var i=configWartoken.getDataByKey(this.curPassId),e=1==t?i.bundle_id:i.bundle_id2,s=configPay_mall.getDataByKey(e);IS(y).getGoodsCountByGoodsGtid(I.FakeRechare)>=s.price?uiMgr.openView("ActivityPoolPartyPassBuyView",B.PoolPartyEndPass,t):IS(G).Pay(e)},c.onBagUpdate=function(t,i){i==N&&(this.txtNum.string="x"+IS(y).getGoodsCountByGoodsGtid(N),this.btnRed.active=IS(y).getGoodsCountByGoodsGtid(N)>0)},c.updateBattlePass=function(){if(this.passInfo=IS(P).getPassInfo(this.curPassId),this.passInfo){this.btnBuy.active=!this.passInfo.if_buy,this.btnBuy2.active=!this.passInfo.if_buy_2;var t=configPay_mall.getDataByKey(this.passInfo.bundle_id);this.txtPrice.string=IS(G).GetPriceString(t.cost_level);var i=configPay_mall.getDataByKey(configWartoken.getDataByKey(this.curPassId).bundle_id2);this.txtPrice2.string=IS(G).GetPriceString(i.cost_level),this.txtNumReward.string=this.passInfo.total_exp}else this.btnBuy.active=!0,this.btnBuy2.active=!0;this.scroll.updateAll(),this.numScroll.updateAll();for(var e=0,s=0;s<this.numScrollList.length;s++){var n;(null!=(n=this.passInfo.total_exp)?n:0)>=this.numScrollList[s][1]&&e++}var o=0;e>0&&(o=90*e+26*(e-1)+20),this.lineScrollProgress.progress=o/this.lineScrollProgress.totalLength},s}(E)),function(t){function s(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).state1=void 0,i.state2=void 0,i.scrollNormal=void 0,i.scrollHigh=void 0,i.scrollHigh2=void 0,i.lockNode=void 0,i.lockNode2=void 0,i.txtLev=void 0,i.imgLev=void 0,i.pbExp=void 0,i.boxDesc=void 0,i.boxCount=void 0,i.boxExp=void 0,i.boxPb=void 0,i.boxImg=void 0,i}i(s,t);var r=s.prototype;return r.onInit=function(){var t=this;this.state1=p.findChild(this.node,"state1"),this.state2=p.findChild(this.node,"state2"),this.lockNode=p.findChild(this.node,"state1/high/lock"),this.lockNode2=p.findChild(this.node,"state1/high2/lock"),this.imgLev=p.findChildComponent(this.node,"state1/pbExp/icon",c),this.txtLev=p.findChildComponent(this.node,"state1/pbExp/icon/txtLabel",o),this.pbExp=p.findChildComponent(this.node,"state1/pbExp",h);var i=p.findChildComponent(this.node,"state1/normal/scroll",a);this.scrollNormal=this.view.addUIList(i,k,!1,0),this.scrollNormal.touchEvent=!1,this.scrollNormal.lackCenter=!0;var e=p.findChildComponent(this.node,"state1/high/scroll",a);this.scrollHigh=this.view.addUIList(e,D,!1,0),this.scrollHigh.touchEvent=!1,this.scrollHigh.lackCenter=!0;var s=p.findChildComponent(this.node,"state1/high2/scroll",a);this.scrollHigh2=this.view.addUIList(s,A,!1,0),this.scrollHigh2.touchEvent=!1,this.scrollHigh2.lackCenter=!0,this.boxDesc=p.findChildComponent(this.node,"state2/imgExtBG/Label",o),this.boxCount=p.findChildComponent(this.node,"state2/txtExtCount",o),this.boxExp=p.findChildComponent(this.node,"state2/pbExperience/txtExtExp",o),this.boxPb=p.findChildComponent(this.node,"state2/pbExperience",h),this.boxImg=p.findChildComponent(this.node,"state2/imgBox",c),this.view.addComponentCallbackListener(this.boxImg.node,n.EventType.CLICK,(function(){t.onGetExtReward()}));var r=p.findChild(this.node,"state1/high/lock/btnLock");this.view.addComponentCallbackListener(r,n.EventType.CLICK,(function(){t.view.buyPass(1)}));var d=p.findChild(this.node,"state1/high/lock/mask");this.view.addComponentCallbackListener(d,n.EventType.CLICK,(function(){t.view.buyPass(1)}));var l=p.findChild(this.node,"state1/high2/lock/btnLock");this.view.addComponentCallbackListener(l,n.EventType.CLICK,(function(){t.view.buyPass(2)}));var v=p.findChild(this.node,"state1/high2/lock/mask");this.view.addComponentCallbackListener(v,n.EventType.CLICK,(function(){t.view.buyPass(2)}))},r.onRender=function(t,i){var e=this.view.passInfo;e&&t.level>e.max_lev?(this.state1.active=!1,this.state2.active=!0,this.showBox()):(this.state1.active=!0,this.state2.active=!1,this.showLev())},r.showLev=function(){var t=this.view.passInfo,i=this.data;if(this.txtLev.string=this.view.rewardScroe[i.level],this.lockNode.active=!!t&&!t.if_buy,this.lockNode2.active=!!t&&!t.if_buy_2,t){var s,n,o=null!=(s=null==(n=configWartoken_reward.getDataByKeys("id",t.id,"level",t.lev))?void 0:n.exp)?s:t.need_exp;0==o?this.pbExp.progress=1:i.level==t.lev+1?this.pbExp.progress=t.exp/o-.5:i.level==t.lev?this.pbExp.progress=.5+t.exp/o:i.level<t.lev?this.pbExp.progress=1:this.pbExp.progress=0}else this.pbExp.progress=0;for(var a,r=[],d=e(i.reward);!(a=d()).done;){var l=a.value;r.push({id:i.id,lev:i.level,rewrad:l})}this.scrollNormal.datas=r;for(var h,c=[],v=e(i.high_reward);!(h=v()).done;){var u=h.value;c.push({id:i.id,lev:i.level,rewrad:u})}this.scrollHigh.datas=c;for(var f,p=[],g=e(i.middle_reward);!(f=g()).done;){var m=f.value;p.push({id:i.id,lev:i.level,rewrad:m})}this.scrollHigh2.datas=p},r.showBox=function(){var t=this.view.passInfo;this.boxDesc.string=g.formatStr(GetLanguage(201750),this.view.rewardScroe[t.max_lev],GetLanguage(104487),t.extra_need_exp,GetLanguage(104487),t.extra_max_times),this.boxCount.string="("+t.extra_times+"/"+t.extra_max_times+")",t.lev<t.max_lev?(this.boxExp.string="0/"+t.extra_need_exp,this.boxPb.progress=0):(this.boxImg.grayscale=t.exp<t.extra_need_exp,this.boxExp.string=t.exp+"/"+t.extra_need_exp,this.boxPb.progress=t.exp/t.extra_need_exp)},r.onGetExtReward=function(){var t=this.view.passInfo;t.extra_times>=t.extra_max_times?S.showFlyTip(GetLanguage(200030)):t.lev>=t.max_lev&&t.exp>=t.extra_need_exp?t.if_buy?1==this.view.curPassId?IS(b).reqBattlePassExtReward():IS(b).send_40_6(this.view.curPassId):S.showFlyTip(g.formatStrWithMirrorDeal(GetLanguage(201062),GetLanguage(104488))):S.showFlyTip(GetLanguage(200032))},s}(f)),k=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).canGet=void 0,i.received=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.canGet=p.findChild(this.node,"canGet"),this.received=p.findChild(this.node,"received"),this.itemGridNode=p.findChild(this.node,"itemGrid"),this.itemGrid=new u(this.view,this.itemGridNode,(function(){t.canGet.active?IS(b).send_40_5(t.view.curPassId,t.data.lev,3):IS(y).OpenItemTips(t.data.rewrad[0],t.node)}))},s.onRender=function(t,i){var e;this.itemGrid.SetItemId(t.rewrad[0],t.rewrad[1]);var s=null==(e=this.view.passInfo)?void 0:e.free_reward[t.lev-1].status;this.canGet.active=1==s,this.received.active=2==s},e}(f),D=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).canGet=void 0,i.received=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.canGet=p.findChild(this.node,"canGet"),this.received=p.findChild(this.node,"received"),this.itemGridNode=p.findChild(this.node,"itemGrid"),this.itemGrid=new u(this.view,this.itemGridNode,(function(){t.canGet.active?IS(b).send_40_5(t.view.curPassId,t.data.lev,3):IS(y).OpenItemTips(t.data.rewrad[0],t.node)}))},s.onRender=function(t,i){var e,s,n;this.itemGrid.SetItemId(t.rewrad[0],t.rewrad[1]);var o=null==(e=this.view.passInfo)?void 0:e.high_reward[t.lev-1].status;this.canGet.active=(null==(s=this.view.passInfo)?void 0:s.if_buy)&&1==o,this.received.active=(null==(n=this.view.passInfo)?void 0:n.if_buy)&&2==o},e}(f),A=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).canGet=void 0,i.received=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.canGet=p.findChild(this.node,"canGet"),this.received=p.findChild(this.node,"received"),this.itemGridNode=p.findChild(this.node,"itemGrid"),this.itemGrid=new u(this.view,this.itemGridNode,(function(){t.canGet.active?IS(b).send_40_5(t.view.curPassId,t.data.lev,3):IS(y).OpenItemTips(t.data.rewrad[0],t.node)}))},s.onRender=function(t,i){var e,s,n,o,a;this.itemGrid.SetItemId(t.rewrad[0],t.rewrad[1]);var r=null!=(e=null==(s=this.view.passInfo)||null==(n=s.high_reward_2[t.lev-1])?void 0:n.status)?e:0;this.canGet.active=(null==(o=this.view.passInfo)?void 0:o.if_buy_2)&&1==r,this.received.active=(null==(a=this.view.passInfo)?void 0:a.if_buy_2)&&2==r},e}(f),U=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).txtDesc=void 0,i.itemGridNode=void 0,i.effNode=void 0,i.isReward=void 0,i.itemGrid=void 0,i.isRewardNode=void 0,i.eff=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this;this.txtDesc=p.findChildComponent(this.node,"desc",v),this.itemGridNode=p.findChild(this.node,"itemGrid"),this.effNode=p.findChild(this.node,"eff"),this.isRewardNode=p.findChild(this.node,"isReward"),this.itemGrid=new u(this.view,this.itemGridNode,(function(){var i,e,s=null!=(i=null==(e=t.view)?void 0:e.passInfo.total_exp)?i:0;!t.isReward&&s>=t.data[1]?IS(b).send_40_8(t.view.curPassId,t.data[0]):IS(y).OpenItemTips(t.data[2][0],t.itemGridNode)}))},s.onRender=function(t,i){var e,s,n,o=t[2];this.itemGrid.SetItemId(o[0],o[1]);var a=null!=(e=null==(s=this.view)?void 0:s.passInfo.total_exp)?e:0,r=t[1];this.isReward=null==(n=this.view)?void 0:n.passInfo.specialReward[t[0]],this.view.removeUIEffect(this.eff),this.isReward?(this.isRewardNode.active=!0,this.txtDesc.string=g.formatStrWithMirrorDeal(GetLanguage(700030191),GetLanguage(200314))):a>=r?(this.isRewardNode.active=!1,this.txtDesc.string=g.formatStrWithMirrorDeal(GetLanguage(700030191),GetLanguage(200732)),this.eff=this.view.addUIEffect("prefab/ui-effect/MX_tx_tongyong_daojulingqu",this.effNode,-1)):(this.isRewardNode.active=!1,this.txtDesc.string=g.formatStrWithMirrorDeal(GetLanguage(700030192),a,r))},e}(f);s._RF.pop()}}}));
