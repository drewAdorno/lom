System.register("chunks:///_virtual/ActivityReverseGiftView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./AdDefine.ts","./AdModel.ts","./BagModel.ts","./PayControl.ts","./PayDataCache.ts","./PayDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityReverseDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,d,a,r,c,h,u,l,f,v,m,y,p,C,g,I,b,A;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,o=t.ScrollView,s=t.Label,d=t.js,a=t.Sprite},function(t){r=t.ItemGrid},function(t){c=t.ListItem},function(t){h=t.default},null,function(t){u=t.AdEventDefine,l=t.ADS_TYPE},function(t){f=t.AdModel},function(t){v=t.BagModel},function(t){m=t.default},function(t){y=t.default},function(t){p=t.PayEventDefine,C=t.GiftType},function(t){g=t.default},function(t){I=t.ActivityType},function(t){b=t.default},function(t){A=t.BaseView}],execute:function(){e._RF.push({},"1b5d7Q/lJNGrYECpAhFuA20","ActivityReverseGiftView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).scroll=void 0,i.adRed=!1,i.name="ActivityReverseGiftView",i.url="ui/module/reverse/ActivityReverseGiftView",i}i(e,t);var s=e.prototype;return s.onInit=function(){var t=this,i=this.findChild("btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChildComponent("scroll",o);this.scroll=this.addUIList(e,_,!0,0)},s.registerUpdateHandler=function(){this.addEvent(p.PAY_INFO_UPDATE,this.updateInfo,this),this.addEvent(u.AD_INFO_UPDATE,this.updateInfo,this)},s.onAfterOpen=function(){this.adRed=IS(b).getShopRed()>0,this.updateInfo(),IS(b).setShopRed()},s.onBeforeClose=function(){},s.onDestroy=function(){},s.updateInfo=function(){var t=IS(g).GetActivityInfo(I.Reverse);if(t){var i=IS(f).getAdWatchCount(l.AD_REVERSION_WAR_reward),e=configAds.getDataByKey(l.AD_REVERSION_WAR_reward),n=[];i<e.times&&(n=[{isAd:!0,id:l.AD_REVERSION_WAR_reward,reward:[[e.reward[1][0],e.reward[2][1]]],buy_times:0,name:e.name}]);var o=IS(y).GetAcivityGift(C.Activity,t.type,t.round);o.sort((function(t,i){var e=IS(y).GetPayGiftInfo(t.id),n=IS(y).GetPayGiftInfo(i.id),o=e&&0!=e.payCfg.buy_times&&e.bought_times&&e.bought_times>=e.payCfg.buy_times;return o!=(n&&0!=n.payCfg.buy_times&&n.bought_times&&n.bought_times>=n.payCfg.buy_times)?o?1:-1:t.id-i.id})),o=n.concat(o),this.scroll.datas=o}else this.scroll.clearData()},e}(A));var _=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtName=void 0,i.txtPrice=void 0,i.txtDiscount=void 0,i.discountNode=void 0,i.btnBuy=void 0,i.rewardScroll=void 0,i.scrollNode=void 0,i.out=void 0,i.red=void 0,i.adRed=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i.btnAd=void 0,i}i(e,t);var a=e.prototype;return a.onInit=function(){var t=this;this.txtPrice=h.findChildComponent(this.node,"btnBuy/Label",s),this.txtName=h.findChildComponent(this.node,"txtName",s),this.txtDiscount=h.findChildComponent(this.node,"discount/Label",s),this.discountNode=h.findChild(this.node,"discount"),this.out=h.findChild(this.node,"out"),this.itemGridNode=h.findChild(this.node,"itemGrid"),this.itemGrid=new r(this.view,this.itemGridNode),this.red=h.findChild(this.node,"btnBuy/red"),this.adRed=h.findChild(this.node,"btnAd/red"),this.btnBuy=h.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){0==t.data.price?IS(m).send_19_2(t.data.id):IS(y).Pay(t.data.id)})),this.btnAd=h.findChild(this.node,"btnAd"),this.view.addComponentCallbackListener(this.btnAd,n.EventType.CLICK,(function(){IS(f).tryWatchAd(t.data.id)}));var i=h.findChildComponent(this.node,"rewardScroll",o);this.scrollNode=i.node,this.rewardScroll=this.view.addUIList(i,w,!1,0),this.rewardScroll.touchEvent=!1},a.onRender=function(t,i){var e;t.isAd?(this.btnBuy.active=!1,this.btnAd.active=!0,this.adRed.active=this.view.adRed,this.discountNode.active=!1):(this.btnAd.active=!1,this.btnBuy.active=!0,0==t.price?(this.txtPrice.string=GetLanguage(200045),this.red.active=!0):(this.txtPrice.string=IS(y).GetPriceString(t.cost_level),this.red.active=!1),0==t.ratio?this.discountNode.active=!1:(this.discountNode.active=!0,this.txtDiscount.string=100*t.ratio+"%"),e=IS(y).GetPayGiftInfo(t.id)),this.out.active=!1,null!=e&&(e.payCfg.buy_times>0&&e.bought_times>=e.payCfg.buy_times?this.out.active=!0:0==e.payCfg.price&&2==e.rewardState&&(this.out.active=!0,this.red.active=!1)),t.buy_times>0?null!=e?0==e.payCfg.price&&2==e.rewardState?this.txtName.string=d.formatStr("%s(%s/%s)",t.name,t.buy_times,t.buy_times):this.txtName.string=d.formatStr("%s(%s/%s)",t.name,e.bought_times,t.buy_times):this.txtName.string=d.formatStr("%s(%s/%s)",t.name,0,t.buy_times):this.txtName.string=t.name,1==t.reward.length?(this.itemGridNode.active=!0,this.scrollNode.active=!1,this.itemGrid.SetItemId(t.reward[0][0],t.reward[0][1])):(this.itemGridNode.active=!1,this.scrollNode.active=!0,2==t.reward.length?this.scrollNode.setPosition(4,-40):this.scrollNode.setPosition(4,15),this.rewardScroll.datas=t.reward)},e}(c),w=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,i.imgIcon=void 0,i.txtNum=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.imgFrame=h.findChildComponent(this.node,"imgFrame",a),this.imgIcon=h.findChildComponent(this.node,"imgIcon",a),this.txtNum=h.findChildComponent(this.node,"txtNum",s),this.view.addComponentCallbackListener(this.node,n.EventType.CLICK,(function(){IS(v).OpenItemTips(t.data[0],t.node)}))},o.onRender=function(t,i){var e=t[0],n=configGoods.getDataByKey(e),o=n.quality;this.txtNum.string=t[1];var s=configColor.getDataByKey(o);this.view.loadIcon(this.imgIcon,n.icon_group,n.icon),this.view.loadIcon(this.imgFrame,"icon_equip",s.path)},e}(c);e._RF.pop()}}}));
