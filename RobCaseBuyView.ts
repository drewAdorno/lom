System.register("chunks:///_virtual/RobCaseBuyView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagDefine.ts","./ResItems.ts","./MessageView.ts","./RoleDefine.ts","./ActivityControl.ts","./ActivityDefine.ts","./RobCaseDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,a,d,h,r,l,u,c,f,v,m,p,C,g,b,y,T,w;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,o=t.HorizontalTextAlignment,s=t.Label,a=t.ScrollView,d=t.Sprite},function(t){h=t.ItemGrid},function(t){r=t.ListItem},function(t){l=t.default},function(t){u=t.default},function(t){c=t.default},null,function(t){f=t.ConfigGlobal},function(t){v=t.BagEventDefine},function(t){m=t.ResItems},function(t){p=t.default},function(t){C=t.RoleEventDefine},function(t){g=t.default},function(t){b=t.ActivityType,y=t.ActivityEventDefine},function(t){T=t.default},function(t){w=t.BaseView}],execute:function(){var _;e._RF.push({},"06294k1jFZC/rtZwiSa8edX","RobCaseBuyView",void 0);(_={})[1]="Ⅰ",_[2]="Ⅱ",_[3]="Ⅲ",_[4]="Ⅳ",_[5]="Ⅴ",_[6]="Ⅵ",_[7]="Ⅶ";var L=[2,999],I=(t("default",function(t){function e(){var i;return(i=t.call(this)||this).title=void 0,i.scroll=void 0,i.txtLeftTime=void 0,i.txtTimeDesc=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.resItems=void 0,i.name="RobCaseBuyView",i.url="ui/module/robcase/RobCaseBuyView",i}i(e,t);var d=e.prototype;return d.onInit=function(){var t=this,i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("view/nodeTime/tips");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){for(var t=f.LIMITED_RANK_SYSTEM_DETAILS,i="",e=0;e<t.length;e++)t[e][0]==b.RobCaseBuy&&(i=GetLanguage(t[e][1]));""!=i&&p.showBoxTip({tip:i,btnCnt:1,horizontalAlign:o.LEFT})})),this.findChildComponent("view/bg/desc",s).string=GetLanguage(104406),this.txtTimeDesc=this.findChildComponent("view/nodeTime/Label",s),this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",s),this.title=this.findChildComponent("view/bg/title/Label",s);var d=this.findChildComponent("view/scroll",a);this.scroll=this.addUIList(d,I,!0,0),this.resItems=new m(this),this.resItems.init(L)},d.registerUpdateHandler=function(){this.addEvent(y.OnRobCaseBuyInfo,this.updateInfo,this),this.addEvent(v.GOODS_INFO_UPDATE,this.updateResShow,this),this.addEvent(C.ROLE_RES_UPDATE,this.updateResShow,this)},d.onAfterOpen=function(){this.updateResShow(),IS(g).send_24_75(b.RobCaseBuy)},d.onBeforeClose=function(){this.canUpdate=!1},d.onDestroy=function(){},d.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=c.formatTimeStringForSecond(this.leftTime):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},d.updateResShow=function(){this.resItems.update()},d.updateInfo=function(){var t=IS(T).getBuyInfo(),i=[];for(var e in t.bundle_list)t.bundle_list.hasOwnProperty(e)&&i.push(t.bundle_list[e]);i.sort((function(t,i){return t.cfg_id-i.cfg_id})),this.scroll.datas=i,this.leftTime=t.end_time-c.serverTime,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=c.formatTimeStringForSecond(this.leftTime)):this.txtLeftTime.string=GetLanguage(200026)},e}(w)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtTitle=void 0,i.state1=void 0,i.state2=void 0,i.rewardScroll=void 0,i.btnBuy=void 0,i.btnQuit=void 0,i.out=void 0,i.txtDesc=void 0,i.iconPrice=void 0,i.txtPrice=void 0,i.txtJoinNum=void 0,i.head1=void 0,i.head2=void 0,i.head3=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.txtTitle=l.findChildComponent(this.node,"title/title",s),this.state1=l.findChild(this.node,"title/state1"),this.state2=l.findChild(this.node,"title/state2"),this.out=l.findChild(this.node,"out"),this.txtDesc=l.findChildComponent(this.node,"title/state1/desc",s),this.iconPrice=l.findChildComponent(this.node,"title/state1/icon",d),this.txtPrice=l.findChildComponent(this.node,"title/state1/price",s),this.txtJoinNum=l.findChildComponent(this.node,"title/state2/desc",s),this.head1=l.findChildComponent(this.node,"title/state2/head1",d),this.head2=l.findChildComponent(this.node,"title/state2/head2",d),this.head3=l.findChildComponent(this.node,"title/state2/head3",d);var i=l.findChild(this.node,"title/state2/btnShare");this.view.addComponentCallbackListener(i,n.EventType.CLICK,(function(){IS(g).send_24_79(t.data.group_buy_info.id,b.RobCaseBuy)}));var e=l.findChildComponent(this.node,"rewardScroll",a);this.rewardScroll=this.view.addUIList(e,S,!1,0),this.rewardScroll.touchEvent=!1,this.btnBuy=l.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){t.out.active?p.showFlyTip(GetLanguage(200039)):uiMgr.openView("RobCaseBuyTipsView",t.data.cfg_id)})),this.btnQuit=l.findChild(this.node,"btnQuit"),this.view.addComponentCallbackListener(this.btnQuit,n.EventType.CLICK,(function(){p.showBoxTip({tip:GetLanguage(201182),func:function(i){"type_yes"==i&&IS(g).send_24_78(t.data.group_buy_info.id,b.RobCaseBuy)}})}))},o.onRender=function(t,i){var e=configHalloween_group_buy.getDataByKey(t.cfg_id);if(this.txtTitle.string=u.formatStrWithMirrorDeal(GetLanguage(201183),e.name,t.remain_cnt,e.times),this.rewardScroll.datas=e.reward,t.group_buy_info){this.state1.active=!1,this.state2.active=!0,this.btnBuy.active=!1,this.btnQuit.active=!0,this.out.active=!1,this.txtJoinNum.string=u.formatStrWithMirrorDeal(GetLanguage(201184),e.members-t.group_buy_info.role_list.length);for(var n=1;n<3;n++){var o=t.group_buy_info.role_list[n-1],s=this["head"+n];o?(s.node.active=!0,this.view.loadRemoteIcon(o.head.url,s)):s.node.active=!1}}else{this.state1.active=!0,this.state2.active=!1,this.btnBuy.active=!0,this.btnQuit.active=!1,this.out.active=0==t.remain_cnt,this.txtDesc.string=u.formatStrWithMirrorDeal(GetLanguage(201185),e.members);var a=999==e.expend[0]?e.expend[1]/100:e.expend[1];this.txtPrice.string=a.toString();var d=configGoods.getDataByKey(e.expend[0]);this.view.loadIcon(this.iconPrice,d.icon_group,d.icon)}},e}(r)),S=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=l.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(r);e._RF.pop()}}}));

