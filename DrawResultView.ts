System.register("chunks:///_virtual/DrawResultView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index3.ts","./UIList.ts","./NodeUtil.ts","./PlatformUtil.ts","./StringUtil.ts","./BaseView.ts","./SpineSkeleton.ts","./BagModel.ts","./MessageView.ts","./DrawControl.ts","./DrawDefine.ts","./EaseMethod.ts"],(function(t){"use strict";var o,i,e,n,s,a,d,r,h,c,l,u,f,p,g,C,m,w,v,y,I,S,G;return{setters:[function(t){o=t.inheritsLoose},function(t){i=t.cclegacy,e=t.Button,n=t.ScrollView,s=t.Animation,a=t.Vec3,d=t.Color,r=t.Sprite,h=t.js,c=t.Label},function(t){l=t.audioMgr},null,function(t){u=t.SelectedType,f=t.ListItem},function(t){p=t.default},function(t){g=t.PlatformUtil},function(t){C=t.default},function(t){m=t.BaseView},function(t){w=t.SpineSkeleton},function(t){v=t.BagModel},function(t){y=t.default},function(t){I=t.default},function(t){S=t.DrawEventDefine},function(t){G=t.EasingMethod}],execute:function(){var L;i._RF.push({},"d06e1X3215KBZffJeo4gIz+","DrawResultView",void 0);var T=((L={})[2]="green",L[3]="blue",L[4]="purple",L[5]="golden",L[6]="orange",L[7]="red",L[8]="pink",L[9]="color",L),B=(t("default",function(t){function i(){var o;return(o=t.call(this)||this).goodsInfoList=void 0,o.scrollGoodsList=void 0,o.drawBtnItems=void 0,o.poolId=void 0,o.needShow=void 0,o.showCount=void 0,o.goodsGtidToFirstGet=void 0,o.indexToShowTime={},o.aniRoot=void 0,o.time=0,o.name="DrawResultView",o.url="ui/module/draw/DrawResultView",o}o(i,t);var f=i.prototype;return f.onInit=function(){var t=this;this.time=0,this.goodsGtidToFirstGet={},this.needShow=!1;var o=this.findChild("imgMask");this.addComponentCallbackListener(o,e.EventType.CLICK,(function(){t.onMaskClick()}));var i=this.findChild("root/btnClose");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.onCloseClick()}));var a=this.findChildComponent("root/scrollGoodsList",n);this.scrollGoodsList=this.addUIList(a,B,!0,0,0),this.scrollGoodsList.selectedMode=u.SINGLE,this.drawBtnItems=new Array;for(var d=function(o){var i=t.findChild(h.formatStr("root/btnDraw%s",o+1));t.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.onDrawClick(o)})),t.drawBtnItems.push({node:i,imgBtnDraw:i.getComponent(r),txtName:p.findChildComponent(i,"txtName",c),nodeCost1:p.findChild(i,"costParent/cost1"),imgCost1:p.findChildComponent(i,"costParent/cost1/imgCost",r),txtCost1:p.findChildComponent(i,"costParent/cost1/txtCost",c),nodeCost2:p.findChild(i,"costParent/cost2"),imgCost2:p.findChildComponent(i,"costParent/cost2/imgCost",r),txtCost2:p.findChildComponent(i,"costParent/cost2/txtCost",c)})},l=0;l<2;l++)d(l);this.aniRoot=this.findChildComponent("root",s)},f.registerUpdateHandler=function(){},f.onAfterOpen=function(){l.playSound("common_zhaohuan"),this.time=0,this.indexToShowTime={},l.playSound("common_zhaohuan");for(var t=0;t<this.drawBtnItems.length;t++)this.drawBtnItems[t].node.scale=new a(1,1,1);this.goodsInfoList=this.openArgs[0],this.poolId=this.openArgs[1],this.goodsGtidToFirstGet=this.openArgs[2],this.showGoodsList(),this.updateDrawItems()},f.updateDrawItems=function(){for(var t,o,i,e=configCard_pool_type.getDataByKey(this.poolId).treasure,n=0;n<2;n++){var s=e[n],a=this.drawBtnItems[n];if(null!=s){a.node.active=!0,a.txtName.string=C.formatStrWithMirrorDeal(GetLanguage(200241),s[0]);var r=s[1];t=r[0],i=r[1],o=IS(v).getGoodsCountByGoodsGtid(t);var h=configGoods.getDataByKey(t);if(this.loadIcon(a.imgCost1,h.icon_group,h.icon),o>=i)a.nodeCost1.active=!0,a.nodeCost2.active=!1,a.txtCost1.string=i,a.txtCost1.color=new d(255,255,255);else{var c=i-o,l=configGoods.getDataByKey(h.price[0]),u=c*h.price[1];this.loadIcon(a.imgCost2,l.icon_group,l.icon),a.nodeCost2.active=!0,a.nodeCost1.active=o>0,a.txtCost2.string=u;var f=IS(v).getGoodsCountByGoodsGtid(h.price[0]);a.txtCost2.color=f>=u?new d(255,255,255):new d(204,81,68),o>0&&(a.txtCost1.string=o,a.txtCost1.color=new d(255,255,255))}}else a.node.active=!1}},f.showGoodsList=function(){this.scrollGoodsList.datas=this.goodsInfoList,this.showCount=0,this.needShow=!0;for(var t,o=.0085,i=0,e=0;e<this.goodsInfoList.length;e++)t=this.checkNeedRemind(this.goodsInfoList[e]),i>0&&(i+=t?.7:o,i=Math.floor(1e3*i)/1e3,this.indexToShowTime[e]=i),0==e&&(i+=.05,i=Math.floor(1e3*i)/1e3,this.indexToShowTime[e]=i),i+=t?.7:o},f.checkNeedRemind=function(t){var o=t.gtid,i=configGoods.getDataByKey(o);return!(i.quality<4)&&(i.quality>=6||(this.goodsGtidToFirstGet[o]||!1))},f.oneByOneShow=function(){this.scrollGoodsList.updateItem([this.showCount]),this.showCount=this.showCount+1},f.onBeforeClose=function(){this.time=0,this.needShow=!1,this.goodsGtidToFirstGet={},this.indexToShowTime={}},f.onUpdate=function(t){if(null!=this.showCount&&null!=this.goodsInfoList){var o=this.goodsInfoList.length;if(!(o<=0||this.showCount>=o)){var i=this.indexToShowTime[this.showCount];null!=i&&this.time>=i&&this.oneByOneShow(),this.time=this.time+t}}},f.startShake2=function(){this.aniRoot.play()},f.onDestroy=function(){},f.onMaskClick=function(){normalEvent.emit(S.DRAW_RESULT_VIEW_CLOSE),this.close()},f.onCloseClick=function(){normalEvent.emit(S.DRAW_RESULT_VIEW_CLOSE),this.close()},f.onDrawClick=function(t){var o=this,i=configCard_pool_type.getDataByKey(this.poolId).treasure[t],e=IS(v).getGoodsCountByGoodsGtid(i[1][0]);if(e<i[1][1]){var n=configGoods.getDataByKey(i[1][0]),s=configGoods.getDataByKey(n.price[0]),a=(i[1][1]-e)*n.price[1],d=i[1][1]-e,r=C.formatStrWithMirrorDeal(GetLanguage(200237),a,s.name,d);y.showBoxTip({tip:r,title:GetLanguage(200048),todayTog:"Draw_"+n.id,func:function(t){if("type_yes"==t){if(a>IS(v).getGoodsCountByGoodsGtid(n.price[0]))return void y.showFlyTip(GetLanguage(200240));IS(I).reqDraw(o.poolId,i[0]),o.close()}}})}else IS(I).reqDraw(this.poolId,i[0]),this.close()},i}(m)),function(t){function i(){for(var o,i=arguments.length,e=new Array(i),n=0;n<i;n++)e[n]=arguments[n];return(o=t.call.apply(t,[this].concat(e))||this).imgFrame=void 0,o.imgIcon=void 0,o.goodsGtid=void 0,o.scaleTween=void 0,o.opacityTween=void 0,o.spine=void 0,o.spineLoop=void 0,o}o(i,t);var e=i.prototype;return e.onInit=function(){this.imgFrame=p.findChildComponent(this.node,"imgFrame",r),this.imgIcon=p.findChildComponent(this.node,"imgIcon",r),this.node.setScale(new a(0,0,0)),this.spine=p.findChildComponent(this.node,"MX_tx_chouka_gaoji",w),this.spineLoop=p.findChildComponent(this.node,"MX_tx_chouka_gaoji_loop",w),this.spine.node.active=!1,this.spineLoop.node.active=!1},e.onRender=function(t,o){var i=this;this.goodsGtid=t.gtid;var e,n=configGoods.getDataByKey(this.goodsGtid),s=n.quality;3==n.type?e="icon_skill":4==n.type&&(e="icon_pet"),this.view.loadIcon(this.imgIcon,e,n.icon);var a=configColor.getDataByKey(s);this.view.loadIcon(this.imgFrame,"icon_equip",a.path);var d=this.view;if(this.node.active=d.needShow||!1,this.node.setScale(0,0,0),this.spine.node.active=!1,this.spineLoop.node.active=!1,d.needShow){this.clearTween(),d.checkNeedRemind(t)&&(g.vibrateLong(),d.startShake2());var r=!1,c=!1;this.scaleTween=this.view.addTween(0,1,.2,(function(t,o){o>=.5&&!r&&(s>1&&(i.spine.node.active=!0,i.spine.setAnimation(0,T[s],!1)),r=!0),o>=.7&&!c&&(s>3&&(i.spineLoop.node.active=!0,i.spineLoop.setAnimation(0,h.formatStr("%s_loop",T[s]),!0)),c=!0),i.node.setScale(o,o,o)})).easing(G.BACK_OUT).call((function(){})).start()}},e.clearTween=function(){this.scaleTween&&(this.scaleTween.stop(),this.scaleTween=null),this.opacityTween&&(this.opacityTween.stop(),this.opacityTween=null)},e.onItemClick=function(){IS(v).OpenItemTips(this.goodsGtid,this.node)},i}(f));i._RF.pop()}}}));

