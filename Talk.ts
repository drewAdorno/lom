System.register("chunks:///_virtual/Talk.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnumDefine.ts","./V2.ts","./BaseAsset.ts","./NodeUtil.ts"],(function(t){"use strict";var e,n,i,o,s,a,u,c,l,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.UITransform,o=t.Label,s=t.Node,a=t.isValid},function(t){u=t.BindType},function(t){c=t.V2},function(t){l=t.BaseAsset},function(t){h=t.default}],execute:function(){n._RF.push({},"c6152ciMf9GZbTtZeQaRDhO","Talk",void 0);var r,d=new c;!function(t){t[t.Not=0]="Not",t[t.SynPos=256]="SynPos"}(r||(r={}));t("default",function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this)._unitId=void 0,e.txtDesc=void 0,e.utBg=void 0,e.utText=void 0,e._text=void 0,e._maxTime=void 0,e}e(n,t),n.alloc=function(t,e){var n=talkPool.alloc("ui/module/battle/BattleTaskView",30,2e4);return n.loadSync(),n._unitId=t,n.parent=battleMain.mapTopRoot,n._text=e,n._maxTime=2,a(n.txtDesc)&&n.updateText(),n},n.free=function(t){talkPool.free(t)};var c=n.prototype;return c.onLoadComplete=function(){var t=this;this.utBg=h.findChildComponent(this.node,"imgBg",i),this.txtDesc=h.findChildComponent(this.node,"txtDesc",o),this.utText=this.txtDesc.getComponent(i),this.txtDesc.node.on(s.EventType.SIZE_CHANGED,(function(){t.utBg.height=t.utText.contentSize.height+20})),this.updateText()},c.updateText=function(){this.txtDesc.string=this._text,this.txtDesc.updateRenderData(!0);var t=this.utText;this.utBg.height=t.contentSize.height+10},c.onUpdate=function(e){this.synPos(),t.prototype.onUpdate.call(this,e),this._maxTime<=0&&talkPool.free(this),this._maxTime-=e},c.onApply=function(t){if(this._changeValue&r.SynPos){var e=battleMain.unitMgr.getUnit(this._unitId);if(null==e||e.isDead)return void talkPool.free(this);if(null==e)return;d.set(e.getBindPos(u.bp_top)),this._pos.set(d),this._node.setPosition(d.x,d.y+30)}},c.synPos=function(){this._changeValue|=r.SynPos},n}(l));n._RF.pop()}}}));
