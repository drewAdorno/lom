System.register("chunks:///_virtual/FateExtAttrView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,a,r,s,l,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.ScrollView,a=t.Label},function(t){r=t.ListItem},function(t){s=t.default},function(t){l=t.default},null,function(t){c=t.BaseView}],execute:function(){n._RF.push({},"601aaqcvv9B9ZoGt9m1HI6j","FateExtAttrView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).scroll=void 0,e.nothing=void 0,e.name="FateExtAttrView",e.url="ui/module/fate/FateExtAttrView",e}e(n,t);var a=n.prototype;return a.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()}));var n=s.findChildComponent(this.node,"view/scroll",o);this.scroll=this.addUIList(n,u)},a.registerUpdateHandler=function(){},a.onAfterOpen=function(){var t=configFate.getDataByKey(this.openArgs[0]);this.scroll.datas=t.preview},a.onBeforeClose=function(){},a.onDestroy=function(){},n}(c));var u=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).txtName=void 0,e}e(n,t);var o=n.prototype;return o.onInit=function(){var t=this;this.txtName=s.findChildComponent(this.node,"txtAttrName",a),this.view.addComponentCallbackListener(this.node,i.EventType.CLICK,(function(){var e=configSkill_level.getDataByKeys("id",t.data[0],"level",t.data[1]),n=l.formatStr.apply(l,[e.desc].concat(e.desc_parm));uiMgr.openView("CommonPopTipsView",n,t.node)}))},o.onRender=function(t,e){var n=configSkill.getDataByKey(t[0]);this.txtName.string=n.name},n}(r);n._RF.pop()}}}));
