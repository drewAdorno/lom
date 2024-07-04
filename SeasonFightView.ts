System.register("chunks:///_virtual/SeasonFightView.ts",["cc","./NodeUtil.ts","./StringUtil.ts","./ConfigGlobal.ts","./index57.ts","./UIDefine.ts"],(function(i){"use strict";var t,n,s,e,o,h,d,r;return{setters:[function(i){t=i.cclegacy,n=i.Prefab,s=i.Label,e=i.Animation},function(i){o=i.default},function(i){h=i.default},function(i){d=i.ConfigGlobal},null,function(i){r=i.ViewType}],execute:function(){t._RF.push({},"f9648TICp1IjpxS4uJCc4Yt","SeasonFightView",void 0);i("default",function(){function i(){var i=this;this.node=void 0,this.isInited=void 0,this.fightTipArgs=void 0,this.isDispose=void 0,this.nodeFightTips=void 0,this.fightItem=void 0,resourceMgr.loadRes("ui/module/season/SeasonFightView",n,(function(t){i.node=nodeInstantiate.instantiate(t.item.asset),i.onInit()})),this.isInited=!1}var t=i.prototype;return t.onInit=function(){var i=this.node;this.isDispose=!1,this.isInited=!0,this.node.parent=uiMgr.pNodes[r.TopView],this.nodeFightTips=o.findChild(i,"fightTips"),this.nodeFightTips.active=!0,this.fightItem=new u,this.fightItem.init(o.findChild(i,"fightTips/fightItem"),this),null!=this.fightTipArgs&&this.tryShowFight(this.fightTipArgs)},t.clear=function(){this.isDispose=!0},i.showFightTip=function(t){var n=IS(i);1!=n.isDispose&&n.tryShowFight(t)},t.tryShowFight=function(i){this.fightTipArgs=i,1!=this.isDispose&&this.showFight(this.fightTipArgs)},t.showFight=function(i){if(0==this.isInited)return!1;null!=i&&this.fightItem.show(i)},i}());var u=function(){function i(){this.view=void 0,this.node=void 0,this.txtAdd=void 0,this.txtMinus=void 0,this.nodeAdd=void 0,this.nodeMinus=void 0,this.curTimer=void 0,this.anim=void 0}var t=i.prototype;return t.init=function(i,t){this.view=t,this.node=i,this.node.active=!1,this.onInit()},t.onInit=function(){this.nodeAdd=o.findChild(this.node,"txtAdd"),this.nodeMinus=o.findChild(this.node,"txtMinus"),this.txtAdd=o.findChildComponent(this.node,"txtAdd/txtAdd",s),this.txtMinus=o.findChildComponent(this.node,"txtMinus/txtMinus",s),this.anim=this.node.getComponent(e)},t.show=function(i){var t=this;null!=this.curTimer&&(this.node.active=!1,normalTimer.stop(this.curTimer),this.curTimer=null),this.node.active=!0,this.anim.play("MessageView_fightltem"),i>=0?(this.nodeAdd.active=!0,this.nodeMinus.active=!1,this.txtAdd.string="+"+h.GetNumString(i)):(this.nodeAdd.active=!1,this.nodeMinus.active=!0,this.txtMinus.string="-"+h.GetNumString(Math.abs(i)));var n=d.word_stay_time/1e3;this.curTimer=normalTimer.start(n,1,(function(){t.node.active=!1,normalTimer.stop(t.curTimer),t.curTimer=null}))},i}();t._RF.pop()}}}));

