System.register("chunks:///_virtual/BaseSubView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./BaseView.ts","./UIDefine.ts"],(function(t){"use strict";var e,i,s,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy},function(t){s=t.default},function(t){n=t.BaseView},function(t){o=t.UIViewState}],execute:function(){i._RF.push({},"a580aJt7dtBDI9L3rU0pYc2","BaseSubView",void 0);t("BaseSubView",function(t){function i(){for(var e,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))||this).isActive=!1,e.isForceActive=!1,e}e(i,t);var n=i.prototype;return n._updateDeth=function(){},n._setViewState=function(t){if(!this.state||this.state!=t)if(this.state=t,t!=o.Destroy){if(t==o.Init){var e=s.findChild(this.parentView.node,"container/"+this.name);e||(e=this.parentView.node),this.node.parent=e,this._openViewInit()}}else this.state=o.None},n.setActive=function(t){if(this.isActive!=t||this.isForceActive)if(this.isActive=t,t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];this.open.apply(this,i)}else this.close()},i}(n));i._RF.pop()}}}));
