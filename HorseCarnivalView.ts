System.register("chunks:///_virtual/HorseCarnivalView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AudioMgr.ts","./index3.ts","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./MallDefine.ts","./PayDataCache.ts","./PayDefine.ts","./RoleDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./HorseCarnivalControl.ts","./HorseCarnivalDataCache.ts","./BaseView.ts","./EaseMethod.ts"],(function(t){"use strict";var i,e,o,n,r,a,s,d,c,l,h,f,p,u,g,v,m,w,y,C,T,I,L,_,k,S,G,b,V,R,x,E,M,D,A,B,j,K,N,U;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){o=t.cclegacy,n=t.Button,r=t.sys,a=t.HorizontalTextAlignment,s=t.Sprite,d=t.Label,c=t.ScrollView,l=t.RichText,h=t.Toggle,f=t.Layout,p=t.Vec3,u=t.js},function(t){g=t.V2},function(t){v=t.audioMgr},null,function(t){m=t.ItemGrid},function(t){w=t.ListItem},function(t){y=t.default},function(t){C=t.default},function(t){T=t.default},function(t){I=t.default},null,function(t){L=t.ConfigGlobal},function(t){_=t.BagEventDefine,k=t.GoodsType},function(t){S=t.BagModel},function(t){G=t.default},function(t){b=t.MallType},function(t){V=t.default},function(t){R=t.GiftType},function(t){x=t.RoleEventDefine},function(t){E=t.default},function(t){M=t.ActivityEventDefine,D=t.ActivityState,A=t.ActivityType},function(t){B=t.default},function(t){j=t.HorseCarnivalDataCache},function(t){K=t.ViewEvent,N=t.BaseView},function(t){U=t.EasingMethod}],execute:function(){o._RF.push({},"7c494XyFJNE7YUnXr5TsHyN","HorseCarnivalView",void 0);var O=["ArtifactGetView","HorseGetView","PlayerSkinGetView","FateNewView","GoodsGetView2"],H=(t("default",function(t){function o(){var i;return(i=t.call(this)||this).btnSelect=void 0,i.selectIcon=void 0,i.actType=void 0,i.nodeResParent=void 0,i.nodeResItem=void 0,i.nodeRolling=void 0,i.resItems=void 0,i.btnGift=void 0,i.btnStore=void 0,i.taskRed=void 0,i.togSkip=void 0,i.skipAnim=void 0,i.iconTen=void 0,i.iconOne=void 0,i.txtOne=void 0,i.txtTen=void 0,i.txtNumReward=void 0,i.numScroll=void 0,i.tipsGo=void 0,i.tipsScroll=void 0,i.curTips=0,i.tipsTimer=0,i.txtLeftTime=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.jackpot=0,i.jackpotType=0,i.curIndex=0,i.finalIndex=0,i.reward_list=[],i.actionTime=2,i.moveTween=void 0,i.rerwardList=[],i.waitRewardList=[],i.rewardNum=15,i.spine1=void 0,i.spine2=void 0,i.name="HorseCarnivalView",i.url="ui/module/horsecarnival/HorseCarnivalView",i.poolTime=3e3,i.fullScreen=!0,i.actType=A.HorseCarnival,i}i(o,t);var m=o.prototype;return m.onInit=function(){var t=this;this.initResShow(),this.btnStore=this.findChild("root/bottomBtn/btnStore"),this.addComponentCallbackListener(this.btnStore,n.EventType.CLICK,(function(){uiMgr.openView("HorseCarnivalStoreView",t.actType)}));var i=this.findChild("root/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("root/top/nodeTime/btnTips");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){for(var i=L.LIMITED_RANK_SYSTEM_DETAILS,e="",o=0;o<i.length;o++)i[o][0]==t.actType&&(e=GetLanguage(i[o][1]));""!=e&&G.showBoxTip({tip:e,btnCnt:1,horizontalAlign:r.uiMirror?a.RIGHT:a.LEFT})})),this.btnSelect=this.findChild("root/btnSelect"),this.selectIcon=this.findChildComponent("root/btnSelect/icon",s),this.addComponentCallbackListener(this.btnSelect,n.EventType.CLICK,(function(){uiMgr.openView("HorseCarnivalSelectView")}));var o=this.findChild("root/bottomBtn/btnStore");this.addComponentCallbackListener(o,n.EventType.CLICK,(function(){uiMgr.openView("HorseCarnivalStoreView",t.actType)}));var f=this.findChild("root/bottomBtn/btnTask");this.taskRed=this.findChild("root/bottomBtn/btnTask/red"),this.addComponentCallbackListener(f,n.EventType.CLICK,(function(){uiMgr.openView("HorseCarnivalTaskView",t.actType)})),this.btnGift=this.findChild("root/bottomBtn/btnGift"),this.addComponentCallbackListener(this.btnGift,n.EventType.CLICK,(function(){uiMgr.openView("HorseCarnivalGiftView",t.actType)}));var p=this.findChild("root/turn/btnShow/btnShow");this.addComponentCallbackListener(p,n.EventType.CLICK,(function(){uiMgr.openView("HorseCarnivalTipsView",p,t.actType)}));var u=this.findChild("root/turn/img/nodeTips2/tips");this.addComponentCallbackListener(u,n.EventType.CLICK,(function(){uiMgr.openView("CommonPopTipsView",GetLanguage(400204),u)})),this.nodeRolling=this.findChild("root/turn/img/nodeRolling"),this.txtLeftTime=this.findChildComponent("root/top/nodeTime/txtTime",d),this.txtNumReward=this.findChildComponent("root/numReward/num",d);var g=this.findChildComponent("root/numReward/ScrollView",c);this.numScroll=this.addUIList(g,H),this.tipsGo=this.findChild("root/top/tips");var v=this.findChildComponent("root/top/tips/ScrollView",c);this.tipsScroll=this.addUIList(v,F),this.iconOne=this.findChildComponent("root/btnOne/icon",s),this.iconTen=this.findChildComponent("root/btnTen/icon",s),this.txtOne=this.findChildComponent("root/btnOne/num",l),this.txtTen=this.findChildComponent("root/btnTen/num",l);var m=this.findChild("root/btnOne");this.addComponentCallbackListener(m,n.EventType.CLICK,(function(){t.onLottery(1)}));var w=this.findChild("root/btnTen");this.addComponentCallbackListener(w,n.EventType.CLICK,(function(){t.onLottery(2)})),this.togSkip=this.findChildComponent("root/turn/toggleSkip",h),this.addComponentCallbackListener(this.togSkip.node,h.EventType.TOGGLE,(function(){t.togSkip.isChecked?C.set("SkipHCAnim",1):C.set("SkipHCAnim",0)}));var T=this.findChildComponent("root/turn/toggleSkip/Checkmark",s);this.loadIcon(T,"zqkh","zqkh_ui_gouxuan01"),this.skipAnim=this.findChild("skipAnim"),this.addComponentCallbackListener(this.skipAnim,n.EventType.CLICK,(function(){t.SkipAnim()}));for(var I=function(){var i=t.findChild("root/turn/itemRoll/itemGrid"+_),e={node:i,index:_,item_id:0,cfg_id:0,imgFram:y.findChildComponent(i,"imgFrame",s),imgIcon:y.findChildComponent(i,"imgIcon",s),num:y.findChildComponent(i,"num",d),select:y.findChild(i,"select"),light:y.findChild(i,"light"),limit:y.findChild(i,"nodeLimit")};t.addComponentCallbackListener(i,n.EventType.CLICK,(function(){0!=e.item_id&&IS(S).OpenItemTips(e.item_id,i)})),t.rerwardList.push(e)},_=0;_<this.rewardNum;_++)I();this.dealAllLimitLayout(),r.uiMirror&&this.findChild("root/turn/img/spine").setScale(-1,1,1)},m.dealAllLimitLayout=function(){if(r.uiMirror)for(var t=this.node.getComponentsInChildren(f),i=0;i<t.length;i++)1==t[i].type&&"nodeLimit"==t[i].node.name&&this.dealMirrorLayout(t[i])},m.initResShow=function(){this.nodeResParent=this.findChild("resRoot"),this.nodeResItem=this.findChild("resRoot/resItem"),this.nodeResItem.active=!1;var t=[IS(j).GetCost(this.actType)[0]];this.resItems=new Array;for(var i=0;i<t.length;i++){var e=nodeInstantiate.instantiate(this.nodeResItem),o=t[i];this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){})),e.parent=this.nodeResParent,e.active=!0;var r=y.findChildComponent(e,"imgIcon",s),a=configGoods.getDataByKey(o);this.loadIcon(r,"icon_item",a.icon),this.resItems.push({node:e,txtNum:y.findChildComponent(e,"txtNum",d),goodsGtid:o})}},m.registerUpdateHandler=function(){this.addEvent(M.OnHorseCarnivalUpdate,this.updateInfo,this),this.addEvent(M.OnHorseCarnivalReward,this.updateReward,this),this.addEvent(M.OnHorseCarnivalLottery,this.updateLotteryResult,this),this.addEvent(_.GOODS_INFO_UPDATE,this.updateResShow,this),this.addEvent(x.ROLE_RES_UPDATE,this.updateResShow,this),this.addEvent(M.OnActivityInfoTaskUpdate,this.OnTaskUpdate,this),this.addEvent(M.OnActivityInfoUpdate,this.OnTaskUpdate,this),this.addEvent(K.ViewClose,this.onViewClose,this)},m.onAfterOpen=function(){var t,i,e=this;this.updateResShow(),IS(B).send_24_16(this.actType),this.togSkip.isChecked=1==C.get("SkipHCAnim"),this.skipAnim.active=!1,this.nodeRolling.active=!1;var o=IS(E).GetActivityInfo(this.actType);this.taskRed.active=IS(E).GetTaskRedNum(o.type)>0;var n=null!=(t=configMall.getDataByList("type",b.Activity))?t:[],r=[];for(var a in n)if(n.hasOwnProperty(a)){var s=n[a];s.condition.length>0&&"activity_group"==s.condition[0][0]&&s.condition[0][1]==o.type&&s.condition[0][2]==o.roundCfg.group_id&&r.push(s)}r.length>0?this.btnStore.active=!0:this.btnStore.active=!1;var d=null!=(i=o.state_time[o.state])?i:o.state_time[D.Open];this.leftTime=d.end_time-I.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=I.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(200026),IS(V).GetAcivityGift(R.Activity,o.type,o.round).length>0?this.btnGift.active=!0:this.btnGift.active=!1;var c=IS(j).GetCost(this.actType),l=configGoods.getDataByKey(c[0]);this.loadIcon(this.iconOne,l.icon_group,l.icon),this.loadIcon(this.iconTen,l.icon_group,l.icon);var h=configMount_draw_cumulative_times.getDatas(),f=[];for(var u in h)if(h.hasOwnProperty(u)){var v=h[u];v.type==o.type&&v.group_id==o.roundCfg.group_id&&f.push(v)}this.numScroll.datas=f;var m=configMount_draw.getDatas(),w=[];for(var y in m)m.hasOwnProperty(y)&&function(){var t=m[y];if(t.type==o.type&&t.group_id==o.roundCfg.group_id&&(w.push(t),1==t.is_jackpot)){e.btnSelect.active=t.reward_replace.length>0;var i=new g(t.pos[0][0],t.pos[0][1]),n=t.scale;e.removeUIEffect(e.spine2),e.spine2=e.addUIEffect(t.show_picture,e.findChild("root/turn/img/spine"),-1,i,n,(function(i){i.node.setRotationFromEuler(new p(0,0,t.rotate))}))}}();w.sort((function(t,i){return t.id-i.id}));for(var T=function(t){var i=w[t],o=e.rerwardList[i.order-1];if(o.item_id=i.reward[0],o.num.string=i.reward[1],o.cfg_id=i.id,0!=o.index){var n=configGoods.getDataByKey(o.item_id);e.loadIcon(o.imgIcon,n.icon_group,n.icon);var r=configColor.getDataByKey(n.quality);e.loadIcon(o.imgFram,"icon_equip",r.path)}else{var a=configGoods.getDataByKey(o.item_id),s=configColor.getDataByKey(a.quality);if(e.loadIcon(o.imgFram,"icon_equip",s.big_path),e.loadIcon(e.selectIcon,a.icon_group,a.icon),1==i.is_jackpot){var d=new g(i.pos[1][0],i.pos[1][1]),c=.5*i.scale;e.removeUIEffect(e.spine1),e.spine1=e.addUIEffect(i.show_picture,o.imgFram.node,-1,d,c,(function(t){t.node.setRotationFromEuler(new p(0,0,i.rotate))}))}}o.limit&&(o.limit.active=!1),o.select.active=!1,o.light.active=!1},L=0;L<w.length;L++)T(L)},m.onBeforeClose=function(){this.canUpdate=!1,this.curIndex=0,this.tipsTimer=0;for(var t=0;t<this.rerwardList.length;t++)this.rerwardList[t].select.active=!1,this.rerwardList[t].light.active=!1;this.jackpot=0,this.jackpotType=0,this.waitRewardList=[]},m.onDestroy=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].node.destroy();this.resItems={}},m.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=I.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},m.updateResShow=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].txtNum.string=T.GetNumString(IS(S).getGoodsCountByGoodsGtid(this.resItems[t].goodsGtid));var i,e,o=IS(j).GetCost(this.actType),n=IS(S).getGoodsCountByGoodsGtid(o[0]);n>=o[1]?(e="#5aff42",i="#27720d"):(e="#ff1f1f",i="#891000"),this.txtOne.string=u.formatStr("<b><outline color=%s width=2><color=%s>%s<color></outline></b>",i,e,o[1]),n>=10*o[1]?(e="#5aff42",i="#27720d"):(e="#ff1f1f",i="#891000"),this.txtTen.string=u.formatStr("<b><outline color=%s width=2><color=%s>%s<color></outline></b>",i,e,10*o[1])},m.OnTaskUpdate=function(){this.taskRed.active=IS(E).GetTaskRedNum(this.actType)>0},m.updateInfo=function(){var t=this,i=IS(j).getInfo(this.actType);this.tipsGo.active=i.lucky_list.length>0,0!=this.tipsTimer&&this.removeTimer(this.tipsTimer),this.tipsGo.active&&(this.tipsScroll.datas=i.lucky_list,this.curTips=0,this.tipsTimer=this.addTimer(1,-1,(function(){t.curTips=t.curTips+1,t.curTips==i.lucky_list.length&&(t.curTips=0);var e=0==t.curTips?.2:1;t.tipsScroll.scrollTo(t.curTips,e)}))),this.updateReward()},m.updateReward=function(){var t,i=this,o=IS(j).getInfo(this.actType);this.txtNumReward.string=o.count+"",this.numScroll.updateAll();var n=null!=(t=o.guaranteed_list[this.rerwardList[0].cfg_id])?t:0,r=this.findChildComponent("root/turn/img/nodeTips2/jackPotNum",l);if(n>0){r.node.active=!0;var a=u.formatStr("<b><outline color=#5C2E1A width=2><color=#FFF8C6>%s</color></outline></b>",GetLanguage(400202));r.string=T.formatStr(a,u.formatStr("<b><outline color=#943B30 width=2><color=#FFF71E>%s</color></outline></b>",n))}else r.node.active=!1;this.findChildComponent("root/turn/img/nodeTips/drawNum",d).string=T.formatStr(GetLanguage_UI(899000013),IS(j).getInfo(this.actType).remain_draw);for(var s,c=e(this.rerwardList);!(s=c()).done;){var h=s.value,f=configMount_draw.getDataByKey(h.cfg_id);if(h.limit){h.limit.active=!0;var v=IS(j).getInfo(this.actType),m=y.findChildComponent(h.limit,"Node",d);if(m.string=GetLanguage(300160)+""+f.num,v.get_drop.length>0)for(var w,C=e(v.get_drop);!(w=C()).done;){var I=w.value,L=I.k,_=I.v;L==h.cfg_id&&(m.string=GetLanguage(300160)+""+(f.num-_))}}if(1==f.is_jackpot&&f.reward_replace.length>0){var S,G,b=null!=(S=null==(G=o.choose_list[h.cfg_id])?void 0:G[1])?S:0;if(b>0)for(var V,R=e(f.reward_replace);!(V=R()).done;){var x=V.value;if(x[0]==b)if("break"===function(){if(h.item_id==x[1][0])return"break";h.num.string=x[1][1],h.item_id=x[1][0];var t=configGoods.getDataByKey(h.item_id),e=configColor.getDataByKey(t.quality);i.loadIcon(h.imgFram,"icon_equip",e.big_path),i.loadIcon(i.selectIcon,t.icon_group,t.icon);var o=f.ext[x[0]-1],n=new g(o[2][1][0],o[2][1][1]),r=.5*o[1],a="";t.type==k.Mount?a=configMount.getDataByKey(t.effect[0]).path:t.type==k.Artifact&&(a=configArtifact.getDataByKey(t.effect[0]).path),i.removeUIEffect(i.spine1),i.spine1=i.addUIEffect(a,h.imgFram.node,-1,n,r,(function(t){t.node.setRotationFromEuler(new p(0,0,o[3]))}));var s=new g(o[2][0][0],o[2][0][1]),d=o[1];i.removeUIEffect(i.spine2),i.spine2=i.addUIEffect(a,i.findChild("root/turn/img/spine"),-1,s,d,(function(t){t.node.setRotationFromEuler(new p(0,0,o[3]))}))}())break}}}this.dealAllLimitLayoutLabels()},m.dealAllLimitLayoutLabels=function(){if(r.uiMirror)for(var t=this.node.getComponentsInChildren(f),i=0;i<t.length;i++)1==t[i].type&&"nodeLimit"==t[i].node.name&&this.refreshTxtMirrorByLayout(t[i])},m.onLottery=function(t){var i=IS(j).GetCost(this.actType),e=i[0],o=i[1];2==t&&(o*=10),IS(S).getGoodsCountByGoodsGtid(e)>=o?IS(B).send_24_17(this.actType,t):this.btnGift.active&&uiMgr.openView("HorseCarnivalGiftView",this.actType)},m.updateLotteryResult=function(t){var i=this;if(t.act_type==this.actType)if(this.nodeRolling.active=!1,this.checkJackpot(t.drop_id_list),this.togSkip.isChecked)0!=this.jackpot?(this.openTypeView(this.jackpot,this.jackpotType),this.waitRewardList=t.reward_list,this.jackpot=0,this.jackpotType=0):uiMgr.openView("GoodsGetView",t.reward_list);else{var e=t.drop_id_list[t.drop_id_list.length-1];this.finalIndex=configMount_draw.getDataByKey(e).order-1,this.reward_list=t.reward_list,this.skipAnim.active=!0,this.nodeRolling.active=!0,1==t.drop_id_list.length?this.doLotteryTween(this.finalIndex,(function(){for(var e=0;e<i.rerwardList.length;e++)i.rerwardList[e].select.active=!1,i.rerwardList[e].light.active=!1;i.rerwardList[i.finalIndex].select.active=!0,i.rerwardList[i.finalIndex].light.active=!0,i.curIndex=i.finalIndex,0!=i.jackpot?(i.openTypeView(i.jackpot,i.jackpotType),i.waitRewardList=t.reward_list,i.jackpot=0,i.jackpotType=0):uiMgr.openView("GoodsGetView",t.reward_list),uiMgr.openView("GoodsGetView",t.reward_list),i.skipAnim.active=!1,i.nodeRolling.active=!1})):this.lotteryNext(0,t)}},m.lotteryNext=function(t,i){var e,o=this,n=configMount_draw.getDataByKey(i.drop_id_list[t]).order-1;e=t<i.drop_id_list.length-1?function(){o.curIndex=n,o.lotteryNext(t+1,i)}:function(){for(var t=0;t<o.rerwardList.length;t++)o.rerwardList[t].select.active=!1,o.rerwardList[t].light.active=!1;o.rerwardList[n].select.active=!0,o.rerwardList[n].light.active=!0,o.curIndex=n,0!=o.jackpot?(o.waitRewardList=i.reward_list,o.openTypeView(o.jackpot,o.jackpotType),o.jackpot=0,o.jackpotType=0):uiMgr.openView("GoodsGetView",i.reward_list),o.skipAnim.active=!1,o.nodeRolling.active=!1},this.doLotteryTween(n,e)},m.doLotteryTween=function(t,i){var e=this;null!=this.moveTween&&this.moveTween.stop(),v.playSound("common_guguji");var o=4*this.rewardNum+t-this.curIndex;this.moveTween=this.addTween(0,1,this.actionTime,(function(t,i){for(var n=o*i,r=Math.floor((n+e.curIndex)%e.rewardNum),a=0;a<e.rerwardList.length;a++)e.rerwardList[a].select.active=!1,e.rerwardList[a].light.active=!1;e.rerwardList[r].select.active=!0})).easing(U.SINE_OUT).call((function(){i()}),.5).start()},m.SkipAnim=function(){null!=this.moveTween&&this.moveTween.stop();for(var t=0;t<this.rerwardList.length;t++)this.rerwardList[t].select.active=!1,this.rerwardList[t].light.active=!1;this.rerwardList[this.finalIndex].select.active=!0,this.rerwardList[this.finalIndex].light.active=!0,this.curIndex=this.finalIndex,0!=this.jackpot?(this.openTypeView(this.jackpot,this.jackpotType),this.waitRewardList=this.reward_list,this.jackpot=0,this.jackpotType=0):uiMgr.openView("GoodsGetView",this.reward_list),this.skipAnim.active=!1,this.nodeRolling.active=!1},m.checkJackpot=function(t){this.jackpot=0,this.jackpotType=0;for(var i,o=e(t);!(i=o()).done;){var n=i.value,r=configMount_draw.getDataByKey(n);if(1==r.is_jackpot)if(r.reward_replace.length>0){var a,s,d=null!=(a=null==(s=IS(j).getInfo(this.actType).choose_list[r.id])?void 0:s[1])?a:0;if(d>0)for(var c,l=e(r.reward_replace);!(c=l()).done;){var h=c.value;if(h[0]==d&&r.goods_type)return this.jackpot=h[1][0],this.jackpotType=r.goods_type,!0}else if(r.goods_type)return this.jackpot=r.reward[0],this.jackpotType=r.goods_type,!0}else if(r.goods_type)return this.jackpot=r.reward[0],this.jackpotType=r.goods_type,!0}return!1},m.onViewClose=function(t){this.waitRewardList.length<=0||O.includes(t)&&(uiMgr.openView("GoodsGetView",this.waitRewardList),this.waitRewardList=[])},m.openTypeView=function(t,i){switch(i){case 1:return void uiMgr.openView("ArtifactGetView",configGoods.getDataByKey(t).effect[0],!0);case 2:return void uiMgr.openView("HorseGetView",configGoods.getDataByKey(t).effect[0],!0);case 3:return void uiMgr.openView("PlayerSkinGetView",configGoods.getDataByKey(t).effect[0],!0);case 4:return void uiMgr.openView("FateNewView",configGoods.getDataByKey(t).effect[0]);case 5:switch(configGoods.getDataByKey(t).type){case 28:uiMgr.openView("ArtifactGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 27:uiMgr.openView("HorseGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 11:uiMgr.openView("PlayerSkinGetView",configGoods.getDataByKey(t).effect[0],!0);break;case 12:uiMgr.openView("FateNewView",configGoods.getDataByKey(t).effect[0]);break;default:uiMgr.openView("GoodsGetView2",t)}}},o}(N)),function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).txtDesc=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i.isReward=void 0,i.eff=void 0,i.effNode=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.txtDesc=y.findChildComponent(this.node,"desc",l),this.effNode=y.findChild(this.node,"eff"),this.itemGridNode=y.findChild(this.node,"itemGrid"),this.itemGrid=new m(this.view,this.itemGridNode,(function(){var i=IS(j).getInfo(t.view.actType);!t.isReward&&i.count>=t.data.cumulative_times?IS(B).send_24_18(t.view.actType,t.data.id):IS(S).OpenItemTips(t.data.reward[0],t.itemGridNode)}))},o.onRender=function(t,i){if(t){this.itemGrid.SetItemId(t.reward[0],t.reward[1]);var e=IS(j).getInfo(this.view.actType);this.isReward=e.gotReward[t.id],this.view.removeUIEffect(this.eff),this.isReward?this.txtDesc.string=T.formatStrWithMirrorDeal(GetLanguage(200033)):e.count>=t.cumulative_times?(this.txtDesc.string=T.formatStrWithMirrorDeal(GetLanguage(200034)),this.eff=this.view.addUIEffect("prefab/ui-effect/MX_tx_tongyong_daojulingqu",this.effNode,-1)):this.txtDesc.string=u.formatStr("<b><color=#ff1c1c>%s</color><color=#80342e>/%s</color></b>",e.count,t.cumulative_times)}},e}(w)),F=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).txt=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){this.adaptiveSize=!0,this.txt=y.findChildComponent(this.node,"txt",l)},o.onRender=function(t,i){var e,o=null==(e=configGoods.getDataByKey(t.k))?void 0:e.name;this.txt.string=T.formatStrWithMirrorDeal(GetLanguage(200050),t.s,o)},e}(w);o._RF.pop()}}}));

