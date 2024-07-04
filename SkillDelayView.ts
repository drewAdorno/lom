System.register("chunks:///_virtual/SkillDelayView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./StringUtil.ts","./BaseView.ts","./MessageView.ts","./EquipDefine.ts","./SkillControl.ts","./SkillDataCache.ts"],(function(t){"use strict";var i,n,e,o,a,l,s,d,r,h,c,u,f,C,v;return{setters:[function(t){i=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy,o=t.math,a=t.Button,l=t.sys,s=t.HorizontalTextAlignment,d=t.Label},function(t){r=t.default},function(t){h=t.default},function(t){c=t.BaseView},function(t){u=t.default},function(t){f=t.EquipEventDefine},function(t){C=t.default},function(t){v=t.SkillDataCache}],execute:function(){e._RF.push({},"05c33zElEVNn5kxpojOn8iP","SkillDelayView",void 0);o.Vec3,o.Vec2,t("default",function(t){function e(){var i;return(i=t.call(this)||this).tab=1,i.delayList=[],i.name="SkillDelayView",i.url="ui/module/skill/SkillDelayView",i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.onMaskClick()}));var n=this.findChild("content/btnOk");this.addComponentCallbackListener(n,a.EventType.CLICK,(function(){t.onOkClick()}));var e=this.findChild("content/btnCancel");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.close()})),this.delayList=[];for(var o=0;o<6;o++){var d=this.findChild("content/conditions/view/content/item"+(o+1));this.delayList[o]=new p(this,d,o+1)}var r=this.findChild("content/btnTip");this.addComponentCallbackListener(r,a.EventType.CLICK,(function(){u.showBoxTip({tip:GetLanguage(201651),btnCnt:1,horizontalAlign:l.uiMirror?s.RIGHT:s.LEFT})}))},o.registerUpdateHandler=function(){this.addEvent(f.AUTO_OPEN_CONDITION_CHANGE,this.onConditionChange,this)},o.onConditionChange=function(t){if("delay"==t.typeStr){var i=this.delayList[t.listIdx-1];i.delay=t.selectValue,i.updateSelect()}},o.onAfterOpen=function(){var t,i;this.tab=null!=(t=this.openArgs[0])?t:1;var e=IS(v).tabToInfo[this.tab],o=null!=(i=null==e?void 0:e.delay_time_list)?i:[];function a(t){for(var i,e=n(o);!(i=e()).done;){var a=i.value;if(a.k==t)return a.v}return 0}for(var l=0;l<this.delayList.length;++l){var s=this.delayList[l];s.delay=a(l+1),s.updateSelect()}},o.onBeforeClose=function(){},o.onDestroy=function(){},o.onMaskClick=function(){this.close()},o.onOkClick=function(){for(var t,i=[],e=n(this.delayList);!(t=e()).done;){var o=t.value;i.push(o.delay)}IS(C).reqSetSkillDelay(this.tab,i),this.close()},e}(c));var p=function(){function t(t,i,n){this.view=void 0,this.node=void 0,this.btnDelay=void 0,this.txtCondition=void 0,this.nodeUp=void 0,this.nodeDown=void 0,this.id=void 0,this.delay=void 0,this.node=i,this.view=t,this.id=n,this.onInit()}var i=t.prototype;return i.onInit=function(){var t=this;(this.btnDelay=r.findChild(this.node,"btnDelay"),this.txtCondition=r.findChildComponent(this.btnDelay,"txtSelect",d),this.nodeUp=r.findChild(this.btnDelay,"imgUp"),this.nodeDown=r.findChild(this.btnDelay,"imgDown"),this.id>1)&&(r.findChildComponent(this.node,"txtTitle",d).string=h.formatStr(GetLanguage_UI(300169),this.id-1));this.view.addComponentCallbackListener(this.btnDelay,a.EventType.CLICK,(function(){var i={typeStr:"delay",listIdx:t.id,targetNode:t.btnDelay,selectValue:t.delay};t.nodeDown.active=!1,t.nodeUp.active=!0,uiMgr.openView("EquipConditionListView",i)}))},i.updateSelect=function(){this.txtCondition.string=0==this.delay?GetLanguage(700000307):h.formatStr(GetLanguage(700000308),this.delay/1e3)},t}();e._RF.pop()}}}));

