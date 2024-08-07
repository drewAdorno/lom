System.register("chunks:///_virtual/SlumberPartyGiftView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./PayControl.ts","./PayDataCache.ts","./PayDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,a,o,r,d,c,h,u,f,l,m,y,v,p;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,s=t.Label,a=t.ScrollView},function(t){o=t.ItemGrid},function(t){r=t.ListItem},function(t){d=t.default},function(t){c=t.default},function(t){h=t.default},null,function(t){u=t.default},function(t){f=t.default},function(t){l=t.PayEventDefine,m=t.GiftType},function(t){y=t.default},function(t){v=t.ActivityState},function(t){p=t.BaseView}],execute:function(){e._RF.push({},"0964bI1b81B9Kzu4GTjofsT","SlumberPartyGiftView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtLeftTime=void 0,i.payList=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.name="SlumberPartyGiftView",i.url="ui/module/slumberparty/SlumberPartyGiftView",i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()})),this.txtLeftTime=this.findChildComponent("container/topBg/txtLeftTime",s);var o=this.findChildComponent("container/payList",a);this.payList=this.addUIList(o,g,!0)},o.registerUpdateHandler=function(){this.addEvent(l.PAY_INFO_UPDATE,this.OnPayGiftInfoUpdate,this)},o.onAfterOpen=function(){var t,i=IS(y).GetActivityInfo(this.openArgs[0]),e=null!=(t=i.state_time[i.state])?t:i.state_time[v.Open];this.leftTime=e.end_time-h.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=h.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(14810206),this.OnPayGiftInfoUpdate()},o.onBeforeClose=function(){this.canUpdate=!1},o.onDestroy=function(){},o.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=h.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(14810206),this.canUpdate=!1)))},o.OnPayGiftInfoUpdate=function(){var t=IS(y).GetActivityInfo(this.openArgs[0]),i=IS(f).GetAcivityGift(m.Activity,t.type,t.round);i.sort((function(t,i){var e=IS(f).GetPayGiftInfo(t.id),n=IS(f).GetPayGiftInfo(i.id),s=e&&0!=e.payCfg.buy_times&&e.bought_times&&e.bought_times>=e.payCfg.buy_times;return s!=(n&&0!=n.payCfg.buy_times&&n.bought_times&&n.bought_times>=n.payCfg.buy_times)?s?1:-1:t.id-i.id})),this.payList.datas=i},e}(p));var g=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtDesc=void 0,i.txtPrice=void 0,i.btnBuy=void 0,i.out=void 0,i.rewardScroll=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.txtName=d.findChildComponent(this.node,"title/Label",s),this.txtDesc=d.findChildComponent(this.node,"txtDesc",s),this.txtPrice=d.findChildComponent(this.node,"btnBuy/Label",s),this.out=d.findChild(this.node,"out"),this.btnBuy=d.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){0==t.data.price?IS(u).send_19_2(t.data.id):IS(f).Pay(t.data.id)}));var i=d.findChildComponent(this.node,"rewardScroll",a);this.rewardScroll=this.view.addUIList(i,b,!1),this.rewardScroll.touchEvent=!1},o.onRender=function(t,i){this.txtName.string=t.name,this.rewardScroll.datas=t.reward;var e=IS(f).GetPayGiftInfo(t.id);0==t.price?(this.txtPrice.string=GetLanguage(200045),e&&2==e.rewardState?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=c.formatStrWithMirrorDeal(GetLanguage(200046),t.buy_times))):(this.txtPrice.string=IS(f).GetPriceString(t.cost_level),0==t.buy_times?(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!1):e&&e.bought_times?e.bought_times>=e.payCfg.buy_times?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=c.formatStrWithMirrorDeal(GetLanguage(200028),t.buy_times-e.bought_times,t.buy_times)):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=c.formatStrWithMirrorDeal(GetLanguage(200028),t.buy_times,t.buy_times)))},e}(r),b=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=d.findChild(this.node,"itemGrid"),this.itemGrid=new o(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(r);e._RF.pop()}}}));

