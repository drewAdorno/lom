System.register("chunks:///_virtual/SceneSelect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./UIEffectAsset.ts","./SceneUnit8.ts"],(function(t){"use strict";var e,n,i,o,s,c,l;return{setters:[function(t){e=t.inheritsLoose,n=t.createClass},function(t){i=t.cclegacy,o=t.Button},function(t){s=t.default},function(t){c=t.UIEffectAsset},function(t){l=t.SceneUnit}],execute:function(){i._RF.push({},"29f2dBAxB1H/5IxDgNeIyOf","SceneSelect",void 0);t("SceneSelect",function(t){function i(e){var n;return(n=t.call(this)||this).map=void 0,n.model=void 0,n.btnBattle=void 0,n.map=e,n.type=2,n.model=c.alloc("ui/module/crosswar/scene/SelectInfo",e.nodeUnitSelect,-1,(function(t){n.onInit(t)})),n.id="select:1",n}e(i,t);var l=i.prototype;return l.onInit=function(t){var e=t.node;this.btnBattle=s.findChild(e,"btnBattle"),this.btnBattle.on(o.EventType.CLICK,this.onBattle,this)},l.removeEvent=function(){var t;this.model&&(null==(t=this.btnBattle)||t.off(o.EventType.CLICK,this.onBattle,this))},l.refresh=function(){this.btnBattle&&(this.btnBattle.parent.active=!1,this.btnBattle.parent.active=!0)},l.onBattle=function(){this.map.moveToBattle()},l.onUpdate=function(t){},l.onDestroy=function(){this.removeEvent(),this.model&&this.model.free()},n(i,[{key:"position",get:function(){return this.model.position},set:function(t){this.model.position=t,this.rect.center=t}},{key:"depth",get:function(){return this.model.depth},set:function(t){this.model.depth=t}}]),i}(l));i._RF.pop()}}}));
