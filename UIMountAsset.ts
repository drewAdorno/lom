System.register("chunks:///_virtual/UIMountAsset.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AssetPool.ts","./BaseAsset.ts","./SpineSkeleton.ts"],(function(t){"use strict";var e,n,o,i,s,a,u,c,r,l,h;return{setters:[function(t){e=t.inheritsLoose,n=t.createClass},function(t){o=t.cclegacy,i=t.isValid,s=t.sp,a=t.Layers},function(t){u=t.V2},function(t){c=t.AssetPoolState},function(t){r=t.BaseAsset},function(t){l=t.SpineSkeleton,h=t.AnimationType}],execute:function(){o._RF.push({},"1762eAtUiFFwZLgZl01pJkB","UIMountAsset",void 0);var p,_={1:"root/zong/juese1",2:"root/zong/juese2",3:"root/zong/juese3",4:"root/zong/juese4"};!function(t){t[t.Not=0]="Not",t[t.Ani=128]="Ani",t[t.SetDir=256]="SetDir"}(p||(p={}));t("UIMountAsset",function(t){function o(){var e;return(e=t.call(this)||this).id=0,e._animator=void 0,e._mountId=void 0,e._ani="idle",e._unit=void 0,e._bindPos=1,e.isUI=!0,e}e(o,t),o.alloc=function(t,e,n,o){void 0===o&&(o=1);var i=configMount.getDataByKey(t),s=uiMountPool.alloc(i.path,i.maxNum,i.maxTime);return s._mountId=t,s.parent=e,s.layer=a.Enum.UI_2D,s.loadSync(),s.scale=1,s._unit=n,s._bindPos=o,s.aniName="idle",s.position=u.ZERO,s},o.free=function(t){t.free()};var r=o.prototype;return r.onLoadComplete=function(){var t=this._node.getComponent(l);t.animationType=h.UI,this._animator=t,t.__preload()},r.onAfterCacheFree=function(){t.prototype.onAfterCacheFree.call(this);var e=this._animator;i(e)&&(e.sockets.length=0,e.sockets=e.sockets)},r.cacheReset=function(){t.prototype.cacheReset.call(this),this._unit=null},r.onUpdate=function(e){if(t.prototype.onUpdate.call(this,e),!(this.poolState>c.Useing)&&null!=this._unit){var n=this._animator;i(n)&&n._skeleton&&0==n.sockets.length&&(n.sockets.push(new s.SpineSocket(_[this._bindPos],this._unit)),n.sockets=n.sockets)}},r.onApply=function(t){this._changeValue&p.Ani&&this._animator.setAnimation(0,this._ani,!0)},n(o,[{key:"aniName",set:function(t){this._ani!=t&&(this._ani=t,this._changeValue=this._changeValue|p.Ani)}}]),o}(r));o._RF.pop()}}}));

