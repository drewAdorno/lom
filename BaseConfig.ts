System.register("chunks:///_virtual/BaseConfig.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ByteArray.ts","./ObjectUtil.ts"],(function(t){"use strict";var a,e,s,n;return{setters:[function(t){a=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy},function(t){s=t.ByteArray},function(t){n=t.default}],execute:function(){e._RF.push({},"dd731ZMH7VAU4kGgO2lTXS4","BaseConfig",void 0);var i=[],r=[];t("CONFIG_KEY",24455),t("default",function(){function t(){this.datas=void 0,this.mainKey=void 0,this.keys=void 0,this.mapBykey={},this.name=void 0,this.clazz=void 0,this.isLoad=void 0}var e=t.prototype;return e.loadData=function(t){if(!this.isLoad){this.isLoad=!0,t.splice(0,1),this.datas=t,this.mapBykey={};for(var a=null,e=0;e<this.datas.length;++e)for(var s in a=new this.clazz(this.datas[e]),this.datas[e]=a,n.deepFreeze(this.datas[e]),this.keys){var i,r,u=this.keys[s],l=a._data[u];this.mapBykey[s]=null!=(i=this.mapBykey[s])?i:{},this.mapBykey[s][l]=null!=(r=this.mapBykey[s][l])?r:[],this.mapBykey[s][l].push(a)}Object.freeze(this.datas),n.deepFreeze(this.mapBykey)}},e.loadBufferData=function(t){if(!this.isLoad){this.isLoad=!0,this.datas=[];var a=new s(t);a.bytes.forEach((function(t,e){a.bytes[e]=255&~(32^t)})),a.uncompress();for(var e=a.readInt(),n=null,i=0;i<e;i++){var r=JSON.parse(a.readString());for(var u in n=new this.clazz(r),this.datas.push(n),this.keys){var l,h,y=this.keys[u],o=n._data[y];this.mapBykey[u]=null!=(l=this.mapBykey[u])?l:{},this.mapBykey[u][o]=null!=(h=this.mapBykey[u][o])?h:[],this.mapBykey[u][o].push(n)}}Object.freeze(this.datas)}},e.getDatas=function(){return null==this.datas?null:this.datas},e.getDataByKey=function(t){if(null==this.datas)return null;var a=this.mapBykey[this.mainKey][t];return null==a?null:a[0]},e.getDataListByKey=function(t){if(null==this.datas)return null;var a=this.mapBykey[this.mainKey][t];return null==a?null:a},e.getDataListByMainKey=function(t){if(null==this.datas)return null;var a=this.mapBykey[this.mainKey];return null==a?null:a},e._getDataByList=function(t,e){if(null==this.datas)return null;var s=this.mapBykey[t[0]];if(null==s)return null;var n=s[e[0]];if(null==n)return null;if(1==t.length)return n;for(var i,r=[],u=0,l=a(n);!(i=l()).done;){var h=i.value;u=1;for(var y=1;y<t.length;y++){var o=t[y],f=e[y];h[o]===f&&u++}u==t.length&&r.push(h)}return r},e._getDataByKeys=function(t,e){if(null==this.datas)return null;var s=this.mapBykey[t[0]];if(null==s)return null;var n=s[e[0]];if(null==n)return null;if(1==t.length)return n[0];for(var i,r=0,u=a(n);!(i=u()).done;){var l=i.value;r=1;for(var h=1;h<t.length;h++){var y=t[h],o=e[h];l[y]===o&&r++}if(r==t.length)return l}return null},e.getDataByKeys=function(t,a,e,s,n,u){return i.length=0,r.length=0,i.push(t),r.push(a),e&&(i.push(e),r.push(s)),n&&(i.push(n),r.push(u)),this._getDataByKeys(i,r)},e.getDataByList=function(t,a,e,s,n,u){return i.length=0,r.length=0,i.push(t),r.push(a),e&&(i.push(e),r.push(s)),n&&(i.push(n),r.push(u)),this._getDataByList(i,r)},t}());e._RF.pop()}}}));
