System.register("chunks:///_virtual/ReturnShopView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./BagModel.ts","./MessageView.ts","./GuildDataCache.ts","./MallControl.ts","./MallDataCache.ts","./MallDefine.ts","./RoleDefine.ts","./ReturnDataCache.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,o,r,s,a,d,h,l,m,u,c,f,v,g,p,I,S,C,T,L,R,y;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Label,r=t.ScrollView,s=t.sys,a=t.Sprite,d=t.RichText,h=t.Button},function(t){l=t.ItemGrid},function(t){m=t.ListItem},function(t){u=t.default},function(t){c=t.default},function(t){f=t.default},null,function(t){v=t.BagModel},function(t){g=t.default},function(t){p=t.default},function(t){I=t.default},function(t){S=t.default},function(t){C=t.MallEventDefine,T=t.MallType},function(t){L=t.RoleEventDefine},function(t){R=t.ReturnDataCache},function(t){y=t.BaseSubView}],execute:function(){n._RF.push({},"edf65d4HExFBYLNAoWbGZCV","ReturnShopView",void 0);var G=[14],w=(t("default",function(t){function n(){var e;return(e=t.call(this)||this).scroll=void 0,e.parentView=void 0,e.nodeResParent=void 0,e.nodeResItem=void 0,e.resItems=void 0,e.txtLeftTime=void 0,e.timer=void 0,e.name="ReturnShopView",e.url="ui/module/return/ReturnShopView",e}e(n,t);var d=n.prototype;return d.onInit=function(){this.initResShow(),this.txtLeftTime=this.findChildComponent("root/banner/time",o);var t=this.findChildComponent("root/scroll",r);this.scroll=this.addUIList(t,w)},d.initResShow=function(){var t=this;this.nodeResParent=this.findChild("resRoot"),this.nodeResItem=this.findChild("resRoot/resItem"),this.nodeResItem.active=!1,this.resItems=new Array;for(var e=function(e){var i=nodeInstantiate.instantiate(t.nodeResItem),n=G[e];t.addComponentCallbackListener(i,h.EventType.CLICK,(function(){var t=u.findChild(i,"txtNum");IS(v).OpenItemTips(n,t)})),i.parent=t.nodeResParent,i.active=!0;var r=u.findChildComponent(i,"imgIcon",a),s=configGoods.getDataByKey(n);t.loadIcon(r,"icon_item",s.icon),t.resItems.push({node:i,txtNum:u.findChildComponent(i,"txtNum",o),goodsGtid:n})},i=0;i<G.length;i++)e(i)},d.updateResShow=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].txtNum.string=c.GetNumString(IS(v).getGoodsCountByGoodsGtid(this.resItems[t].goodsGtid))},d.registerUpdateHandler=function(){this.addEvent(L.ROLE_RES_UPDATE,this.updateResShow,this),this.addEvent(C.MAll_INFO_UPDATE,this.refreshShow,this),this.addEvent(C.MAll_LIMIT_INFO_UPDATE,this.refreshShow,this)},d.onAfterOpen=function(){IS(R).SetShopRed(),IS(I).send_27_1(T.Return),this.updateResShow(),this.refreshShow(),this.UpdateTime()},d.refreshShow=function(){for(var t={},e=configBack_mall.getDatas(),n=IS(R).GetReturnDay(),o=0;o<e.length;o++){IS(R).checkReturnDay(n,e[o])&&(t[e[o].id]=!0)}for(var r,s=configMall.getDataByList("type",T.Return),a=[],d=i(s);!(r=d()).done;){var h=r.value;t[h.id]&&a.push(h)}a.sort((function(t,e){return t.sort-e.sort})),this.scroll.datas=a},d.UpdateTime=function(){var t=this;this.timer&&(this.removeTimer(this.timer),this.timer=null);var e=IS(R).GetReturnInfo();if(e&&e.end_time-f.serverTime>0){var i=c.formatStrWithMirrorDeal(GetLanguage(200043),f.formatTimeStringForSecond(Math.max(0,e.end_time-f.serverTime)));s.uiMirror&&(i=f.formatTimeStringForSecond(Math.max(0,e.end_time-f.serverTime))),this.txtLeftTime.string=i,this.timer=this.addTimer(1,e.end_time-f.serverTime,(function(){if(e.end_time-f.serverTime>0){var i=c.formatStrWithMirrorDeal(GetLanguage(200043),f.formatTimeStringForSecond(Math.max(0,e.end_time-f.serverTime)));s.uiMirror&&(i=f.formatTimeStringForSecond(Math.max(0,e.end_time-f.serverTime))),t.txtLeftTime.string=i}else t.removeTimer(t.timer),t.timer=null,t.txtLeftTime.string=GetLanguage(200026)}))}else this.txtLeftTime.string=GetLanguage(200026)},d.onBeforeClose=function(){this.timer&&(this.removeTimer(this.timer),this.timer=null)},d.onDestroy=function(){},n}(y)),function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtName=void 0,e.txtPrice=void 0,e.priceIcon=void 0,e.btnBuy=void 0,e.out=void 0,e.limit=void 0,e.txtLimit=void 0,e.itemGrid=void 0,e.num=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){var t=this;this.txtPrice=u.findChildComponent(this.node,"btnBuy/Label",o),this.priceIcon=u.findChildComponent(this.node,"btnBuy/Label/icon",a),this.txtName=u.findChildComponent(this.node,"txtName",o),this.num=u.findChildComponent(this.node,"num",d),this.out=u.findChild(this.node,"out"),this.limit=u.findChild(this.node,"limit"),this.txtLimit=u.findChildComponent(this.node,"limit/Label",o),this.itemGrid=new l(this.view,u.findChild(this.node,"itemGrid")),this.btnBuy=u.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,h.EventType.CLICK,(function(){t.out.active?g.showFlyTip(GetLanguage(200039)):t.limit.active?g.showFlyTip(GetLanguage(200371)):uiMgr.openView("MallTipsView",t.data)}))},n.onRender=function(t,e){this.txtName.string=t.name;var i=configGoods.getDataByKey(t.price[0]);this.txtPrice.string=t.price[1],this.view.loadIcon(this.priceIcon,"icon_item",i.icon),this.itemGrid.SetItemId(t.goods[0],t.goods[1]);var n=IS(p).GetGuildInfo(),o=0;t.condition.length>0&&(o=t.condition[0][1]),this.txtLimit.string=c.formatStrWithMirrorDeal(GetLanguage(200372),o),this.limit.active=n.level<o;var r=IS(S).GetBuyInfoByType(t.type);if(-1!=t.limit){var s;this.num.node.active=!0;var a=null!=(s=r[t.id])?s:0;a>=t.limit?(this.out.active=!0,this.num.string=c.formatStrWithMirrorDeal(GetLanguage(200373),t.limit-a,t.limit)):(this.out.active=!1,this.num.string=c.formatStrWithMirrorDeal(GetLanguage(200374),t.limit-a,t.limit))}else this.num.node.active=!1},i}(m));n._RF.pop()}}}));
