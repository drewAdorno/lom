System.register("chunks:///_virtual/ParkingDecorateSelectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./index57.ts","./BagControl.ts","./ParkingDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,s,c,r,a,l,d,h;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.ScrollView,s=t.Sprite,c=t.Label},function(t){r=t.ListItem},function(t){a=t.default},null,function(t){l=t.default},function(t){d=t.DEC_SEL_ITEM_ID},function(t){h=t.BaseView}],execute:function(){i._RF.push({},"a296ahl6cpPKZ8reYucEBnu","ParkingDecorateSelectView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).decList=void 0,e.icon=void 0,e.txtName=void 0,e.txtDesc=void 0,e.curSelID=void 0,e.name="ParkingDecorateSelectView",e.url="ui/module/parking/ParkingDecSelectView",e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("content/btnUse");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){IS(l).reqUseGoods(d,1,t.curSelID,0),t.close()}));var r=this.findChildComponent("content/ScrollView",o);this.decList=this.addUIList(r,u),this.icon=this.findChildComponent("content/nodeDesc/icon",s),this.txtName=this.findChildComponent("content/nodeDesc/name",c),this.txtDesc=this.findChildComponent("content/nodeDesc/desc",c)},r.registerUpdateHandler=function(){},r.onAfterOpen=function(){var t=configGoods.getDataByKey(d).effect;this.curSelID=t[0][0],this.decList.datas=t,this.refreshCurDetail()},r.refreshCurDetail=function(){var t=configGoods.getDataByKey(this.curSelID);this.loadIcon(this.icon,"icon_item",t.icon),this.txtName.string=t.name,this.txtDesc.string=t.desc,this.decList.updateAll()},r.onBeforeClose=function(){},r.onDestroy=function(){},i}(h));var u=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).icon=void 0,e.iconSel=void 0,e.sel=void 0,e}e(i,t);var o=i.prototype;return o.onInit=function(){var t=this;this.icon=a.findChildComponent(this.node,"icon",s),this.iconSel=a.findChildComponent(this.node,"sel",s),this.sel=a.findChild(this.node,"sel1"),this.iconSel.node.active=!1,this.sel.active=!1,this.view.addComponentCallbackListener(this.node,n.EventType.CLICK,(function(){var e=t.view;e.curSelID=t.data[0],e.refreshCurDetail()}))},o.onRender=function(t,e){var i=configGoods.getDataByKey(t[0]);this.view.loadIcon(this.icon,"icon_item",i.icon),this.view.loadIcon(this.iconSel,"icon_item",i.icon);var n=this.view;this.iconSel.node.active=n.curSelID==t[0],this.sel.active=n.curSelID==t[0]},i}(r);i._RF.pop()}}}));

