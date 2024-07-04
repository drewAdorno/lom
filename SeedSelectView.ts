System.register("chunks:///_virtual/SeedSelectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./ItemIcon.ts","./ConfigGlobal.ts","./AdDefine.ts","./AdModel.ts","./BagModel.ts","./MessageView.ts","./RoleDataCache.ts","./RoleDefine.ts","./SdkControl.ts","./PlantControl.ts","./PlantModel.ts","./BaseView.ts"],(function(e){"use strict";var t,n,i,o,d,s,a,l,u,h,S,c,r,C,E,I,m,f,_,g,v,p,A,R;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e.Button,o=e.Sprite,d=e.LabelOutline,s=e.Label,a=e.Vec3,l=e.js,u=e.Color},function(e){h=e.default},null,function(e){S=e.IconAseetType},function(e){c=e.ConfigGlobal},function(e){r=e.ADS_TYPE,C=e.AdEventDefine},function(e){E=e.AdModel},function(e){I=e.BagModel},function(e){m=e.default},function(e){f=e.RoleDataCache},function(e){_=e.PlayerAttr,g=e.RoleEventDefine},function(e){v=e.default},function(e){p=e.default},function(e){A=e.PlantModel},function(e){R=e.BaseView}],execute:function(){n._RF.push({},"f3ebbPLbgtNm58r8tj4FdwG","SeedSelectView",void 0);e("default",function(e){function n(){var t;return(t=e.call(this)||this).nodeBtnSeedGet=void 0,t.nodeBtnAd=void 0,t.txtAdDesc=void 0,t.txtAdCount=void 0,t.nodeAdIcon=void 0,t.txtSeedGetCount=void 0,t.txtSeedBuyCount=void 0,t.txtSeedRareCount=void 0,t.nodeSeedGetSelect=void 0,t.nodeSeedBuySelect=void 0,t.nodeSeedRareSelect=void 0,t.imgBtnPlant=void 0,t.outlinePlant=void 0,t.useSeedItemId=void 0,t.landId=void 0,t.txtPlant=void 0,t.isOneKey=!1,t.name="SeedSelectView",t.url="ui/module/plant/SeedSelectView",t}t(n,e);var R=n.prototype;return R.onInit=function(){var e=this,t=this.findChild("imgMask");this.addComponentCallbackListener(t,i.EventType.CLICK,(function(){e.close()}));var n=this.findChild("view/btnUse");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){e.onPlantClick()})),this.imgBtnPlant=n.getComponent(o),this.outlinePlant=this.findChildComponent("view/btnUse/Label",d),this.txtPlant=this.outlinePlant.node.getComponent(s),this.nodeBtnSeedGet=this.findChild("view/btnSeedGet"),this.addComponentCallbackListener(this.nodeBtnSeedGet,i.EventType.CLICK,(function(){e.useSeedItemId=_.ROLE_SEED_GET,e.updateSelect()})),this.nodeBtnAd=this.findChild("view/btnSeedAd"),this.addComponentCallbackListener(this.nodeBtnAd,i.EventType.CLICK,(function(){IS(E).tryWatchAd(r.AD_FARM_SEED)})),this.txtAdDesc=this.findChildComponent("view/btnSeedAd/txtDesc",s),this.txtAdCount=this.findChildComponent("view/btnSeedAd/txtCount",s),this.nodeAdIcon=this.findChild("view/btnSeedAd/imgAd"),this.nodeAdIcon.active=1==c.ads_icon_is_show,this.loadIcon(this.nodeAdIcon.getComponent(o),"common","common_icon_bofang"),this.txtAdCount.node.position=1==c.ads_icon_is_show?new a(16,-13,0):new a(0,-13,0);var l=this.findChildComponent("view/btnSeedGet/normal/imgIcon",o),u=configGoods.getDataByKey(_.ROLE_SEED_GET);this.loadIcon(l,u.icon_group,u.icon);var h=this.nodeBtnSeedGet.getComponent(o),C=configColor.getDataByKey(u.quality);this.loadIcon(h,"icon_equip",C.path,null,S.UI_ATLAS,!0),this.findChildComponent("view/btnSeedGet/txtName",s).string=u.name,this.txtSeedGetCount=this.findChildComponent("view/btnSeedGet/normal/txtNum",s),this.nodeSeedGetSelect=this.findChild("view/btnSeedGet/imgSelect");var I=this.findChild("view/btnSeedBuy");this.addComponentCallbackListener(I,i.EventType.CLICK,(function(){e.useSeedItemId=_.ROLE_SEED_BUY,e.updateSelect()}));var m=this.findChildComponent("view/btnSeedBuy/normal/imgIcon",o),f=configGoods.getDataByKey(_.ROLE_SEED_BUY);this.loadIcon(m,f.icon_group,f.icon);var g=I.getComponent(o),v=configColor.getDataByKey(f.quality);this.loadIcon(g,"icon_equip",v.path,null,S.UI_ATLAS,!0),this.findChildComponent("view/btnSeedBuy/txtName",s).string=f.name,this.txtSeedBuyCount=this.findChildComponent("view/btnSeedBuy/normal/txtNum",s),this.nodeSeedBuySelect=this.findChild("view/btnSeedBuy/imgSelect");var p=this.findChild("view/btnSeedRare");this.addComponentCallbackListener(p,i.EventType.CLICK,(function(){e.useSeedItemId=_.ROLE_SEED_RARE,e.updateSelect()}));var A=this.findChildComponent("view/btnSeedRare/normal/imgIcon",o),R=configGoods.getDataByKey(_.ROLE_SEED_RARE);this.loadIcon(A,R.icon_group,R.icon);var y=p.getComponent(o),G=configColor.getDataByKey(R.quality);this.loadIcon(y,"icon_equip",G.path,null,S.UI_ATLAS,!0),this.findChildComponent("view/btnSeedRare/txtName",s).string=R.name,this.txtSeedRareCount=this.findChildComponent("view/btnSeedRare/normal/txtNum",s),this.nodeSeedRareSelect=this.findChild("view/btnSeedRare/imgSelect")},R.registerUpdateHandler=function(){this.addEvent(C.AD_INFO_UPDATE,this.onAdInfoUpdate,this),this.addEvent(g.ROLE_RES_UPDATE,this.onRoleResUpdate,this)},R.onAfterOpen=function(){this.landId=this.openArgs[0],this.isOneKey=this.openArgs[1]||!1,this.txtPlant.string=this.isOneKey?GetLanguage(203824):GetLanguage(203825),this.updateAdInfo();var e=IS(I).getGoodsCountByGoodsGtid(_.ROLE_SEED_GET),t=IS(I).getGoodsCountByGoodsGtid(_.ROLE_SEED_BUY),n=IS(I).getGoodsCountByGoodsGtid(_.ROLE_SEED_RARE);this.txtSeedGetCount.string=e,this.txtSeedBuyCount.string=t,this.txtSeedRareCount.string=n,this.nodeBtnAd.active=e<=0,this.nodeBtnSeedGet.active=e>0,e>0?this.useSeedItemId=_.ROLE_SEED_GET:t>0?this.useSeedItemId=_.ROLE_SEED_BUY:n>0&&(this.useSeedItemId=_.ROLE_SEED_RARE),this.updateSelect()},R.updateAdInfo=function(){var e=configAds.getDataByKey(r.AD_FARM_SEED),t=IS(E).getAdRewardValue(r.AD_FARM_SEED);this.txtAdDesc.string=h.formatStrWithMirrorDeal(e.desc,t);var n=IS(E).getAdWatchCount(r.AD_FARM_SEED);this.txtAdCount.string=l.formatStr("(%s/%s)",e.times-n,e.times)},R.updateSelect=function(){this.nodeSeedGetSelect.active=this.useSeedItemId&&this.useSeedItemId==_.ROLE_SEED_GET,this.nodeSeedBuySelect.active=this.useSeedItemId&&this.useSeedItemId==_.ROLE_SEED_BUY,this.nodeSeedRareSelect.active=this.useSeedItemId&&this.useSeedItemId==_.ROLE_SEED_RARE,this.loadIcon(this.imgBtnPlant,"common",null==this.useSeedItemId?"common_ICON_zhihuianniu":"common_ICON_luanniu"),this.outlinePlant.color=null==this.useSeedItemId?new u(76,76,76):new u(41,65,21)},R.onBeforeClose=function(){this.useSeedItemId=null},R.onDestroy=function(){},R.onAdInfoUpdate=function(e){e==r.AD_FARM_SEED&&this.updateAdInfo()},R.onRoleResUpdate=function(e){if(e==_.ROLE_SEED_GET){var t=IS(I).getGoodsCountByGoodsGtid(_.ROLE_SEED_GET);this.txtSeedGetCount.string=t,this.nodeBtnAd.active=t<=0,this.nodeBtnSeedGet.active=t>0,t>0&&null==this.useSeedItemId&&(this.useSeedItemId=_.ROLE_SEED_GET,this.updateSelect())}else e==_.ROLE_SEED_BUY?this.txtSeedBuyCount.string=IS(I).getGoodsCountByGoodsGtid(_.ROLE_SEED_BUY):e==_.ROLE_SEED_RARE&&(this.txtSeedRareCount.string=IS(I).getGoodsCountByGoodsGtid(_.ROLE_SEED_RARE))},R.onPlantClick=function(){if(null!=this.useSeedItemId){var e=IS(I).getGoodsCountByGoodsGtid(this.useSeedItemId);if(e<=0)m.showFlyTip(GetLanguage(200526));else{if(this.isOneKey)for(var t=0,n=IS(A).getMeetConditionLand("plant"),i=0;i<n.length&&!(e-t<=0);i++)IS(p).reqHomeFarmPlant(this.useSeedItemId,n[i]),t+=1;else IS(p).reqHomeFarmPlant(this.useSeedItemId,this.landId);var o=[];IS(f).isHaveHideByType(1)||IS(f).GetIsClickSubscribe(4)||(o.push(4),IS(f).clickSubscribe(4)),IS(f).isHaveHideByType(1)||IS(f).GetIsClickSubscribe(5)||(o.push(5),IS(f).clickSubscribe(5)),o.length>0&&IS(v).requestSubscribeMessage(o),this.close()}}else m.showFlyTip(GetLanguage(200525))},n}(R));n._RF.pop()}}}));

