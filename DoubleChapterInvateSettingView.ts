System.register("chunks:///_virtual/DoubleChapterInvateSettingView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./BaseView.ts","./ChapterDefine.ts","./DungeonControl.ts"],(function(t){"use strict";var e,n,i,o,s,l,a,c,d,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.Label,s=t.ScrollView},function(t){l=t.ListItem},function(t){a=t.default},function(t){c=t.BaseView},function(t){d=t.ChapterEventDefine},function(t){h=t.default}],execute:function(){n._RF.push({},"7dd31KGXZRGfKBTGNbc3oZL","DoubleChapterInvateSettingView",void 0);var r=[200274,201855,201854,201856],C=(t("default",function(t){function n(){var e;return(e=t.call(this)||this).select1=void 0,e.normal1=void 0,e.select2=void 0,e.normal2=void 0,e.imgUp=void 0,e.imgDown=void 0,e.nodePop=void 0,e.txtSelect=void 0,e.conditionScroll=void 0,e.CurSelCondition=1,e.name="DoubleChapterInvateSettingView",e.url="ui/module/dungeon/DoubleChapterInvateSettingView",e.poolTime=3e3,e}e(n,t);var l=n.prototype;return l.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.onMaskClick()}));var n=this.findChild("content/btnStart");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){IS(h).reqDoubleChapterChangeInviteSetting([{k:1,v:t.select1.active?0:1},{k:2,v:t.select2.active?0:1},{k:3,v:t.CurSelCondition}]),t.close()})),this.select1=this.findChild("content/Item/toggle/select"),this.normal1=this.findChild("content/Item/toggle/normal"),this.select2=this.findChild("content/Item-001/toggle/select"),this.normal2=this.findChild("content/Item-001/toggle/normal");var l=this.findChild("content/Item/toggle");this.addComponentCallbackListener(l,i.EventType.CLICK,(function(){t.OnLevy1()}));var a=this.findChild("content/Item-001/toggle");this.addComponentCallbackListener(a,i.EventType.CLICK,(function(){t.OnLevy2()}));var c=this.findChild("content/Item-002/btnCondition");this.addComponentCallbackListener(c,i.EventType.CLICK,(function(){t.conditionScroll.datas=r,t.imgUp.active=!1,t.imgDown.active=!0,t.nodePop.active=!0})),this.imgUp=this.findChild("content/Item-002/btnCondition/imgUp"),this.imgDown=this.findChild("content/Item-002/btnCondition/imgDown"),this.txtSelect=this.findChildComponent("content/Item-002/btnCondition/txtSelect",o),this.nodePop=this.findChild("content/nodePop"),this.addComponentCallbackListener(this.nodePop,i.EventType.CLICK,(function(){t.OnClosePop()}));var d=this.findChildComponent("content/nodePop/scrollConditionList",s);this.conditionScroll=this.addUIList(d,C),this.conditionScroll.datas=r},l.registerUpdateHandler=function(){this.addEvent(d.DOUBLE_CHAPTER_INVATE_SETTING_BACK,this.updateData,this)},l.onMaskClick=function(){this.close()},l.onAfterOpen=function(){IS(h).reqDoubleChapterGetInviteHelpSettingInfo()},l.onBeforeClose=function(){},l.onDestroy=function(){},l.OnLevy1=function(){var t=this.select1.active;t=!t,this.select1.active=t,this.normal1.active=!t},l.OnLevy2=function(){var t=this.select2.active;t=!t,this.select2.active=t,this.normal2.active=!t},l.OnClosePop=function(){this.txtSelect.string=GetLanguage(r[this.CurSelCondition-1]),this.nodePop.active=!1,this.imgUp.active=!0,this.imgDown.active=!1},l.updateData=function(t){for(var e=0;e<t.length;e++)1==t[e].k&&(this.select1.active=0==t[e].v,this.normal1.active=1==t[e].v),2==t[e].k&&(this.select2.active=0==t[e].v,this.normal2.active=1==t[e].v),3==t[e].k&&(this.CurSelCondition=t[e].v);this.OnClosePop()},n}(c)),function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).imgSelect=void 0,e.txtName=void 0,e}e(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.imgSelect=a.findChild(this.node,"imgSelected"),this.txtName=a.findChildComponent(this.node,"txtName",o),this.view.addComponentCallbackListener(this.node,i.EventType.CLICK,(function(){var e=t.view;e.CurSelCondition=t.index+1,e.OnClosePop()}))},s.onRender=function(t,e){this.txtName.string=GetLanguage(t);var n=this.view;this.imgSelect.active=n.CurSelCondition==e+1},n}(l));n._RF.pop()}}}));
