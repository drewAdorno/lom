System.register("chunks:///_virtual/LogtListView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./LabelUtil.ts","./NodeUtil.ts","./index57.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,s,a,r,l,c,u;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,o=t.ScrollView,s=t.Button,a=t.Label},function(t){r=t.ListItem},function(t){l=t.LabelUtil},function(t){c=t.default},null,function(t){u=t.BaseView}],execute:function(){n._RF.push({},"d59a8WipJ1GZY4zkBi6ayjN","LogtListView",void 0);e.ccclass,e.property,t("LogtListView",function(t){function n(){var i;return(i=t.call(this)||this).assetList=void 0,i.name="LogtListView",i.url="ui/module/debug/LogtListView",i}i(n,t);var e=n.prototype;return e.onInit=function(){var t=this,i=this.findChildComponent("scrollAssets",o);this.assetList=this.addUIList(i,f);var n=this.findChild("btnClose");this.addComponentCallbackListener(n,s.EventType.CLICK,(function(){t.close()}));var e=this.findChild("btnRef");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.fillData()}))},e.registerUpdateHandler=function(){},e.onAfterOpen=function(){this.fillData()},e.fillData=function(){var t=[];_global.printLogListInfo.forEach((function(i){t.push(i)})),this.assetList.datas=t},e.onBeforeClose=function(){},e.onDestroy=function(){},n}(u));var f=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).txtName=void 0,i}i(n,t);var e=n.prototype;return e.onInit=function(){this.txtName=c.findChildComponent(this.node,"txtName",a),this.adaptiveSize=!0},e.onRender=function(t,i){this.txtName.string=t;var n=l.measureSize(this.txtName);this.ut.height=n.height+10},n}(r);n._RF.pop()}}}));

