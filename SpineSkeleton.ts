System.register("chunks:///_virtual/SpineSkeleton.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnumDefine.ts","./StringUtil.ts"],(function(t){"use strict";var i,n,e,o,a,r,l,s,p,c,u,h;return{setters:[function(t){i=t.inheritsLoose,n=t.applyDecoratedDescriptor,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,l=t.Enum,s=t.CCString,p=t.sp,c=t.Color},function(t){u=t.RunState},function(t){h=t.default}],execute:function(){var d,m,f,A,y,_,S;t("AnimationType",void 0),a._RF.push({},"3cca4v1K41KQZ3KPM3OZgwl","SpineSkeleton",void 0);var b,T=r.ccclass,v=r.property,C=r.disallowMultiple;!function(t){t[t.UI=0]="UI",t[t.BATTLE=1]="BATTLE"}(b||(b=t("AnimationType",{}))),l(b);t("SpineSkeleton",(d=T("SpineSkeleton"),m=v({type:b,displayOrder:-1}),f=v({type:s,displayOrder:20}),d(A=C((y=function(t){function n(){for(var i,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(i=t.call.apply(t,[this].concat(a))||this)._isPreload=!1,e(i,"animationType",_,o(i)),e(i,"nextAnimation",S,o(i)),i._oldAni=void 0,i._material=void 0,i.battleColor=new c(1,1,1,255),i.isColorUpdate=!1,i.needAnimation="",i}i(n,t);var a=n.prototype;return a.onLoad=function(){t.prototype.onLoad.call(this),this._oldAni=this.animation},a.onEnable=function(){this._refreshInspector(),t.prototype.onEnable.call(this),""!=this.needAnimation?this.setAnimation(0,this.needAnimation,this.loop):h.isEmpty(this.nextAnimation)?this.setAnimation(0,this.animation,this.loop):(null==this._oldAni&&(this._oldAni=this.animation),this.setAnimation(0,this._oldAni,!1),this.addAnimation(0,this.nextAnimation,!0,0)),this._material=this.customMaterial,this.needAnimation=""},a.__preload=function(){this._isPreload||(this._isPreload=!0,t.prototype.__preload.call(this))},a._verifySockets=function(t){},a.updateAnimation=function(i){if(this.animationType==b.BATTLE){if(0==battleMain.timeScale)return;if(battleMain.runState==u.Stop)return;i=battleMain.timeScale*i}t.prototype.updateAnimation.call(this,i),this._material&&this.isColorUpdate&&(this.color=this.battleColor)},a.flash=function(){},a.setColor=function(t,i,n){this.battleColor.set(t,i,n),this.isColorUpdate=!0},n}(p.Skeleton),_=n(y.prototype,"animationType",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return b.BATTLE}}),S=n(y.prototype,"nextAnimation",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),A=y))||A)||A));a._RF.pop()}}}));
