System.register("chunks:///_virtual/SceneBattle.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./NodeUtil.ts","./TimeUtil.ts","./UIEffectAsset.ts","./SLGMapData.ts","./SceneUnit4.ts"],(function(t){"use strict";var i,e,n,o,s,d,m,r,a,c,u,h,l;return{setters:[function(t){i=t.inheritsLoose,e=t.createClass},function(t){n=t.cclegacy,o=t.ProgressBar,s=t.Label,d=t.sys,m=t.Sprite},function(t){r=t.V2},function(t){a=t.default},function(t){c=t.default},function(t){u=t.UIEffectAsset},function(t){h=t.SLGMapData},function(t){l=t.SceneUnit}],execute:function(){n._RF.push({},"56868Mn2vpN/IGwUdPYeYqG","SceneBattle",void 0);t("SceneBattle",function(t){function n(i,e){var n;(n=t.call(this)||this).info=void 0,n.map=void 0,n.model=void 0,n.curTime=void 0,n.curTime1=void 0,n.pbTime=void 0,n.txtTime=void 0,n.map=i,n.info=e;var o=h.getIndexToCR(e.id);o=h.getCRToPos(o.x,o.y);var s=new r(o.x,o.y);return n.model=u.alloc("ui/module/season/scene/Battle",i.nodeUnitMap.battle,-1,(function(t){n.onInit(t)})),n.model.position=s,n.id=e.id,n}i(n,t);var m=n.prototype;return m.onInit=function(t){new f(this.map,a.findChild(t.node,"att"),this.info.attacker),new f(this.map,a.findChild(t.node,"def"),this.info.defender),this.pbTime=a.findChildComponent(t.node,"time/pbTime",o),this.txtTime=a.findChildComponent(t.node,"time/txtTime",s),d.uiMirror&&this.txtTime.node.setScale(1,1,1),this.curTime=this.curTime1=this.info.state_end_time},m.onDestroy=function(){this.model&&this.model.free(),this.model=null},m.onUpdate=function(t){this.updateTime(t),this.curTime-=t,this.curTime=Math.max(this.curTime,0)},m.updateTime=function(t){this.pbTime&&(this.curTime1!=Math.floor(this.curTime)&&(this.curTime1=Math.floor(this.curTime),this.txtTime.string=c.formatTimeForSecond(this.curTime)),this.pbTime.progress=this.curTime/this.info.state_end_time)},e(n,[{key:"position",get:function(){return this.model.position},set:function(t){this.model.position=t}},{key:"depth",get:function(){return this.model.depth},set:function(t){this.model.depth=t}}]),n}(l));var f=function(t,i,e){this.imgHead=void 0,this.txtName=void 0,this.imgHead=a.findChildComponent(i,"imgHead",m),this.txtName=a.findChildComponent(i,"txtName",s),d.uiMirror&&this.txtName.node.setScale(1,1,1),t.view.loadRemoteIcon(e.head.url,this.imgHead),this.txtName.string=e.name};n._RF.pop()}}}));

