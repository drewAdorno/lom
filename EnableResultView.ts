System.register("chunks:///_virtual/EnableResultView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index57.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,s,a;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.Label},function(t){s=t.audioMgr},null,function(t){a=t.BaseView}],execute:function(){n._RF.push({},"000ebMks/hP45gIy6L1r2c9","EnableResultView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).data=void 0,e.name="EnableResultView",e.url="ui/module/horse/EnableResultView",e.poolTime=3e3,e}e(n,t);var a=n.prototype;return a.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()}))},a.onAfterOpen=function(){s.playSound("common_reward"),this.data=this.openArgs[0],this.refreshShow()},a.refreshShow=function(){var t=this.findChildComponent("root/content/nodeChange/txtLevelBase",o),e=this.findChildComponent("root/content/nodeChange/txtLevelNext",o),n=this.findChildComponent("root/content/nodeChange/txtDesc",o),i=configMount_ability.getDataByKeys("id",this.data.talent_id,"level",this.data.talent_lev-1),s=configMount_ability.getDataByKeys("id",this.data.talent_id,"level",this.data.talent_lev);null!=s&&(t.string=i.value_plus[0][1]/100+"%",e.string=s.value_plus[0][1]/100+"%",n.string=configAttribute.getDataByKey(i.value_plus[0][0]).desc)},a.registerUpdateHandler=function(){},a.onBeforeClose=function(){},a.onDestroy=function(){},n}(a));n._RF.pop()}}}));

