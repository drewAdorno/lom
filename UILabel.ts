System.register("chunks:///_virtual/UILabel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./env","./GameLoadingView.ts","./MulLanguageUtil.ts"],(function(t){"use strict";var i,n,e,r,o,s,a,l,u,g,h,c,p,f,d,L;return{setters:[function(t){i=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,r=t.assertThisInitialized,o=t.createClass},function(t){s=t.cclegacy,a=t._decorator,l=t.CCInteger,u=t.CCBoolean,g=t.sys,h=t.HorizontalTextAlignment,c=t.EditBox,p=t.Label},function(t){f=t.NATIVE},function(t){d=t.GameLoadingView},function(t){L=t.default}],execute:function(){var y,m,b,_,v,F,I;s._RF.push({},"720beQgAwNI0ZVD+4kZAPqR","UILabel",void 0);var z=a.ccclass,M=a.property;t("UILabel",(y=z("UILabel"),m=M({type:l}),b=M({type:u}),y((F=i((v=function(t){function i(){for(var i,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(i=t.call.apply(t,[this].concat(o))||this)._applyFont=0,i._updateRenderData=!1,e(i,"LanguageNo",F,r(i)),i.issetstr=!1,e(i,"isMirror",I,r(i)),i}n(i,t);var s=i.prototype;return s.onLoad=function(){var i;this.mirror(),null!=this.font&&0==this.useSystemFont&&"font"==this.font.name&&(this.useSystemFont=!0),this.useSystemFont&&f&&(this.useSystemFont=!1,null!=_global.uiMgr&&null!=uiMgr.UIFont&&(this.font=uiMgr.UIFont)),"th"==(null==(i=d.instance)?void 0:i.curlaguage)&&(this.isBold=!1),t.prototype.onLoad.call(this)},s.mirror=function(){if(g.uiMirror&&!this.isMirror){if(this.horizontalAlign==h.LEFT?this.horizontalAlign=h.RIGHT:this.horizontalAlign==h.RIGHT&&(this.horizontalAlign=h.LEFT),this.node.parent&&this.node.parent.getComponent(c));else{this.node.setScale(-this.node.scale.x,this.node.scale.y,this.node.scale.z);var t=1-this.node._uiProps.uiTransformComp.anchorX;this.node._uiProps.uiTransformComp.anchorX=t}this.isMirror=!0}},s.start=function(){if(0==this.issetstr&&0!=this.LanguageNo){var t=L.GetconfigLanguage_ui_Text(this.LanguageNo);null!=t?this.string=t.text:(this.string="LanguageNoEmpty:"+this.LanguageNo,printLogErr("LanguageNoEmpty:",this.LanguageNo))}},o(i,[{key:"string",get:function(){return this._string},set:function(t){t=null==t?"":t.toString(),this.issetstr=!0,this._string=t,this.markForUpdateRenderData()}}]),i}(p)).prototype,"LanguageNo",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),I=i(v.prototype,"isMirror",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),_=v))||_));s._RF.pop()}}}));
