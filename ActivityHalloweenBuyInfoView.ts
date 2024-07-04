System.register("chunks:///_virtual/ActivityHalloweenBuyInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BagModel.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,r,d,s,a,l,c,h,u,f,v,p,g;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,r=t.Label,d=t.Sprite,s=t.ScrollView},function(t){a=t.ItemGrid},function(t){l=t.ListItem},function(t){c=t.default},function(t){h=t.default},null,function(t){u=t.BagModel},function(t){f=t.default},function(t){v=t.default},function(t){p=t.ActivityEventDefine},function(t){g=t.BaseView}],execute:function(){n._RF.push({},"590feVa8hhDfoGnYUqpKruS","ActivityHalloweenBuyInfoView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).scroll=void 0,e.rewardScroll=void 0,e.txtDesc=void 0,e.iconPrice=void 0,e.txtPrice=void 0,e.nothing=void 0,e.name="ActivityHalloweenBuyInfoView",e.url="ui/module/halloween/ActivityHalloweenBuyInfoView",e}e(n,t);var a=n.prototype;return a.onInit=function(){var t=this,e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()})),this.txtDesc=this.findChildComponent("view/reward/desc/desc",r),this.iconPrice=this.findChildComponent("view/reward/desc/icon",d),this.txtPrice=this.findChildComponent("view/reward/desc/price",r),this.nothing=this.findChild("view/nothing");var i=this.findChildComponent("view/scroll",s);this.scroll=this.addUIList(i,w);var n=this.findChildComponent("view/reward/rewardScroll",s);this.rewardScroll=this.addUIList(n,y)},a.registerUpdateHandler=function(){this.addEvent(p.OnHalloweenBuyDetail,this.updateInfo,this)},a.onAfterOpen=function(){var t=this.openArgs[0];IS(v).send_24_81(t);var e=configHalloween_group_buy.getDataByKey(t);this.rewardScroll.datas=e.reward,this.txtDesc.string=h.formatStrWithMirrorDeal(GetLanguage(201185),e.members),this.txtPrice.string=e.expend[1];var i=configGoods.getDataByKey(e.expend[0]);this.loadIcon(this.iconPrice,i.icon_group,i.icon)},a.onBeforeClose=function(){},a.onDestroy=function(){},a.updateInfo=function(t){for(var e,n=[],o=i(t);!(e=o()).done;){var r=e.value;n.push(r)}n.sort((function(t,e){return t.role_list.length!=e.role_list.length?e.role_list.length-t.role_list.length:t.id-e.id})),this.scroll.datas=n,this.scroll.node.active=t.length>0,this.nothing.active=0==t.length},n}(g));var w=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtJoinNum=void 0,e.head1=void 0,e.head2=void 0,e.head3=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){var t=this;this.txtJoinNum=c.findChildComponent(this.node,"desc",r),this.head1=c.findChildComponent(this.node,"head1",d),this.head2=c.findChildComponent(this.node,"head2",d),this.head3=c.findChildComponent(this.node,"head3",d);var e=c.findChild(this.node,"btnBuy");this.view.addComponentCallbackListener(e,o.EventType.CLICK,(function(){var e=configHalloween_group_buy.getDataByKey(t.data.cfg_id);if(IS(u).getGoodsCountByGoodsGtid(e.expend[0])<e.expend[1])f.showFlyTip(GetLanguage(200069));else{var i=configGoods.getDataByKey(e.expend[0]),n=h.formatStrWithMirrorDeal(GetLanguage(201187),e.expend[1],i.name);f.showBoxTip({tip:n,func:function(e){"type_yes"==e&&(IS(v).send_24_77(2,t.data.id),t.view.close())}})}}))},n.onRender=function(t,e){var i=configHalloween_group_buy.getDataByKey(t.cfg_id);this.txtJoinNum.string=h.formatStrWithMirrorDeal(GetLanguage(201184),i.members-t.role_list.length);for(var n=1;n<3;n++){var o=t.role_list[n-1],r=this["head"+n];o?(r.node.active=!0,this.view.loadRemoteIcon(o.head.url,r)):r.node.active=!1}},i}(l),y=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=c.findChild(this.node,"itemGrid"),this.itemGrid=new a(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(l);n._RF.pop()}}}));

