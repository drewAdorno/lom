System.register("chunks:///_virtual/BuffCtr.ts",["cc","./ListPool.ts"],(function(t){"use strict";var n,f;return{setters:[function(t){n=t.cclegacy},function(t){f=t.ListPool}],execute:function(){t("freeBuffList",(function(t){if(null==t)return;i.free(t)})),n._RF.push({},"7c26ckyM1BBH5UCZ9NhRRm4","BuffCtr",void 0);var i=new f;t("BuffCtr",function(){function t(){this._owner=void 0,this._list=[]}var n=t.prototype;return n.init=function(t){this._owner=t},n.reset=function(){for(var t=this._list,n=0;n<t.length;++n){t[n].destroy()}this._list.length=0},n.addBuff=function(t){this._list.push(t),t.owner=this._owner,t.start()},n.getBuff=function(t){for(var n=this._list,f=0;f<n.length;++f)if(n[f].config.id==t)return n[f]},n.getBuffListById=function(t){for(var n=this._list,f=i.alloc(),r=0;r<n.length;++r)n[r].config.id==t&&f.push(n[r]);return f},n.stopBuffById=function(t){for(var n=this._list,f=0;f<n.length;++f)n[f].config.id==t&&n[f].stop()},n.findBuffByType=function(t){for(var n=this._list,f=0;f<n.length;++f)if(n[f].buffType==t)return!0;return!1},n.getBuffByType=function(t){for(var n=this._list,f=i.alloc(),r=0;r<n.length;++r)n[r].buffType==t&&f.push(n[r]);return f},n.removeBuff=function(t){for(var n=this._list,f=null,i=0;i<n.length;++i)(f=n[i]).buffType==t&&f.stop()},n.onUpdate=function(t){for(var n=this._list,f=0;f<n.length;++f){var i=n[f];i.execBuff(t)||(i.destroy(),n.splice(f,1),f--)}},t}());n._RF.pop()}}}));
