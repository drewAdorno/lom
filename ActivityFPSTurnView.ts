System.register("chunks:///_virtual/ActivityFPSTurnView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AudioMgr.ts","./index3.ts","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./SpineSkeleton.ts","./BagDefine.ts","./BagModel.ts","./RoleDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./HorseCarnivalControl.ts","./HorseCarnivalDataCache.ts","./BaseView.ts","./EaseMethod.ts"],(function(t){"use strict";var e,i,n,o,r,a,s,d,c,l,h,f,u,p,m,g,v,w,y,C,T,_,S,I,k,G,b,L,R,x,V;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,r=t.Sprite,a=t.Label,s=t.ScrollView,d=t.RichText,c=t.Toggle,l=t.js},function(t){h=t.V2},function(t){f=t.audioMgr},null,function(t){u=t.ItemGrid},function(t){p=t.ListItem},function(t){m=t.default},function(t){g=t.default},function(t){v=t.default},function(t){w=t.default},null,function(t){y=t.SpineSkeleton},function(t){C=t.BagEventDefine},function(t){T=t.BagModel},function(t){_=t.RoleEventDefine},function(t){S=t.default},function(t){I=t.ActivityType,k=t.ActivityEventDefine,G=t.ActivityState},function(t){b=t.default},function(t){L=t.HorseCarnivalDataCache},function(t){R=t.ViewEvent,x=t.BaseView},function(t){V=t.EasingMethod}],execute:function(){var D,j,E,F,A;n._RF.push({},"334a8fH0mdEa7s9EyZe5e4d","ActivityFPSTurnView",void 0);var P=((D={})[1]="FPS_cj_dj05",D[2]="FPS_cj_dj02",D[3]="FPS_cj_dj01",D),N=((j={})[1]=700,j[2]=1e3,j[3]=500,j),M={},B=((E={})[2]=5,E[3]=1,E),O=["ArtifactGetView","HorseGetView","PlayerSkinGetView","FateNewView","GoodsGetView2","WingGetView"],K=((F={})[1]="FPS_cj_daojudiban07",F[2]="FPS_cj_daojudiban07",F[3]="FPS_cj_daojudiban06",F[4]="FPS_cj_daojudiban06",F[5]="FPS_cj_daojudiban03",F[6]="FPS_cj_daojudiban04",F[7]="FPS_cj_daojudiban02",F[8]="FPS_cj_daojudiban01",F[9]="FPS_cj_daojudiban01",F[10]="FPS_cj_daojudiban01",F),U=((A={})[1]="lv",A[2]="lv",A[3]="lan1",A[4]="lan2",A[5]="huang",A[6]="cheng",A[7]="hong",A[8]="hong",A[9]="hong",A[10]="hong",A),H=(t("default",function(t){function n(){var e;return(e=t.call(this)||this).actType=void 0,e.nodeResParent=void 0,e.nodeResItem=void 0,e.nodeRolling=void 0,e.rollEff=void 0,e.bgEff=void 0,e.turnEff=void 0,e.resItems=void 0,e.redSelect=void 0,e.btnGift=void 0,e.btnStore=void 0,e.togSkip=void 0,e.skipAnim=void 0,e.iconTen=void 0,e.iconOne=void 0,e.txtOne=void 0,e.txtTen=void 0,e.redOne=void 0,e.redTen=void 0,e.txtNumReward=void 0,e.numScroll=void 0,e.tipsGo=void 0,e.tipsScroll=void 0,e.imgPreview=void 0,e.preDescNum=void 0,e.preDescGet=void 0,e.onlyRewardNum=0,e.iconRewardOne=void 0,e.iconRewardTen=void 0,e.txtRewardOne=void 0,e.txtRewardTen=void 0,e.preViewCount=0,e.refreshTimer=void 0,e.curTips=0,e.tipsTimer=0,e.txtLeftTime=void 0,e.deltaTime=0,e.leftTime=0,e.canUpdate=!1,e.jackpot=0,e.jackpotType=0,e.curIndex=0,e.finalIndex=0,e.reward_list=[],e.actionTime=.5,e.moveTween=void 0,e.rerwardList=[],e.waitRewardList=[],e.rewardNum=12,e.extraReward=void 0,e.name="ActivityFPSTurnView",e.url="ui/module/activityFPS/ActivityFPSTurnView",e.actType=I.FPSTurn,e}e(n,t);var u=n.prototype;return u.onInit=function(){var t=this;this.initResShow(),this.btnStore=this.findChild("root/bottomBtn/btnStore"),this.addComponentCallbackListener(this.btnStore,o.EventType.CLICK,(function(){uiMgr.openView("ActivityFPSStoreView",I.FPS)})),this.btnGift=this.findChild("root/bottomBtn/btnGift"),this.addComponentCallbackListener(this.btnGift,o.EventType.CLICK,(function(){uiMgr.openView("ActivityFPSGiftView",t.actType)}));var e=this.findChild("root/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()}));var i=this.findChild("root/btnShow/btnShow");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){uiMgr.openView("SlumberPartyTipsView",i,t.actType)}));var n=this.findChild("root/btnSelect");n.active=!1,this.redSelect=this.findChild("root/btnSelect/red"),this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){uiMgr.openView("ActivityTangTurnTipsView")}));var l=this.findChild("root/turn/img/nodeTips/btnTips");this.addComponentCallbackListener(l,o.EventType.CLICK,(function(){IS(S).ShowSysTips(t.actType)})),this.nodeRolling=this.findChild("root/turn/img/nodeRolling"),this.imgPreview=this.findChildComponent("root/turn/img/imgPreview",r),this.preDescNum=this.findChild("root/turn/img/preDesc/num"),this.preDescGet=this.findChild("root/turn/img/preDesc/get"),this.addComponentCallbackListener(this.imgPreview.node,o.EventType.CLICK,(function(){t.onClickPreview()})),this.txtLeftTime=this.findChildComponent("root/top/nodeTime/txtTime",a),this.txtNumReward=this.findChildComponent("root/numReward/num",a);var h=this.findChildComponent("root/numReward/ScrollView",s);this.numScroll=this.addUIList(h,H),this.tipsGo=this.findChild("root/top/tips");var f=this.findChildComponent("root/top/tips/ScrollView",s);this.tipsScroll=this.addUIList(f,q),this.iconOne=this.findChildComponent("root/btnOne/icon",r),this.iconTen=this.findChildComponent("root/btnTen/icon",r),this.txtOne=this.findChildComponent("root/btnOne/num",d),this.txtTen=this.findChildComponent("root/btnTen/num",d),this.redOne=this.findChild("root/btnOne/red"),this.redTen=this.findChild("root/btnTen/red"),this.iconRewardOne=this.findChildComponent("root/btnOne/back/iconBack",r),this.iconRewardTen=this.findChildComponent("root/btnTen/back/iconBack",r),this.txtRewardOne=this.findChildComponent("root/btnOne/back/numBack",a),this.txtRewardTen=this.findChildComponent("root/btnTen/back/numBack",a);var u=this.findChild("root/btnOne");this.addComponentCallbackListener(u,o.EventType.CLICK,(function(){t.onLottery(1)}));var p=this.findChild("root/btnTen");this.addComponentCallbackListener(p,o.EventType.CLICK,(function(){t.onLottery(2)})),this.togSkip=this.findChildComponent("root/toggleSkip",c),this.addComponentCallbackListener(this.togSkip.node,c.EventType.TOGGLE,(function(){t.togSkip.isChecked?g.set("SkipFPSTurnAnim","1"):g.set("SkipFPSTurnAnim","0")})),this.skipAnim=this.findChild("skipAnim"),this.addComponentCallbackListener(this.skipAnim,o.EventType.CLICK,(function(){t.SkipAnim()}));for(var v=function(){var e=t.findChild("root/turn/itemRoll/itemGrid"+w),i={node:e,index:w,item_id:0,cfg_id:0,imgFram:m.findChildComponent(e,"imgFrame",r),imgIcon:m.findChildComponent(e,"imgIcon",r),num:m.findChildComponent(e,"num",a),select:m.findChild(e,"select"),light:m.findChild(e,"light"),limit:m.findChild(e,"nodeLimit"),only:m.findChild(e,"nodeOnly"),eff:null};t.addComponentCallbackListener(e,o.EventType.CLICK,(function(){0!=i.item_id&&IS(T).OpenItemTips(i.item_id,e)})),t.rerwardList.push(i)},w=0;w<this.rewardNum;w++)v()},u.initResShow=function(){var t=this;this.nodeResParent=this.findChild("resRoot"),this.nodeResItem=this.findChild("resRoot/resItem"),this.nodeResItem.active=!1;var e=[IS(L).GetCost(this.actType)[0]];this.resItems=new Array;for(var i=function(i){var n=nodeInstantiate.instantiate(t.nodeResItem),s=e[i];t.addComponentCallbackListener(n,o.EventType.CLICK,(function(){IS(T).OpenItemTips(s,m.findChild(n,"txtNum"))})),n.parent=t.nodeResParent,n.active=!0;var d=m.findChildComponent(n,"imgIcon",r),c=configGoods.getDataByKey(s);t.loadIcon(d,"icon_item",c.icon),t.resItems.push({node:n,txtNum:m.findChildComponent(n,"txtNum",a),goodsGtid:s})},n=0;n<e.length;n++)i(n)},u.registerUpdateHandler=function(){this.addEvent(k.OnHorseCarnivalUpdate,this.updateInfo,this),this.addEvent(k.OnHorseCarnivalReward,this.updateReward,this),this.addEvent(k.OnHorseCarnivalLottery,this.updateLotteryResult,this),this.addEvent(C.GOODS_INFO_UPDATE,this.updateResShow,this),this.addEvent(_.ROLE_RES_UPDATE,this.updateResShow,this),this.addEvent(R.ViewClose,this.onViewClose,this)},u.onAfterOpen=function(){var t,e=this;this.rollEff=null,this.bgEff=null,this.turnEff=null,this.updateResShow(),IS(b).send_24_16(this.actType),this.togSkip.isChecked="1"==g.get("SkipFPSTurnAnim"),this.skipAnim.active=!1,this.nodeRolling.active=!1;var i=IS(S).GetActivityInfo(this.actType),n=null!=(t=i.state_time[i.state])?t:i.state_time[G.Open];this.leftTime=n.end_time-w.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=w.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(200026);var o=IS(L).GetCost(this.actType),r=configGoods.getDataByKey(o[0]);this.loadIcon(this.iconOne,r.icon_group,r.icon),this.loadIcon(this.iconTen,r.icon_group,r.icon);var a=IS(L).GetDrawReward(this.actType),s=configGoods.getDataByKey(a[0]);this.loadIcon(this.iconRewardOne,s.icon_group,s.icon),this.loadIcon(this.iconRewardTen,s.icon_group,s.icon),this.txtRewardOne.string=l.formatStr("x%s",a[1]),this.txtRewardTen.string=l.formatStr("x%s",10*a[1]);var c=configMount_draw_cumulative_times.getDatas(),f=[];for(var u in c)if(c.hasOwnProperty(u)){var p=c[u];p.type==i.type&&p.group_id==i.roundCfg.group_id&&f.push(p)}this.numScroll.datas=f;for(var m=0;m<f.length;m++){var C=f[m],T=IS(L).getInfo(this.actType);if(!T.gotReward[C.id]&&T.count>=C.cumulative_times){this.numScroll.scrollTo(m,.02);break}}var _=configMount_draw.getDatas(),I=[];for(var k in _)if(_.hasOwnProperty(k)){var R=_[k];R.type==i.type&&R.group_id==i.roundCfg.group_id&&I.push(R)}I.sort((function(t,e){return t.id-e.id}));for(var x=function(t){var i=I[t],n=e.rerwardList[i.order-1];n.item_id=i.reward[0],n.num.string=i.reward[1],n.cfg_id=i.id;var o=configGoods.getDataByKey(n.item_id);e.loadIcon(n.imgIcon,o.icon_group,o.icon),e.loadIcon(n.imgFram,"act_fps_turn",K[o.quality]),n.limit&&(n.limit.active=!1),n.only&&(n.only.active=!1),n.select.active=!1,n.light.active=!1,n.eff&&e.removeUIEffect(n.eff),n.eff=e.addUIEffect("prefab/ui-effect/MX_tx_wuzhuangyanjiusuo_1",n.select,-1,new h(0,0),1,(function(t){t.node.getComponent(y).needAnimation=U[o.quality]}))},V=0;V<I.length;V++)x(V);this.clearTimer();var D=function(){e.preViewCount=3==e.preViewCount?1:e.preViewCount+1;var t=P[e.preViewCount];if(e.loadIcon(e.imgPreview,"act_fps_turn",t),1!=e.preViewCount){var i=N[e.preViewCount];e.preDescNum.active=!0,e.preDescGet.active=!1;var n=l.formatStr("<b><outline width = 2 color=#943b30><color=#fffeea>%s</color></outline></b>",GetLanguage(400187));e.findChildComponent("root/turn/img/preDesc/num/num",d).string=v.formatStr(n,l.formatStr("<color=#fff71e>%s</color>",i))}else if(e.onlyRewardNum>0){e.preDescNum.active=!0,e.preDescGet.active=!1;var o=l.formatStr("<b><outline width = 2 color=#943b30><color=#fffeea>%s</color></outline></b>",GetLanguage(400205));e.findChildComponent("root/turn/img/preDesc/num/num",d).string=v.formatStr(o,l.formatStr("<color=#fff71e>%s</color>",e.onlyRewardNum))}else e.preDescNum.active=!1,e.preDescGet.active=!0;var r=IS(L).getInfo(e.actType),a=e.findChildComponent("root/turn/img/preDesc/jackPotNum",d),s=B[e.preViewCount];if(null!=s){var c,h=null!=(c=r.guaranteed_list[e.rerwardList[s].cfg_id])?c:0;if(h>0){a.node.active=!0;var f=l.formatStr("<b><outline color=#5C2E1A width=2><color=#FFF8C6>%s</color></outline></b>",GetLanguage(400202));a.string=v.formatStr(f,l.formatStr("<b><outline color=#943B30 width=2><color=#FFF71E>%s</color></outline></b>",h))}else a.node.active=!1}else a.node.active=!1};if(D(),this.refreshTimer=this.addTimer(5,-1,D),null==this.bgEff){this.bgEff=this.addUIEffect("prefab/ui-effect/MX_tx_wuzhuangyanjiusuo_yuanpan",this.findChild("root/turn/eff"),-1,new h(0,0),1,(function(t){t.node.getComponent(y).needAnimation="idle"}))}},u.clearTimer=function(){null!=this.refreshTimer&&(this.removeTimer(this.refreshTimer),this.refreshTimer=null)},u.onBeforeClose=function(){this.canUpdate=!1,this.curIndex=0,this.tipsTimer=0;for(var t=0;t<this.rerwardList.length;t++)this.rerwardList[t].select.active=!1,this.rerwardList[t].light.active=!1;this.jackpot=0,this.jackpotType=0,this.waitRewardList=[],this.extraReward=null,this.clearTimer()},u.onDestroy=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].node.destroy();this.resItems={}},u.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=w.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},u.updateResShow=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].txtNum.string=v.GetNumString(IS(T).getGoodsCountByGoodsGtid(this.resItems[t].goodsGtid));var e,i,n=IS(L).GetCost(this.actType),o=IS(T).getGoodsCountByGoodsGtid(n[0]);this.redOne.active=o>=n[1],this.redTen.active=o>=10*n[1],o>=n[1]?(i="#5aff42",e="#27720d"):(i="#ff1f1f",e="#891000"),this.txtOne.string=l.formatStr("<b><outline color=%s width=2><color=%s>%s<color></outline></b>",e,i,n[1]),o>=10*n[1]?(i="#5aff42",e="#27720d"):(i="#ff1f1f",e="#891000"),this.txtTen.string=l.formatStr("<b><outline color=%s width=2><color=%s>%s<color></outline></b>",e,i,10*n[1])},u.updateInfo=function(){var t=this,e=IS(L).getInfo(this.actType);this.tipsGo.active=e.lucky_list.length>0,0!=this.tipsTimer&&this.removeTimer(this.tipsTimer),this.tipsGo.active&&(this.tipsScroll.datas=e.lucky_list,this.curTips=0,this.tipsTimer=this.addTimer(1,-1,(function(){t.curTips=t.curTips+1,t.curTips==e.lucky_list.length&&(t.curTips=0);var i=0==t.curTips?.2:1;t.tipsScroll.scrollTo(t.curTips,i)}))),this.updateReward()},u.updateReward=function(){var t=this,e=IS(L).getInfo(this.actType);this.txtNumReward.string=e.count+"",this.numScroll.updateAll();var n=IS(S).GetActivityInfo(this.actType),o=configMount_draw_cumulative_times.getDatas(),r=[];for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];c.type==n.type&&c.group_id==n.roundCfg.group_id&&r.push(c)}for(var f=0;f<r.length;f++){var u=r[f],p=IS(L).getInfo(this.actType);if(!p.gotReward[u.id]&&p.count>=u.cumulative_times){this.numScroll.scrollTo(f,.02);break}}this.findChildComponent("root/turn/img/nodeTips/drawNum",a).string=v.formatStr(GetLanguage(999300100),IS(L).getInfo(this.actType).remain_draw);for(var g,w=i(this.rerwardList);!(g=w()).done;){var C=g.value,T=configMount_draw.getDataByKey(C.cfg_id);if(T.num){C.limit.active=!0;var _=IS(L).getInfo(this.actType),I=m.findChildComponent(C.limit,"Node",a);if(I.string=v.formatStrWithMirrorDeal(GetLanguage(400014),T.num),_.get_drop.length>0)for(var k,G=i(_.get_drop);!(k=G()).done;){var b=k.value,R=b.k,x=b.v;R==C.cfg_id&&(I.string=v.formatStrWithMirrorDeal(GetLanguage(400014),T.num-x))}}if(5==T.quality){C.only.active=!0;var V=T.guaranteed-e.count;this.onlyRewardNum=V}if(T.reward_replace.length>0){var D,j,E=null!=(D=null==(j=e.choose_list[C.cfg_id])?void 0:j[1])?D:0;if(E>0){5==T.quality&&(C.only.active=!1,this.onlyRewardNum=0);for(var F,A=i(T.reward_replace);!(F=A()).done;){var P=F.value;P[0]==E&&function(){C.num.string=P[1][1],C.item_id=P[1][0];var e=configGoods.getDataByKey(C.item_id);t.loadIcon(C.imgIcon,e.icon_group,e.icon),t.loadIcon(C.imgFram,"act_fps_turn",K[e.quality]),C.eff&&t.removeUIEffect(C.eff),C.eff=t.addUIEffect("prefab/ui-effect/MX_tx_wuzhuangyanjiusuo_1",C.select,-1,new h(0,0),1,(function(t){t.node.getComponent(y).needAnimation=U[e.quality]}))}()}}}if(1==this.preViewCount)if(this.onlyRewardNum>0){this.preDescNum.active=!0,this.preDescGet.active=!1;var N=l.formatStr("<b><outline width = 2 color=#943b30><color=#fffeea>%s</color></outline></b>",GetLanguage(400205));this.findChildComponent("root/turn/img/preDesc/num/num",d).string=v.formatStr(N,l.formatStr("<color=#fff71e>%s</color>",this.onlyRewardNum))}else this.preDescNum.active=!1,this.preDescGet.active=!0;var M=this.findChildComponent("root/turn/img/preDesc/jackPotNum",d),O=B[this.preViewCount];if(null!=O){var H,q=null!=(H=e.guaranteed_list[this.rerwardList[O].cfg_id])?H:0;if(q>0){M.node.active=!0;var W=l.formatStr("<b><outline color=#5C2E1A width=2><color=#FFF8C6>%s</color></outline></b>",GetLanguage(400202));M.string=v.formatStr(W,l.formatStr("<b><outline color=#943B30 width=2><color=#FFF71E>%s</color></outline></b>",q))}else M.node.active=!1}else M.node.active=!1}},u.onClickPreview=function(){var t=M[this.preViewCount];null!=t&&uiMgr.openView("PlayerSkinLookView",t,!0)},u.onLottery=function(t){var e=IS(L).GetCost(this.actType),i=e[0],n=e[1];2==t&&(n*=10),IS(T).getGoodsCountByGoodsGtid(i)>=n?IS(b).send_24_17(this.actType,t):uiMgr.openView("ActivityFPSGiftView",this.actType)},u.updateLotteryResult=function(t){var e=this;if(t.act_type==this.actType){this.nodeRolling.active=!1;var i=IS(L).GetDrawReward(this.actType),n=1==t.type?i[1]:10*i[1];if(this.extraReward=[i[0],n],this.checkJackpot(t.drop_id_list),this.togSkip.isChecked)0!=this.jackpot?(this.openTypeView(this.jackpot,this.jackpotType),this.waitRewardList=t.reward_list,this.jackpot=0,this.jackpotType=0):(uiMgr.openView("GoodsGetView",t.reward_list,this.extraReward),this.extraReward=null);else{var o=t.drop_id_list[t.drop_id_list.length-1];this.finalIndex=configMount_draw.getDataByKey(o).order-1,this.reward_list=t.reward_list,this.skipAnim.active=!0,this.nodeRolling.active=!0,1==t.drop_id_list.length?this.doLotteryTween(this.finalIndex,(function(){for(var i=0;i<e.rerwardList.length;i++)e.rerwardList[i].select.active=!1,e.rerwardList[i].light.active=!1;(e.rerwardList[e.finalIndex].select.active=!0,e.rerwardList[e.finalIndex].light.active=!0,e.curIndex=e.finalIndex,0!=e.jackpot?(e.waitRewardList=t.reward_list,e.openTypeView(e.jackpot,e.jackpotType),e.jackpot=0,e.jackpotType=0):(uiMgr.openView("GoodsGetView",t.reward_list,e.extraReward),e.extraReward=null),e.skipAnim.active=!1,e.nodeRolling.active=!1,null!=e.bgEff)&&e.getUIEffect(e.bgEff).node.getComponent(y).setAnimation(0,"idle",!0)})):this.lotteryNext(0,t)}}},u.lotteryNext=function(t,e){var i,n=this,o=configMount_draw.getDataByKey(e.drop_id_list[t]).order-1;i=t<e.drop_id_list.length-1?function(){n.curIndex=o,n.lotteryNext(t+1,e)}:function(){for(var t=0;t<n.rerwardList.length;t++)n.rerwardList[t].select.active=!1,n.rerwardList[t].light.active=!1;(n.rerwardList[o].select.active=!0,n.rerwardList[o].light.active=!0,n.curIndex=o,0!=n.jackpot?(n.waitRewardList=e.reward_list,n.openTypeView(n.jackpot,n.jackpotType),n.jackpot=0,n.jackpotType=0):(uiMgr.openView("GoodsGetView",e.reward_list,n.extraReward),n.extraReward=null),n.skipAnim.active=!1,n.nodeRolling.active=!1,null!=n.bgEff)&&n.getUIEffect(n.bgEff).node.getComponent(y).setAnimation(0,"idle",!0)},this.doLotteryTween(o,i)},u.doLotteryTween=function(t,e){var i=this;(null!=this.moveTween&&this.moveTween.stop(),null!=this.bgEff)&&this.getUIEffect(this.bgEff).node.getComponent(y).setAnimation(0,"kaishi",!1);f.playSound("fps_choujiang");var n=4*this.rewardNum+t-this.curIndex;this.moveTween=this.addTween(0,1,this.actionTime,(function(t,e){for(var o=n*e,r=Math.floor((o+i.curIndex)%i.rewardNum),a=0;a<i.rerwardList.length;a++)i.rerwardList[a].select.active=!1,i.rerwardList[a].light.active=!1;i.rerwardList[r].select.active=!0})).easing(V.SINE_OUT).call((function(){e()}),.5).start()},u.SkipAnim=function(){null!=this.moveTween&&this.moveTween.stop();for(var t=0;t<this.rerwardList.length;t++)this.rerwardList[t].select.active=!1,this.rerwardList[t].light.active=!1;(this.rerwardList[this.finalIndex].select.active=!0,this.rerwardList[this.finalIndex].light.active=!0,this.curIndex=this.finalIndex,0!=this.jackpot?(this.waitRewardList=this.reward_list,this.openTypeView(this.jackpot,this.jackpotType),this.jackpot=0,this.jackpotType=0):(uiMgr.openView("GoodsGetView",this.reward_list,this.extraReward),this.extraReward=null),this.skipAnim.active=!1,this.nodeRolling.active=!1,null!=this.bgEff)&&this.getUIEffect(this.bgEff).node.getComponent(y).setAnimation(0,"idle",!0)},u.checkJackpot=function(t){this.jackpot=0,this.jackpotType=0;for(var e,n=i(t);!(e=n()).done;){var o=e.value,r=configMount_draw.getDataByKey(o);if(r.goods_type)if(r.reward_replace.length>0){var a,s,d=null!=(a=null==(s=IS(L).getInfo(this.actType).choose_list[r.id])?void 0:s[1])?a:0;if(d>0)for(var c,l=i(r.reward_replace);!(c=l()).done;){var h=c.value;if(h[0]==d&&r.goods_type)return this.jackpot=h[1][0],this.jackpotType=r.goods_type,!0}else if(r.goods_type)return this.jackpot=r.reward[0],this.jackpotType=r.goods_type,!0}else if(r.goods_type)return this.jackpot=r.reward[0],this.jackpotType=r.goods_type,!0}return!1},u.onViewClose=function(t){this.waitRewardList.length<=0||O.includes(t)&&(uiMgr.openView("GoodsGetView",this.waitRewardList,this.extraReward),this.extraReward=null,this.waitRewardList=[])},u.openTypeView=function(t,e){switch(e){case 1:return void uiMgr.openView("ArtifactGetView",configGoods.getDataByKey(t).effect[0],!0);case 2:return void uiMgr.openView("HorseGetView",configGoods.getDataByKey(t).effect[0],!0);case 3:return void uiMgr.openView("PlayerSkinGetView",configGoods.getDataByKey(t).effect[0],!0);case 4:return void uiMgr.openView("FateNewView",configGoods.getDataByKey(t).effect[0]);case 5:switch(configGoods.getDataByKey(t).type){case 28:uiMgr.openView("ArtifactGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 27:uiMgr.openView("HorseGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 11:uiMgr.openView("PlayerSkinGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 12:uiMgr.openView("FateNewView",configGoods.getDataByKey(t).effect[0]);break;case 32:uiMgr.openView("WingGetView",configGoods.getDataByKey(t).effect[0],!0);break;default:uiMgr.openView("GoodsGetView2",t)}}},n}(x)),function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtDesc=void 0,e.itemGridNode=void 0,e.effNode=void 0,e.itemGrid=void 0,e.isReward=void 0,e.eff=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){var t=this;this.txtDesc=m.findChildComponent(this.node,"desc",d),this.itemGridNode=m.findChild(this.node,"itemGrid"),this.effNode=m.findChild(this.node,"eff"),this.itemGrid=new u(this.view,this.itemGridNode,(function(){var e=t.view,i=IS(L).getInfo(e.actType);!t.isReward&&i.count>=t.data.cumulative_times?IS(b).send_24_18(e.actType,t.data.id):IS(T).OpenItemTips(t.data.reward[0],t.itemGridNode)}))},n.onRender=function(t,e){this.itemGrid.SetItemId(t.reward[0],t.reward[1]);var i=this.view,n=IS(L).getInfo(i.actType);this.isReward=n.gotReward[t.id],this.view.removeUIEffect(this.eff),this.isReward?this.txtDesc.string=v.formatStrWithMirrorDeal(GetLanguage(200033)):n.count>=t.cumulative_times?(this.txtDesc.string=v.formatStrWithMirrorDeal(GetLanguage(200034)),this.eff=this.view.addUIEffect("prefab/ui-effect/MX_tx_tongyong_daojulingqu",this.effNode,-1)):this.txtDesc.string=l.formatStr("<b><color=#ff1c1c>%s</color><color=#80342e>/%s</color></b>",n.count,t.cumulative_times)},i}(p)),q=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txt=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.txt=m.findChildComponent(this.node,"txt",d)},n.onRender=function(t,e){var i,n=null==(i=configGoods.getDataByKey(t.k))?void 0:i.name;this.txt.string=v.formatStrWithMirrorDeal(GetLanguage(200050),t.s,n)},i}(p);n._RF.pop()}}}));

