System.register("chunks:///_virtual/WaitForSeconds.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./ObjectUtil.ts"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.createClass},function(e){n=e.cclegacy},function(e){r=e.ObjectPool},function(e){i=e.default}],execute:function(){n._RF.push({},"4e718uIm4RGa4mIme7V6hrh","WaitForSeconds",void 0);var o=e("WaitForSeconds",function(){function e(){this._currenTime=void 0}e.alloc=function(e){var t=c.alloc();return t._currenTime=e,t},e.free=function(e){c.free(e)};var n=e.prototype;return n.update=function(e){this._currenTime-=e},n.dispose=function(){this._currenTime=0,e.free(this)},t(e,[{key:"waitDone",get:function(){return this._currenTime<=0}}]),e}());i.setClassName(o,"IWaitCoroutine");var c=new r(o,50);n._RF.pop()}}}));

