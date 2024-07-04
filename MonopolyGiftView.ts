System.register("chunks:///_virtual/MonopolyGiftView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BagDefine.ts","./MessageView.ts","./MallControl.ts","./MallDataCache.ts","./MallDefine.ts","./PayControl.ts","./PayDataCache.ts","./PayDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./MonopolyDataCache.ts","./MonopolyDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,o,n,a,s,r,d,c,h,f,u,l,y,m,v,p,g,C,b,I,L,_,G,D,w,S;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t.Button,n=t.ScrollView,a=t.Sprite,s=t.Label,r=t.js,d=t.Color},function(t){c=t.ItemGrid},function(t){h=t.ListItem},function(t){f=t.default},function(t){u=t.default},null,function(t){l=t.ItemIdDefine},function(t){y=t.default},function(t){m=t.default},function(t){v=t.default},function(t){p=t.MallEventDefine,g=t.MallType},function(t){C=t.default},function(t){b=t.default},function(t){I=t.PayEventDefine,L=t.GiftType},function(t){_=t.default},function(t){G=t.ActivityType},function(t){D=t.MonopolyDataCache},function(t){w=t.MonopolyEventDefine},function(t){S=t.BaseView}],execute:function(){e._RF.push({},"7dd06fAr7FBHL7+rxsMyfzX","MonopolyGiftView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).payList=void 0,i.btnDoubleCard=void 0,i.imgDoubleCard=void 0,i.name="MonopolyGiftView",i.url="ui/module/activity/MonopolyGiftView",i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){}));var e=this.findChild("btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()}));var s=this.findChildComponent("container/payList",n);this.payList=this.addUIList(s,M,!0),this.btnDoubleCard=this.findChild("container/btnDoubleCard"),this.addComponentCallbackListener(this.btnDoubleCard,o.EventType.CLICK,(function(){uiMgr.openView("MonopolyDoubleCardView")})),this.imgDoubleCard=this.findChildComponent("container/topBg/imgDouble",a)},s.registerUpdateHandler=function(){this.addEvent(I.PAY_INFO_UPDATE,this.OnPayGiftInfoUpdate,this),this.addEvent(I.PAY_CUSTOM_INFO_UPDATE,this.OnPayGiftInfoUpdate,this),this.addEvent(I.PAY_CUSTOM_INFO_SET,this.OnPayGiftInfoUpdate,this),this.addEvent(p.MAll_INFO_UPDATE,this.OnPayGiftInfoUpdate,this),this.addEvent(w.MONO_INFO_BACK,this.onMonoInfoBack,this)},s.onAfterOpen=function(){IS(C).send_19_8(),IS(m).send_27_1(g.Activity),this.updateDoubleCard()},s.updateDoubleCard=function(){this.btnDoubleCard.active=1!=IS(D).monopolyInfo.double_card_open,this.imgDoubleCard.grayscale=1!=IS(D).monopolyInfo.double_card_open},s.onBeforeClose=function(){},s.onDestroy=function(){},s.getFactLimitNum=function(t){return 1!=IS(D).monopolyInfo.double_card_open?t:2*t},s.OnPayGiftInfoUpdate=function(){var t=this,i=IS(_).GetActivityInfo(G.Monopoly),e=[].concat(configMall.getDataByList("type",g.Activity)),o=[];for(var n in e)if(e.hasOwnProperty(n)){var a=e[n];a.condition.length>0&&"activity_group"==a.condition[0][0]&&a.condition[0][1]==i.type&&a.condition[0][2]==i.roundCfg.group_id&&2==a.price[0]&&o.push({type:1,info:a})}if(o.sort((function(t,i){return t.info.id-i.info.id})),i){var s=IS(b).GetAcivityGift(L.Activity,i.type,i.round),r=IS(b).GetAcivityGift(L.Custom,i.type,i.round),d=!1,c=null;for(var h in s)if(s.hasOwnProperty(h)){var f=s[h],u=IS(b).GetPayGiftInfo(f.id);u&&2==u.rewardState?(d=!1,c=f):(d=!0,r.push(f))}r.sort((function(i,e){var o=IS(b).GetPayGiftInfo(i.id),n=IS(b).GetPayGiftInfo(e.id),a=o&&0!=o.payCfg.buy_times&&o.bought_times&&o.bought_times>=t.getFactLimitNum(o.payCfg.buy_times);return a!=(n&&0!=n.payCfg.buy_times&&n.bought_times&&n.bought_times>=t.getFactLimitNum(n.payCfg.buy_times))?a?1:-1:i.id-e.id})),0==d&&r.push(c);for(var l=0;l<r.length;l++)19015!=r[l].id&&o.push({type:2,info:r[l]});o.sort((function(i,e){var o=t.checkDataOut(i);return o!=t.checkDataOut(e)?o?1:-1:i.type!=e.type?i.type-e.type:i.info.id!=e.info.id?i.info.id-e.info.id:void 0})),r.length>0&&(this.payList.datas=o)}},s.checkDataOut=function(t){var i;if(1==t.type)return-1!=t.info.limit&&(null!=(i=IS(v).GetBuyInfoByType(t.info.type)[t.info.id])?i:0)>=this.getFactLimitNum(t.info.limit);if(2==t.type){var e=IS(b).GetPayGiftInfo(t.info.id);return e&&0!=e.payCfg.buy_times&&e.bought_times&&e.bought_times>=this.getFactLimitNum(e.payCfg.buy_times)}},s.onMonoInfoBack=function(){this.updateDoubleCard(),this.OnPayGiftInfoUpdate()},e}(S));var M=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).txtName=void 0,i.txtDesc=void 0,i.txtPrice=void 0,i.btnBuy=void 0,i.out=void 0,i.rewardScroll=void 0,i.choose=void 0,i.red=void 0,i.chooseNodeList={},i.chooseItemGridList={},i.btnBuyMall=void 0,i.txtPriceMall=void 0,i.priceIconMall=void 0,i.chooseList=void 0,i.isFinishChoose=!1,i}i(e,t);var h=e.prototype;return h.onInit=function(){var t=this;this.btnBuyMall=f.findChild(this.node,"btnBuyMall"),this.view.addComponentCallbackListener(this.btnBuyMall,o.EventType.CLICK,(function(){t.out.active?y.showFlyTip(GetLanguage(200039)):uiMgr.openView("MallTipsView",t.data.info)})),this.txtPriceMall=f.findChildComponent(this.node,"btnBuyMall/Label",s),this.priceIconMall=f.findChildComponent(this.node,"btnBuyMall/Label/icon",a),this.txtName=f.findChildComponent(this.node,"title/Label",s),this.txtDesc=f.findChildComponent(this.node,"txtDesc",s),this.txtPrice=f.findChildComponent(this.node,"btnBuy/Label",s),this.out=f.findChild(this.node,"out"),this.btnBuy=f.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,o.EventType.CLICK,(function(){0==t.data.info.price?(IS(C).send_19_2(t.data.info.id),IS(_).UpdateMainRedByActType(G.OptionGift)):t.isFinishChoose?IS(b).Pay(t.data.info.id):y.showFlyTip(GetLanguage(400003))}));var i=f.findChildComponent(this.node,"rewardScroll",n);this.rewardScroll=this.view.addUIList(i,B,!1),this.rewardScroll.touchEvent=!1,this.choose=f.findChild(this.node,"choose"),this.red=f.findChild(this.node,"red");var e=f.findChild(this.node,"choose/1/change/btn");this.view.addComponentCallbackListener(e,o.EventType.CLICK,(function(){var i=IS(b).GetPayGiftInfo(t.data.info.id);if(0==t.data.info.price?!i||2!=i.rewardState:0==t.getFactLimitNum(t.data.info.buy_times)||(!i||!i.bought_times||!(i.bought_times>=t.getFactLimitNum(i.payCfg.buy_times)))){var e=IS(b).GetCustomInfoList(t.data.info.id);uiMgr.openView("PayOptionalDetailView",t.chooseList,t.data.info.id,e,1)}}));var r=f.findChild(this.node,"choose/2/change/btn");this.view.addComponentCallbackListener(r,o.EventType.CLICK,(function(){var i=IS(b).GetPayGiftInfo(t.data.info.id);if(0==t.data.info.price?!i||2!=i.rewardState:0==t.getFactLimitNum(t.data.info.buy_times)||(!i||!i.bought_times||!(i.bought_times>=t.getFactLimitNum(i.payCfg.buy_times)))){var e=IS(b).GetCustomInfoList(t.data.info.id);uiMgr.openView("PayOptionalDetailView",t.chooseList,t.data.info.id,e,2)}}));for(var d=1;d<3;d++)this.chooseNodeList[d]=f.findChild(this.node,"choose/"+d);for(var h=1;h<3;h++)this.chooseItemGridList[h]={go:f.findChild(this.node,"choose/"+h+"/itemGrid"),itemGrid:new c(this.view,f.findChild(this.node,"choose/"+h+"/itemGrid"))}},h.onRender=function(t,i){if(this.txtName.string=t.info.name,1==t.type){this.btnBuy.active=!1,this.choose.active=!1;var e=configGoods.getDataByKey(t.info.price[0]);this.txtPriceMall.string=t.info.price[1],this.view.loadIcon(this.priceIconMall,"icon_item",e.icon),this.rewardScroll.datas=[t.info.goods],this.btnBuyMall.active=!0,this.out.active=!1;var o=IS(v).GetBuyInfoByType(t.info.type);if(-1!=t.info.limit){var n,a=null!=(n=o[t.info.id])?n:0,s="";switch(t.info.refresh_way){case 0:s=GetLanguage(200040);break;case 1:s=GetLanguage(200041);break;case 2:s=GetLanguage(200042)}a>=this.getFactLimitNum(t.info.limit)?(this.txtDesc.node.active=!1,this.out.active=!0,this.btnBuyMall.active=!1,this.txtDesc.string=r.formatStr(s+"%s/%s",this.getFactLimitNum(t.info.limit)-a,this.getFactLimitNum(t.info.limit))):(this.txtDesc.node.active=!0,this.btnBuyMall.active=!0,this.out.active=!1,this.txtDesc.color=1!=IS(D).monopolyInfo.double_card_open?new d(84,66,49):new d(242,52,52),this.txtDesc.string=r.formatStr(s+"%s/%s",this.getFactLimitNum(t.info.limit)-a,this.getFactLimitNum(t.info.limit)))}else this.txtDesc.node.active=!1;this.red.active=e.id==l.Diamond&&!this.out.active}else if(2==t.type){this.btnBuyMall.active=!1;var c=IS(b).GetPayGiftInfo(t.info.id);if(0==t.info.price)this.txtPrice.string=GetLanguage(200045),c&&2==c.rewardState?(this.out.active=!0,this.red.active=!1,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.red.active=!0,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.color=1!=IS(D).monopolyInfo.double_card_open?new d(84,66,49):new d(242,52,52),this.txtDesc.string=u.formatStrWithMirrorDeal(GetLanguage(200046),this.getFactLimitNum(t.info.buy_times))),this.choose.active=!1,this.rewardScroll.datas=t.info.reward;else if(this.red.active=!1,this.txtPrice.string=IS(b).GetPriceString(t.info.cost_level),0==this.getFactLimitNum(t.info.buy_times)?(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!1):c&&c.bought_times?c.bought_times>=this.getFactLimitNum(c.payCfg.buy_times)?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.color=1!=IS(D).monopolyInfo.double_card_open?new d(84,66,49):new d(242,52,52),this.txtDesc.string=u.formatStrWithMirrorDeal(GetLanguage(200028),this.getFactLimitNum(t.info.buy_times)-c.bought_times,this.getFactLimitNum(t.info.buy_times))):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.color=1!=IS(D).monopolyInfo.double_card_open?new d(84,66,49):new d(242,52,52),this.txtDesc.string=u.formatStrWithMirrorDeal(GetLanguage(200028),this.getFactLimitNum(t.info.buy_times),this.getFactLimitNum(t.info.buy_times))),c.payCfg.type==L.Custom){this.choose.active=!0;var h=configCustom_mall.getDataByKey(t.info.id);this.rewardScroll.datas=h.regular_reward,this.chooseList=h.custom_reward;for(var f=1;f<3;f++)this.chooseNodeList[f].active=!1;for(var y=1;y<=this.chooseList.length;y++)this.chooseNodeList[y].active=!0;for(var m=IS(b).GetCustomInfoList(t.info.id),p=1;p<3;p++)this.chooseItemGridList[p].go.active=!1;if(null!=m){var g=0;for(var C in m)if(m.hasOwnProperty(C)){g+=1;var I=m[C];this.chooseItemGridList[I.k].go.active=!0;var _=0,G=this.chooseList[I.k-1][1];for(var w in G)if(G.hasOwnProperty(w)){var S=G[w];S[0]==I.v&&(_=S[1])}this.chooseItemGridList[I.k].itemGrid.SetItemId(I.v,_)}this.isFinishChoose=g==this.chooseList.length}else{this.isFinishChoose=!1;for(var M=1;M<3;M++)this.chooseItemGridList[M].go.active=!1}}else this.choose.active=!1,this.rewardScroll.datas=c.payCfg.reward}},h.getFactLimitNum=function(t){return 1!=IS(D).monopolyInfo.double_card_open?t:2*t},e}(h),B=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){this.itemGridNode=f.findChild(this.node,"itemGrid"),this.itemGrid=new c(this.view,this.itemGridNode)},o.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(h);e._RF.pop()}}}));

