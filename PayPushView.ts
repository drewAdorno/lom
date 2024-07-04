System.register("chunks:///_virtual/PayPushView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./PayDataCache.ts","./PayDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,s,n,a,o,h,r,f,d,c,u,l,g,m;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){s=t.cclegacy,n=t.Button,a=t.Label,o=t.ScrollView,h=t.sys},function(t){r=t.ItemGrid},function(t){f=t.ListItem},function(t){d=t.default},function(t){c=t.default},function(t){u=t.default},null,function(t){l=t.default},function(t){g=t.PayEventDefine},function(t){m=t.BaseView}],execute:function(){s._RF.push({},"1f985rKwHlFdJkzF/XTbHsM","PayPushView",void 0);t("default",function(t){function s(){var i;return(i=t.call(this)||this).btnLeft=void 0,i.btnRight=void 0,i.txtPrice=void 0,i.rewardScroll=void 0,i.txtTitle=void 0,i.txtCount=void 0,i.txtDesc=void 0,i.txtLeftTime=void 0,i.payGiftInfo=void 0,i.pushGiftList=void 0,i.maxPage=0,i.curPage=0,i.time=0,i.pageGo=void 0,i.pageItemGo=void 0,i.pageItems=[],i.name="PayPushView",i.url="ui/module/shop/PayPushView",i.poolTime=3e3,i}i(s,t);var r=s.prototype;return r.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.btnLeft=this.findChild("btnLeft"),this.addComponentCallbackListener(this.btnLeft,n.EventType.CLICK,(function(){t.SwitchPage(-1)})),this.btnRight=this.findChild("btnRight"),this.addComponentCallbackListener(this.btnRight,n.EventType.CLICK,(function(){t.SwitchPage(1)})),this.txtTitle=this.findChildComponent("bg/title",a),this.txtCount=this.findChildComponent("bg/txtCount",a),this.txtDesc=this.findChildComponent("bg/txtDesc",a),this.txtLeftTime=this.findChildComponent("bg/txtLeftTime",a),this.txtPrice=this.findChildComponent("bg/btnPay/Label",a);var e=this.findChild("bg/btnPay");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){IS(l).Pay(t.payGiftInfo.id)}));var s=d.findChildComponent(this.node,"bg/rewardScroll",o);this.rewardScroll=this.addUIList(s,p),this.rewardScroll.lackCenter=!0,this.pageGo=this.findChild("bg/page"),this.pageItemGo=this.findChild("bg/page/pageItem"),this.pageItemGo.active=!1,h.uiMirror&&(this.txtDesc.isBold=!1)},r.registerUpdateHandler=function(){this.addEvent(g.PAY_INFO_UPDATE,this.onPayInfoUpdate,this)},r.onAfterOpen=function(){this.payGiftInfo=this.openArgs[0],this.pushGiftList=IS(l).GetPushGiftList(),this.maxPage=this.pushGiftList.length,this.pageGo.active=this.maxPage>1,this.ClearPageItem();for(var t=0;t<this.maxPage;t++){var i=nodeInstantiate.instantiate(this.pageItemGo);this.pageGo.addChild(i),i.active=!0;var e=new v;e.Init(this,i),this.pageItems.push(e)}var s=1;if(null!=this.payGiftInfo)for(var n in this.pushGiftList){if(this.pushGiftList.hasOwnProperty(n))if(this.pushGiftList[n].id==this.payGiftInfo.id){s=Number(n)+1;break}}else this.payGiftInfo=this.pushGiftList[0];this.SetPage(s)},r.onBeforeClose=function(){this.curPage=0,this.maxPage=0,this.pushGiftList=null,this.payGiftInfo=null,this.time=0,this.ClearPageItem()},r.onDestroy=function(){},r.onUpdate=function(t){if(this.time=this.time+t,this.time>1){this.time=0;var i=this.payGiftInfo.end_time-u.serverTime,e=c.formatStrWithMirrorDeal(GetLanguage(200043),u.formatTimeForSecond(i));h.uiMirror&&(e=u.formatTimeForSecond(i)),this.txtLeftTime.string=e}},r.SetPage=function(t){if(this.curPage!=t&&0!=this.pageItems.length){this.curPage&&this.curPage>0&&this.pageItems[this.curPage-1].SetSelected(!1),this.curPage=t,this.pageItems[this.curPage-1].SetSelected(!0);var i=this.pushGiftList[t-1];this.payGiftInfo=i,this.UpdateSwitchBtn(),this.txtTitle.string=100*i.payCfg.ratio+"%",this.txtPrice.string=IS(l).GetPriceString(i.payCfg.cost_level),this.txtDesc.string=i.payCfg.desc;var e=i.end_time-u.serverTime,s=c.formatStrWithMirrorDeal(GetLanguage(200043),u.formatTimeForSecond(e));h.uiMirror&&(s=u.formatTimeForSecond(e)),this.txtLeftTime.string=s,this.rewardScroll.datas=i.payCfg.reward,this.txtCount.string=c.formatStrWithMirrorDeal(GetLanguage(200028),i.bought_times,i.payCfg.buy_times)}},r.ClearPageItem=function(){for(var t,i=e(this.pageItems);!(t=i()).done;){t.value.Clear()}this.pageItems=[]},r.UpdateSwitchBtn=function(){this.maxPage>1?(this.btnLeft.active=this.curPage>1,this.btnRight.active=this.curPage<this.maxPage):(this.btnLeft.active=!1,this.btnRight.active=!1)},r.SwitchPage=function(t){if(t>0){if(this.curPage>=this.maxPage)return}else if(this.curPage<=1)return;var i=this.curPage+t;this.SetPage(i)},r.onPayInfoUpdate=function(t){if(t[this.payGiftInfo.id]){var i=this.payGiftInfo.payCfg;(this.payGiftInfo.bought_times>=i.buy_times||this.payGiftInfo.end_time<=u.serverTime)&&this.close()}},s}(m));var p=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){this.itemGridNode=d.findChild(this.node,"itemGrid"),this.itemGrid=new r(this.view,this.itemGridNode)},s.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(f),v=function(){function t(){this.view=void 0,this.node=void 0,this.normalGo=void 0,this.selectedGo=void 0}var i=t.prototype;return i.Init=function(t,i){this.view=t,this.node=i,this.normalGo=d.findChild(this.node,"normal"),this.selectedGo=d.findChild(this.node,"selected"),this.selectedGo.active=!1},i.SetSelected=function(t){this.normalGo.active=!t,this.selectedGo.active=t},i.Clear=function(){this.node.destroy()},t}();s._RF.pop()}}}));
