System.register("chunks:///_virtual/ActivityStrategyEquipAttrView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./index57.ts","./ObjectUtil.ts","./BagModel.ts","./MessageView.ts","./RoleDataCache.ts","./ActivityStrategyControl.ts","./ActivityStrategyDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,a,r,s,u,c,d,h,l,f;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,a=t.Label},function(t){r=t.default},null,function(t){s=t.default},function(t){u=t.BagModel},function(t){c=t.default},function(t){d=t.RoleDataCache},function(t){h=t.default},function(t){l=t.default},function(t){f=t.BaseView}],execute:function(){n._RF.push({},"f62f4uI1aRCCJksAB1hVF3k","ActivityStrategyEquipAttrView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).curAttr=[],i.tarAttr=[],i.location=void 0,i.tar1=0,i.tar2=0,i.name="ActivityStrategyEquipAttrView",i.url="ui/module/ActivityStrategy/ActivityStrategyEquipAttrView",i}i(n,t);var a=n.prototype;return a.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()}));var e=this.findChild("content/btn1");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.close()}));var n=this.findChild("content/btn2");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){var i,e,n=IS(l).getEquipByLocation(t.location),o=n.rand_attr||[],a=o[0]||{k:0},r=o[1]||{k:0},s=(null==(i=configEquipment_attr.getDataByKey(t.tar1))?void 0:i.attr_id)||0,d=(null==(e=configEquipment_attr.getDataByKey(t.tar2))?void 0:e.attr_id)||0;if(a.k==s&&r.k==d||a.k==d&&r.k==s)c.showFlyTip(GetLanguage(201501));else{var f=IS(l).getCurEquipRebuildCostNum();IS(u).getGoodsCountByGoodsGtid(1038)<f?c.showFlyTip(GetLanguage(200093)):uiMgr.openView("ActivityStrategyConfirmView",{desc1:GetLanguage(999000609),num:f,goodsId:1038,cb:function(i){if(1==i){var e=[];0!=s&&e.push(s),0!=d&&e.push(d),IS(h).reqActStrategyTabEquipRebuild(n.config_id,e),t.close()}}})}}));for(var a=1;a<=2;a++){var r=new v;r.init(this.findChild("content/cur/attr"+a),this,a-1),this.curAttr.push(r)}for(var s=1;s<=2;s++){var d=new g;d.init(this.findChild("content/tar/attr"+s),this,s-1),this.tarAttr.push(d)}},a.registerUpdateHandler=function(){},a.onAfterOpen=function(){this.location=this.openArgs[0]||0;var t=IS(l).getEquipByLocation(this.location);if(null!=t){for(var i=configEquipment.getDataByKey(t.config_id),n=configEquipment_attr.getDatas().filter((function(t){return t.group_id==i.advanced}))||[],o=t.rand_attr||[],a=0;a<2;a++){var r=this.curAttr[a],u=this.tarAttr[a],c=o[a];if(s.isEmpty(c))r.node.active=!1,u.node.active=!1;else{r.node.active=!0,r.show(c),u.node.active=!0;for(var d,h=e(n);!(d=h()).done;){var f=d.value;if(f.attr_id==c.k){this["tar"+(a+1)]=f.id;break}}}}this.updateAttr()}else this.close()},a.onBeforeClose=function(){this.location=0,this.tar1=0,this.tar2=0},a.onDestroy=function(){},a.updateAttr=function(){for(var t=0;t<2;t++){var i=this.tarAttr[t];0!=this["tar"+(t+1)]&&i.show(this["tar"+(t+1)])}},n}(f));var v=function(){function t(){this.view=void 0,this.node=void 0,this.index=void 0,this.txtName=void 0,this.txtDesc=void 0,this.txtValue=void 0}var i=t.prototype;return i.init=function(t,i,e){this.view=i,this.node=t,this.index=e,this.onInit()},i.onInit=function(){this.txtName=r.findChildComponent(this.node,"txtName",a),this.txtDesc=r.findChildComponent(this.node,"txtDesc",a),this.txtValue=r.findChildComponent(this.node,"txtValue",a)},i.show=function(t){var i=t.k,e=t.v,n=configAttribute.getDataByKey(i);this.txtName.string=n.name,this.txtValue.string=IS(d).getAttrValueShow(i,e),this.txtDesc.string=n.desc},t}(),g=function(){function t(){this.view=void 0,this.node=void 0,this.index=void 0,this.txtName=void 0,this.txtDesc=void 0,this.txtValue=void 0}var i=t.prototype;return i.init=function(t,i,e){this.view=i,this.node=t,this.index=e,this.onInit()},i.onInit=function(){var t=this;this.txtName=r.findChildComponent(this.node,"btn/txtName",a),this.txtDesc=r.findChildComponent(this.node,"txtDesc",a),this.txtValue=r.findChildComponent(this.node,"txtValue",a);var i=r.findChild(this.node,"btn");this.view.addComponentCallbackListener(i,o.EventType.CLICK,(function(){0==t.index?uiMgr.openView("ActivityStrategyEquipTipsView",i,t.view.location,t.view.tar1,t.view.tar2,t.index):1==t.index&&uiMgr.openView("ActivityStrategyEquipTipsView",i,t.view.location,t.view.tar2,t.view.tar1,t.index)}))},i.show=function(t){var i=configEquipment_attr.getDataByKey(t),e=i.attr_id,n=i.value[0],o=configAttribute.getDataByKey(e);this.txtName.string=o.name,this.txtValue.string=IS(d).getAttrValueShow(e,n),this.txtDesc.string=o.desc},t}();n._RF.pop()}}}));
