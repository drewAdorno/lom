System.register("chunks:///_virtual/RobCasePvpTipsView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ActivityControl.ts","./ActivityDefine.ts","./RobCaseDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,c,a,r,l,u,d,f,h;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.ScrollView,o=t.Sprite,s=t.Label,c=t.Button},function(t){a=t.ListItem},function(t){r=t.default},function(t){l=t.default},null,function(t){u=t.default},function(t){d=t.ActivityType},function(t){f=t.default},function(t){h=t.BaseView}],execute:function(){e._RF.push({},"ee34dgeLelKP7Kw3bVuDYlZ","RobCasePvpTipsView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).scroll=void 0,i.name="RobCasePvpTipsView",i.url="ui/module/robcase/RobCasePvpTipsView",i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this.findChildComponent("view/scroll",n);this.scroll=this.addUIList(t,p)},o.registerUpdateHandler=function(){},o.onAfterOpen=function(){var t=IS(f).getPvpInfo();0!=t.choose_buff.length?this.scroll.datas=t.choose_buff:this.close()},o.onBeforeClose=function(){},o.onDestroy=function(){},e}(h));var p=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).desc=void 0,i.imgFram=void 0,i.imgIcon=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.imgFram=r.findChildComponent(this.node,"itemGrid/imgFrame",o),this.imgIcon=r.findChildComponent(this.node,"itemGrid/imgIcon",o),this.desc=r.findChildComponent(this.node,"desc",s),this.view.addComponentCallbackListener(this.node,c.EventType.CLICK,(function(){IS(u).send_24_71(t.data,d.RobCasePvp),t.view.close()}))},n.onRender=function(t,i){var e=configSkill.getDataByKey(t),n=configSkill_level.getDataByKeys("id",t,"level",1);this.desc.string=l.formatStr.apply(l,[n.desc].concat(n.desc_parm)),this.view.loadIcon(this.imgIcon,"act_robcase_2",e.icon);var o=configColor.getDataByKey(e.quality);this.view.loadIcon(this.imgFram,"icon_equip",o.path)},e}(a);e._RF.pop()}}}));
