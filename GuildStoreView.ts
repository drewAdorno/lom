System.register("chunks:///_virtual/GuildStoreView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./MallControl.ts","./MallDataCache.ts","./MallDefine.ts","./GuildDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,a,d,r,l,h,u,c,f,m,v,p,g,C,I,y,L,G,T;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.ScrollView,a=t.UITransform,d=t.Label,r=t.Vec3,l=t.Sprite,h=t.RichText},function(t){u=t.ItemGrid},function(t){c=t.ListItem},function(t){f=t.default},function(t){m=t.default},null,function(t){v=t.BagEventDefine},function(t){p=t.BagModel},function(t){g=t.default},function(t){C=t.default},function(t){I=t.default},function(t){y=t.MallEventDefine,L=t.MallType},function(t){G=t.default},function(t){T=t.BaseView}],execute:function(){n._RF.push({},"f1496ny0apNFLkaBG9eNQq3","GuildStoreView",void 0);var w=[7001],S=(t("default",function(t){function n(){var i;return(i=t.call(this)||this).scroll=void 0,i.time=0,i.nodeResParent=void 0,i.nodeResItem=void 0,i.resItems=void 0,i.name="GuildStoreView",i.url="ui/module/guild/GuildStoreView",i}i(n,t);var a=n.prototype;return a.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()}));var e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()}));var n=this.findChildComponent("view/scrollList",s);this.scroll=this.addUIList(n,S,!0,0),this.initResShow()},a.initResShow=function(){var t=this;this.nodeResParent=this.findChild("resRoot"),this.nodeResItem=this.findChild("resRoot/resItem"),this.nodeResItem.active=!1,this.resItems=new Array;for(var i=function(i){var e=nodeInstantiate.instantiate(t.nodeResItem),n=w[i];t.addComponentCallbackListener(e,o.EventType.CLICK,(function(){var t=f.findChild(e,"txtNum");IS(p).OpenItemTips(n,t)})),e.parent=t.nodeResParent,e.active=!0;var s=f.findChildComponent(e,"imgIcon",l),a=configGoods.getDataByKey(n);t.loadIcon(s,"icon_item",a.icon),t.resItems.push({node:e,txtNum:f.findChildComponent(e,"txtNum",d),goodsGtid:n})},e=0;e<w.length;e++)i(e)},a.registerUpdateHandler=function(){this.addEvent(y.MAll_INFO_UPDATE,this.updateInfo,this),this.addEvent(v.GOODS_INFO_UPDATE,this.updateResShow,this)},a.onAfterOpen=function(){this.scroll.scrollView.scrollToTop(),this.updateResShow(),IS(C).send_27_1(L.GuildDay),IS(C).send_27_1(L.GuildWeek)},a.onBeforeClose=function(){},a.onDestroy=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].node.destroy();this.resItems={}},a.updateResShow=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].txtNum.string=m.GetNumString(IS(p).getGoodsCountByGoodsGtid(this.resItems[t].goodsGtid))},a.updateInfo=function(){for(var t=[],i=IS(G).GetGuildInfo(),n=[{type:L.GuildDay,name:GetLanguage(200369)},{type:L.GuildWeek,name:GetLanguage(200370)}],o=0;o<n.length;o++){var s=configMall.getDataByList("type",n[o].type);s&&function(){t.push({type:1,name:n[o].name});for(var a,d=[],r=e(s);!(a=r()).done;){var l=a.value;d.push(l)}var h=IS(I).GetBuyInfoByType(n[o].type);d.sort((function(t,e){var n,o,s=0;t.condition.length>0&&(s=t.condition[0][1]);var a=i.level<s,d=null!=(n=h[t.id])?n:0,r=1;-1!=t.limit&&d>=t.limit?r=2:a&&(r=3),s=0,e.condition.length>0&&(s=e.condition[0][1]);var l=i.level<s;d=null!=(o=h[e.id])?o:0;var u=1;return-1!=e.limit&&d>=e.limit?u=2:l&&(u=3),r!=u?r-u:t.sort-e.sort}));for(var u=[],c=0;c<d.length;c++)u.push(d[c]),2!=u.length&&c!=d.length-1||(t.push({type:2,list:u}),u=[])}()}this.scroll.datas=t},n}(T)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtTitle=void 0,i.topLine=void 0,i.titleTrans=void 0,i.itemListTrans=void 0,i.itemList=[],i}i(e,t);var n=e.prototype;return n.onInit=function(){this.adaptiveSize=!0,this.topLine=f.findChild(this.node,"title/topLine"),this.titleTrans=f.findChildComponent(this.node,"title",a),this.txtTitle=f.findChildComponent(this.node,"title/Label",d),this.itemListTrans=f.findChildComponent(this.node,"itemList",a);for(var t=0;t<2;t++){var i=new B;i.onInit(this.view,f.findChild(this.node,"itemList/item"+(t+1))),this.itemList.push(i)}},n.onRender=function(t,i){if(1==t.type){var e=this.titleTrans.height;if(this.topLine.active=i>0,0==i){e-=30;var n=this.titleTrans.node.position;this.titleTrans.node.position=new r(n.x,22,0)}else this.titleTrans.node.position=r.ZERO;this.titleTrans.node.active=!0,this.itemListTrans.node.active=!1,this.txtTitle.string=t.name,this.ut.height=e}else{this.titleTrans.node.active=!1,this.itemListTrans.node.active=!0,this.txtTitle.string=t.name,this.ut.height=this.itemListTrans.height;for(var o=0;o<2;o++)this.itemList[o].onRender(t.list[o])}},e}(c)),B=function(){function t(){this.node=void 0,this.view=void 0,this.data=void 0,this.txtName=void 0,this.txtPrice=void 0,this.priceIcon=void 0,this.btnBuy=void 0,this.out=void 0,this.limit=void 0,this.txtLimit=void 0,this.itemGrid=void 0,this.num=void 0}var i=t.prototype;return i.onInit=function(t,i){var e=this;this.node=i,this.view=t,this.txtPrice=f.findChildComponent(this.node,"btnBuy/Label",d),this.priceIcon=f.findChildComponent(this.node,"btnBuy/Label/icon",l),this.txtName=f.findChildComponent(this.node,"txtName",d),this.num=f.findChildComponent(this.node,"num",h),this.out=f.findChild(this.node,"out"),this.limit=f.findChild(this.node,"limit"),this.txtLimit=f.findChildComponent(this.node,"limit/Label",d),this.itemGrid=new u(this.view,f.findChild(this.node,"itemGrid")),this.btnBuy=f.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,o.EventType.CLICK,(function(){e.out.active?g.showFlyTip(GetLanguage(200039)):e.limit.active?g.showFlyTip(GetLanguage(200371)):uiMgr.openView("MallTipsView",e.data)}))},i.onRender=function(t,i){if(this.data=t,t){this.node.active=!0,this.txtName.string=t.name;var e=configGoods.getDataByKey(t.price[0]);this.txtPrice.string=t.price[1],this.view.loadIcon(this.priceIcon,"icon_item",e.icon),this.itemGrid.SetItemId(t.goods[0],t.goods[1]);var n=IS(G).GetGuildInfo(),o=0;t.condition.length>0&&(o=t.condition[0][1]),this.txtLimit.string=m.formatStrWithMirrorDeal(GetLanguage(200372),o),this.limit.active=n.level<o;var s=IS(I).GetBuyInfoByType(t.type);if(-1!=t.limit){var a;this.num.node.active=!0;var d=null!=(a=s[t.id])?a:0;d>=t.limit?(this.out.active=!0,this.num.string=m.formatStrWithMirrorDeal(GetLanguage(200373),t.limit-d,t.limit)):(this.out.active=!1,this.num.string=m.formatStrWithMirrorDeal(GetLanguage(200374),t.limit-d,t.limit))}else this.num.node.active=!1}else this.node.active=!1},t}();n._RF.pop()}}}));
