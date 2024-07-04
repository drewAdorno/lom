System.register("chunks:///_virtual/RedPointMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectUtil.ts","./AssetPool.ts","./StringUtil.ts","./RedPoint.ts"],(function(t){"use strict";var n,i,e,o,r,u,d;return{setters:[function(t){n=t.createClass},function(t){i=t.cclegacy},function(t){e=t.default},function(t){o=t.AssetPool},function(t){r=t.default},function(t){u=t.RedPointType,d=t.RedPoint}],execute:function(){t("redPointPool",void 0),i._RF.push({},"8a925YK6AFA+pWm60yHwwsF","RedPointMgr",void 0);var s,a=t("RedPointNode",function(){function t(){this._num=0,this._childNum=0,this.parent=void 0,this.updateValue=!1,this.redPoints=[]}var i=t.prototype;return i.addRedPoint=function(t,n,i,e){void 0===i&&(i=u.Dot),void 0===e&&(e=1);var o=d.alloc(this,t,n,i,e);return this.redPoints.push(o),o},i.removeRedPoint=function(t){var n=this.redPoints.indexOf(t);-1!=n&&(d.free(t),e.fastRemoveAt(this.redPoints,n))},i.notifyChange=function(){this.updateValue=!1,this.redPoints.forEach((function(t){t.notifyChange()}))},n(t,[{key:"notifyNum",get:function(){return this._num+this._childNum},set:function(t){if(this._num!=t){for(var n=this.parent;n;)n._childNum+=t-this._num,n.updateValue=!0,n=n.parent;this._num=t,this.updateValue=!0}}}]),t}());t("RedPointMgr",function(){function n(){this._redPointMap=e.createMap(!0),this._redPointRedNum={},s=t("redPointPool",new o(d,1e4))}var i=n.prototype;return i.addRedPoint=function(t,n,i,e,o){var d;if(void 0===e&&(e=u.Dot),void 0===o&&(o=1),!r.isEmpty(t)){this._redPointMap[t]=null!=(d=this._redPointMap[t])?d:new a;for(var s=this._redPointMap[t],c=t.lastIndexOf("/");-1!=c;){var f=t.substring(0,c),l=this._redPointMap[f];if(null!=l){s.parent=l;break}c=f.lastIndexOf("/")}return s.addRedPoint(n,i,e,o)}printLogErr("路径不合法")},i.removeRedPoint=function(t,n){this._redPointMap[t].removeRedPoint(n)},i.changeValue=function(t,n){var i=this._redPointMap[t];this._redPointRedNum[t]=n,i&&(i.notifyNum=n)},i.updateRed=function(t){var n=this._redPointMap[t],i=this._redPointRedNum[t];null!=n&&null!=i&&(n.notifyNum=i)},i.getRedNum=function(t){return this._redPointRedNum[t]||0},i.clear=function(){s.clearPool(),s=t("redPointPool",null)},n}());i._RF.pop()}}}));
