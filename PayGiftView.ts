System.register("chunks:///_virtual/PayGiftView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./index57.ts","./ItemIcon.ts","./ConfigGlobal.ts","./BagModel.ts","./PrivilegeDataCache.ts","./PrivilegeDefine.ts","./PayControl.ts","./PayDataCache.ts","./PayDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var i,n,e,o,s,a,d,r,c,h,l,u,f,p,m,v,y,C,g,I,b;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Button,o=t.Animation,s=t.ScrollView,a=t.Label,d=t.Sprite,r=t.js,c=t.sys,h=t.tween},function(t){l=t.ListItem},function(t){u=t.default},null,function(t){f=t.IconAseetType},function(t){p=t.ConfigGlobal},function(t){m=t.BagModel},function(t){v=t.PrivilegeDataCache},function(t){y=t.Privilege},function(t){C=t.default},function(t){g=t.default},function(t){I=t.PayEventDefine},function(t){b=t.BaseSubView}],execute:function(){n._RF.push({},"5f9d2EEq9JNLJDTyuKR54E5","PayGiftView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).scroll=void 0,i.content=void 0,i.btnBox=void 0,i.boxRed=void 0,i.animTop=void 0,i.isFirstOpen=void 0,i.name="PayGiftView",i.url="ui/module/shop/PayGiftView",i}i(n,t);var a=n.prototype;return a.onInit=function(){this.boxRed=this.findChild("top/box/red"),this.btnBox=this.findChild("top/box"),this.addComponentCallbackListener(this.btnBox,e.EventType.CLICK,(function(){uiMgr.openView("PayRechargeRewardView")})),this.animTop=this.findChildComponent("top",o),this.content=this.findChild("scrollList/view/content");var t=this.findChildComponent("scrollList",s);this.scroll=this.addUIList(t,w,!0,0)},a.registerUpdateHandler=function(){this.addEvent(I.PAY_INFO_UPDATE,this.updateInfo,this)},a.onAfterOpen=function(){this.isFirstOpen=!0,this.animTop.play(),this.updateInfo()},a.onBeforeClose=function(){},a.onDestroy=function(){},a.updateInfo=function(){var t=this;this.btnBox.active=!1,this.boxRed.active=!1;var i=IS(g).GetGiftListByTabType(1);if(IS(v).checkPrivilegeUnlock(y.NO_ADS)||0==p.ads_icon_is_show)for(var n=0;n<i.length;n++)if(10401==i[n].id){i.splice(n,1);break}if(this.scroll.datas=i,this.isFirstOpen){this.content.setPosition(0,0,0);for(var e=function(i){var n=t.scroll.getItemByListId(i);if(null!=n){var e=n.node.getComponent(o);e.play(),e.pause(),h(n.node).delay(.08+.08*i).call((function(){n.PlayAnim()})).start()}},s=0;s<i.length;s++)e(s);this.addTimer(.08+.08*(i.length-1)+.3,1,(function(){t.isFirstOpen=!1,t.scroll.updateAll()}))}},n}(b));var w=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).icon=void 0,i.txtName=void 0,i.btnBuy=void 0,i.txtPrice=void 0,i.txtDiscount=void 0,i.discountNode=void 0,i.out=void 0,i.hot=void 0,i.new=void 0,i.red=void 0,i.rewardScroll=void 0,i.anim=void 0,i}i(n,t);var c=n.prototype;return c.onInit=function(){var t=this;this.anim=this.node.getComponent(o),this.txtName=u.findChildComponent(this.node,"title/Label",a),this.icon=u.findChildComponent(this.node,"icon",d),this.txtPrice=u.findChildComponent(this.node,"btnBuy/Label",a),this.discountNode=u.findChild(this.node,"discount"),this.txtDiscount=u.findChildComponent(this.node,"discount/Label",a),this.hot=u.findChild(this.node,"hot"),this.new=u.findChild(this.node,"new"),this.out=u.findChild(this.node,"out"),this.red=u.findChild(this.node,"btnBuy/red"),this.btnBuy=u.findChild(this.node,"btnBuy"),this.view.addComponentCallbackListener(this.btnBuy,e.EventType.CLICK,(function(){IS(g).CheckConditon(t.data.conditon)&&(0==t.data.price?IS(C).send_19_2(t.data.id):IS(g).Pay(t.data.id))}));var i=u.findChildComponent(this.node,"rewardScroll",s);this.rewardScroll=this.view.addUIList(i,_,!1,0),this.rewardScroll.touchEvent=!1},c.onRender=function(t,i){if(!this.view.isFirstOpen){var n=this.node.position;this.node.setPosition(360,n.y)}0==t.price?(this.txtPrice.string=GetLanguage(200045),this.red.active=!0):(this.txtPrice.string=IS(g).GetPriceString(t.cost_level),this.red.active=!1),this.view.loadIcon(this.icon,"pay2",t.pic_back,null,f.ICON_SPRITE),0==t.ratio?this.discountNode.active=!1:(this.discountNode.active=!0,this.txtDiscount.string=100*t.ratio+"%"),this.hot.active=1==t.icon_name,this.new.active=2==t.icon_name,this.view.loadIcon(this.icon,"pay2",t.pic_back,null,f.ICON_SPRITE);var e=IS(g).GetPayGiftInfo(t.id);this.out.active=!1,null!=e&&(e.payCfg.buy_times>0&&e.bought_times>=e.payCfg.buy_times?this.out.active=!0:0==e.payCfg.price&&2==e.rewardState&&(this.out.active=!0,this.red.active=!1)),t.buy_times>0?null!=e?0==e.payCfg.price&&2==e.rewardState?this.txtName.string=r.formatStr("%s(%s/%s)",t.name,t.buy_times,t.buy_times):this.txtName.string=r.formatStr("%s(%s/%s)",t.name,e.bought_times,t.buy_times):this.txtName.string=r.formatStr("%s(%s/%s)",t.name,0,t.buy_times):this.txtName.string=t.name,this.rewardScroll.datas=t.reward},c.PlayAnim=function(){this.anim.play()},n}(l),_=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).txtNum=void 0,i.imgFrame=void 0,i.imgIcon=void 0,i}i(n,t);var o=n.prototype;return o.onInit=function(){var t=this;this.txtNum=u.findChildComponent(this.node,"txtNum",a),this.imgFrame=u.findChildComponent(this.node,"imgFrame",d),this.imgIcon=u.findChildComponent(this.node,"imgIcon",d),this.view.addComponentCallbackListener(this.imgIcon.node,e.EventType.CLICK,(function(){IS(m).OpenItemTips(t.data[0],t.imgIcon.node)}))},o.onRender=function(t,i){var n,e=t[0],o=configGoods.getDataByKey(e),s=o.quality;1==o.type?this.txtNum.string="x"+t[1]:this.txtNum.string=o.name+" x"+t[1],3==o.type?(n="icon_skill",this.imgIcon.node.setScale(c.uiMirror?-.5:.5,.5,.5)):4==o.type?(n="icon_pet",this.imgIcon.node.setScale(c.uiMirror?-.6:.6,.6,.6)):(n="icon_item",this.imgIcon.node.setScale(c.uiMirror?-.7:.7,.7,.7));var a=configColor.getDataByKey(s);this.view.loadIcon(this.imgIcon,n,o.icon,null,f.UI_ATLAS,!0),this.view.loadIcon(this.imgFrame,"icon_equip",a.path)},n}(l);n._RF.pop()}}}));
