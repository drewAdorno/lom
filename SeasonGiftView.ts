System.register("chunks:///_virtual/SeasonGiftView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./PayControl.ts","./PayDataCache.ts","./PayDefine.ts","./SeasonDataCache.ts","./SeasonDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,o,a,r,d,h,c,u,f,l,m,v,y,p,g,C,L,b,G;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,s=t.Layout,o=t.sys,a=t.Label,r=t.ScrollView,d=t.js},function(t){h=t.ItemGrid},function(t){c=t.ListItem},function(t){u=t.default},function(t){f=t.default},function(t){l=t.default},null,function(t){m=t.default},function(t){v=t.ActivityState},function(t){y=t.default},function(t){p=t.default},function(t){g=t.PayEventDefine,C=t.GiftType},function(t){L=t.SeasonDataCache},function(t){b=t.gift_list},function(t){G=t.BaseView}],execute:function(){e._RF.push({},"83471XLz3hKiZD15Yp9WbcW","SeasonGiftView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtLeftTime=void 0,i.payList=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.name="SeasonGiftView",i.url="ui/module/season/SeasonGiftView",i}i(e,t);var d=e.prototype;return d.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var d=this.findChildComponent("container/topBg/Node",s);this.dealMirrorLayout(d),d.horizontalDirection=o.uiMirror?0:1,this.txtLeftTime=this.findChildComponent("container/topBg/Node/txtLeftTime",a);var h=this.findChildComponent("container/payList",r);this.payList=this.addUIList(h,S,!0);for(var c=this.node.getComponentsInChildren(s),u=0;u<c.length;u++)1==c[u].type&&this.dealMirrorLayout(c[u])},d.registerUpdateHandler=function(){this.addEvent(g.PAY_INFO_UPDATE,this.OnPayGiftInfoUpdate,this)},d.onAfterOpen=function(){var t=IS(m).GetActivityInfo(this.openArgs[0]);if(t){var i,e=null!=(i=t.state_time[t.state])?i:t.state_time[v.Open];if(this.leftTime=e.end_time-l.serverTime,this.leftTime>0){this.canUpdate=!0;var n=l.getNextDayTime()-l.serverTime;this.txtLeftTime.string=l.formatTimeStringForSecond(n)}else this.txtLeftTime.string=GetLanguage(200026)}else this.txtLeftTime.string=GetLanguage(200026);this.OnPayGiftInfoUpdate()},d.onBeforeClose=function(){this.canUpdate=!1},d.onDestroy=function(){},d.onUpdate=function(t){if(this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1))if(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0){var i=l.getNextDayTime()-l.serverTime;this.txtLeftTime.string=l.formatTimeStringForSecond(i)}else this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1},d.OnPayGiftInfoUpdate=function(){var t=IS(m).GetActivityInfo(this.openArgs[0]);if(t){var i=IS(p).GetAcivityGift(C.Activity,t.type,t.round);(i=i.filter((function(t){return!b.includes(t.id)}))).sort((function(t,i){var e=IS(p).GetPayGiftInfo(t.id),n=IS(p).GetPayGiftInfo(i.id),s=e&&0!=e.payCfg.buy_times&&e.bought_times&&e.bought_times>=e.payCfg.buy_times;return s!=(n&&0!=n.payCfg.buy_times&&n.bought_times&&n.bought_times>=n.payCfg.buy_times)?s?1:-1:t.id-i.id})),this.payList.datas=i,IS(L).checkMapGiftRP()}else this.payList.clearData()},e}(G));var S=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtDesc=void 0,i.txtPrice=void 0,i.btnBuy=void 0,i.out=void 0,i.rp=void 0,i.rewardScroll=void 0,i}i(e,t);var h=e.prototype;return h.onInit=function(){var t=this;this.txtName=u.findChildComponent(this.node,"title/Label",a),this.txtDesc=u.findChildComponent(this.node,"txtDesc",a),this.txtPrice=u.findChildComponent(this.node,"btnBuy/Label",a),this.out=u.findChild(this.node,"out"),this.rp=u.findChild(this.node,"btnBuy/rp"),this.btnBuy=u.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){0==t.data.price?IS(y).send_19_2(t.data.id):IS(p).Pay(t.data.id)}));var i=u.findChildComponent(this.node,"rewardScroll",r);this.rewardScroll=this.view.addUIList(i,I,!1),this.rewardScroll.touchEvent=!1,o.uiMirror&&this.view.dealMirrorLayout(u.findChildComponent(this.node,"title",s))},h.onRender=function(t,i){this.txtName.string=t.name,this.rewardScroll.datas=t.reward;var e=IS(p).GetPayGiftInfo(t.id);this.rp.active=!1,0==t.price?(this.txtPrice.string=GetLanguage(200045),e&&2==e.rewardState?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.rp.active=!0,this.txtDesc.string=(o.uiMirror?f:d).formatStr(GetLanguage(200046),t.buy_times))):(this.txtPrice.string=IS(p).GetPriceString(t.cost_level),0==t.buy_times?(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!1):e&&e.bought_times?e.bought_times>=e.payCfg.buy_times?(this.out.active=!0,this.btnBuy.active=!1,this.txtDesc.node.active=!1):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=(o.uiMirror?f:d).formatStr(GetLanguage(200028),t.buy_times-e.bought_times,t.buy_times)):(this.out.active=!1,this.btnBuy.active=!0,this.txtDesc.node.active=!0,this.txtDesc.string=(o.uiMirror?f:d).formatStr(GetLanguage(200028),t.buy_times,t.buy_times)))},e}(c),I=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=u.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(c);e._RF.pop()}}}));
