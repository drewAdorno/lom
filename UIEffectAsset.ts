System.register("chunks:///_virtual/UIEffectAsset.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseAsset.ts","./FixMath.ts","./SpineSkeleton.ts"],(function(t){"use strict";var e,i,n,a,s,h,l,o,c,_;return{setters:[function(t){e=t.inheritsLoose,i=t.createClass},function(t){n=t.cclegacy,a=t.Vec2,s=t.Layers,h=t.isValid},function(t){l=t.BaseAsset},function(t){o=t.FixMath},function(t){c=t.SpineSkeleton,_=t.AnimationType}],execute:function(){n._RF.push({},"bf7fbd1pMpKt4WRmfHJ+1oa","UIEffectAsset",void 0);var r;!function(t){t[t.Not=0]="Not",t[t.Scale=1]="Scale",t[t.Depth=1024]="Depth",t[t.Angle=512]="Angle",t[t.Ani=256]="Ani",t[t.Anis=512]="Anis"}(r||(r={}));var u=new a;t("UIEffectAsset",function(t){function n(){var e;return(e=t.call(this)||this).id=0,e._maxTime=void 0,e._depth=void 0,e._ani=void 0,e._anis=void 0,e._degree=0,e._animator=void 0,e.callback=void 0,e.isUI=!0,e}e(n,t),n.alloc=function(t,e,i,n,a){void 0===a&&(a=1);var l=uiEffectPool.alloc(t,a,5e3);return l._dir=1,l._maxTime=i,l.parent=e,l.layer=s.Enum.UI_2D,l.callback=n,l.loadSync(),h(l.node)&&(l.callback&&l.callback(l),l.callback=null),l},n.free=function(t){t.free()};var l=n.prototype;return l.onLoadComplete=function(){var t,e=this._node.getComponent(c);null==e&&(e=this._node.getComponentInChildren(c)),this._animator=e,null==(t=e)||t.__preload(),e&&(e.animationType=_.UI),this.callback&&this.callback(this),this.callback=null},l.cacheReset=function(){t.prototype.cacheReset.call(this),this._depth=-1,this._degree=0,this._anis=null,this.callback=null},l.onUpdate=function(e){t.prototype.onUpdate.call(this,e),-1!=this._maxTime&&(this._maxTime<=0&&this.free(),this._maxTime-=e)},l.onApply=function(t){if(this._changeValue&r.Depth&&this._node.getSiblingIndex()!=this._depth&&this._node.setSiblingIndex(this._depth||0),0!=(this._changeValue&r.Ani))this._animator&&this._ani&&this._animator.setAnimation(0,this._ani,this._animator.loop);else if(0!=(this._changeValue&r.Anis)&&this._animator&&this._anis&&this._anis.length>0){this._animator.setAnimation(0,this._anis[0],!1);for(var e=1;e<this._anis.length;e++){var i=this._anis[e];this._animator.addAnimation(0,i,e<=this._anis.length-1)}}0!=(this._changeValue&r.Angle)&&(this._node.angle=-this._degree)},l.lookAt=function(t,e){if(u.set(t,e),0!=u.lengthSqr()){var i=u.signAngle(a.UNIT_X)/Math.PI*180;o.round(i)!=this._degree&&(this._degree=i,this._changeValue=this._changeValue|r.Angle)}},i(n,[{key:"depth",get:function(){return this._depth},set:function(t){this._depth!=t&&(this._depth=t,this._changeValue=this._changeValue|r.Depth)}},{key:"aniName",set:function(t){this._ani!=t&&(this._ani=t,this._changeValue=this._changeValue|r.Ani)}},{key:"aniNames",set:function(t){this._anis=t,this._changeValue=this._changeValue|r.Anis}}]),n}(l));n._RF.pop()}}}));
