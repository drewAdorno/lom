System.register("chunks:///_virtual/SlumberPartyStoreView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./MallControl.ts","./MallDataCache.ts","./MallDefine.ts","./RoleDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,o,a,d,r,h,l,c,u,f,m,v,p,g,C,y,I,T,L,S;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,s=t.Label,o=t.ScrollView,a=t.Sprite,d=t.js},function(t){r=t.ItemGrid},function(t){h=t.ListItem},function(t){l=t.default},function(t){c=t.default},function(t){u=t.default},null,function(t){f=t.BagEventDefine},function(t){m=t.BagModel},function(t){v=t.default},function(t){p=t.default},function(t){g=t.default},function(t){C=t.MallEventDefine,y=t.MallType},function(t){I=t.RoleEventDefine},function(t){T=t.default},function(t){L=t.ActivityState},function(t){S=t.BaseView}],execute:function(){e._RF.push({},"67c0bpHndRLNI+1kTnbJNus","SlumberPartyStoreView",void 0);var w=[1029],b=(t("default",function(t){function e(){var i;return(i=t.call(this)||this).scroll=void 0,i.nodeResParent=void 0,i.nodeResItem=void 0,i.resItems=void 0,i.txtLeftTime=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.name="SlumberPartyStoreView",i.url="ui/module/slumberparty/SlumberPartyStoreView",i}i(e,t);var d=e.prototype;return d.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()})),this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",s);var a=this.findChildComponent("view/scroll",o);this.scroll=this.addUIList(a,b),this.initResShow()},d.initResShow=function(){this.nodeResParent=this.findChild("resRoot"),this.nodeResItem=this.findChild("resRoot/resItem"),this.nodeResItem.active=!1,this.resItems=new Array;for(var t=0;t<w.length;t++){var i=nodeInstantiate.instantiate(this.nodeResItem),e=w[t];this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){})),i.parent=this.nodeResParent,i.active=!0;var o=l.findChildComponent(i,"imgIcon",a),d=configGoods.getDataByKey(e);this.loadIcon(o,"icon_item",d.icon),this.resItems.push({node:i,txtNum:l.findChildComponent(i,"txtNum",s),goodsGtid:e})}},d.registerUpdateHandler=function(){this.addEvent(C.MAll_INFO_UPDATE,this.updateInfo,this),this.addEvent(f.GOODS_INFO_UPDATE,this.updateResShow,this),this.addEvent(I.ROLE_RES_UPDATE,this.updateResShow,this)},d.onAfterOpen=function(){var t,i=IS(T).GetActivityInfo(this.openArgs[0]),e=null!=(t=i.state_time[i.state])?t:i.state_time[L.Open];this.leftTime=e.end_time-u.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=u.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(14810206),this.updateResShow(),IS(p).send_27_1(y.Activity);var n=[].concat(configMall.getDataByList("type",y.Activity)),s=[];for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];a.condition.length>0&&"activity_group"==a.condition[0][0]&&a.condition[0][1]==i.type&&a.condition[0][2]==i.roundCfg.group_id&&s.push(a)}s.sort((function(t,i){return t.id-i.id})),this.scroll.datas=s},d.onBeforeClose=function(){this.canUpdate=!1},d.onDestroy=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].node.destroy();this.resItems={}},d.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=u.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(14810206),this.canUpdate=!1)))},d.updateResShow=function(){for(var t=0;t<this.resItems.length;t++)this.resItems[t].txtNum.string=c.GetNumString(IS(m).getGoodsCountByGoodsGtid(this.resItems[t].goodsGtid))},d.updateInfo=function(){this.scroll.updateAll()},e}(S)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtPrice=void 0,i.priceIcon=void 0,i.btnBuy=void 0,i.out=void 0,i.txtLimit=void 0,i.itemGrid=void 0,i.num=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.txtPrice=l.findChildComponent(this.node,"btnBuy/Label",s),this.priceIcon=l.findChildComponent(this.node,"btnBuy/Label/icon",a),this.txtName=l.findChildComponent(this.node,"txtName",s),this.num=l.findChildComponent(this.node,"num",s),this.out=l.findChild(this.node,"out"),this.out.active=!1,this.txtLimit=l.findChildComponent(this.node,"limit/Label",s),this.itemGrid=new r(this.view,l.findChild(this.node,"itemGrid")),this.btnBuy=l.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){t.out.active?v.showFlyTip(GetLanguage(200039)):uiMgr.openView("MallTipsView",t.data)}))},o.onRender=function(t,i){this.txtName.string=t.name;var e=configGoods.getDataByKey(t.price[0]);this.txtPrice.string=t.price[1],this.view.loadIcon(this.priceIcon,"icon_item",e.icon),this.itemGrid.SetItemId(t.goods[0],t.goods[1]),this.out.active=!1;var n=IS(g).GetBuyInfoByType(t.type);if(-1!=t.limit){var s;this.num.node.active=!0;var o=null!=(s=n[t.id])?s:0,a="";switch(t.refresh_way){case 0:a=GetLanguage(200040);break;case 1:a=GetLanguage(200041);break;case 2:a=GetLanguage(200042)}o>=t.limit?(this.out.active=!0,this.num.string=d.formatStr(a+"%s/%s",t.limit-o,t.limit)):(this.out.active=!1,this.num.string=d.formatStr(a+"%s/%s",t.limit-o,t.limit))}else this.num.node.active=!1},e}(h));e._RF.pop()}}}));

