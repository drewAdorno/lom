System.register("chunks:///_virtual/FilePack.ts",["cc","./ByteArray.ts","./index37.ts"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.cclegacy},function(t){n=t.ByteArray},function(t){r=t.configs}],execute:function(){e._RF.push({},"7e9c0kFHBVDG5ysS5I1mvt8","FilePack",void 0);var i="undefined"==typeof window?global:window;t("FilePack",function(){function t(t){this._configMap={};for(var e=new n(t),r=(e.readShort(),e.readShort()),i=0;i<r;i++){var c="config"+e.readString(),o=e.readInt(),a=e.readBytes(o);this._configMap[c]=a}}var e=t.prototype;return e.get=function(t){if(this._configMap[t]){var e=new r[t];return delete i[t],_G(t,e),e.loadBufferData(this._configMap[t]),delete this._configMap[t],Object.freeze(e),e}printLogErr("找不到配置表:"+t)},e.getBuffer=function(t){return this._configMap[t]},t}());e._RF.pop()}}}));
