System.register("chunks:///_virtual/SLGMapData.ts",["cc","./ByteArray.ts"],(function(t){"use strict";var r,e,i;return{setters:[function(t){r=t.cclegacy,e=t.Vec2},function(t){i=t.ByteArray}],execute:function(){r._RF.push({},"99b79K901BNCZZGYgEh4iPZ","SLGMapData",void 0);var o=function(){this.gid=0,this.url=void 0},a=t("layertw2",90),n=t("layerth2",90),h=158,s=125,u=273*Math.floor(62.5)+178,f=Math.floor(12719),l=u/2,c=f/2,d=new e;t("SLGMapData",function(){function t(){this.path=void 0,this.tileMap={},this.collider=[],this.building=[],this.tree=[],this.width=0,this.height=0,this.width=u,this.height=f}var r=t.prototype;return r.loadData=function(t){for(var r=new i(t.buffer()),e=r.readShort(),a=0;a<e;a++){var n=new o;n.gid=r.readByte(),n.url="prefab/map/slgmap/"+r.readString(),this.tileMap[n.gid]=n}for(var h=1e4,s=0;s<h;s++)this.collider[s]=r.readByte();for(var u=0;u<h;u++)this.building[u]=r.readByte();for(var f=0;f<h;f++)this.tree[f]=r.readByte()},r.getGrid=function(t){return this.tileMap[t]},r.getCollider=function(r,e){var i=t.getCRToIndex(r,e);return this.collider[i]},t.getIndexToCR=function(t){var r=Math.floor(t/s),e=t%s;return d.set(e,r),d},t.getCRToIndex=function(t,r){return r*s+t},t.getCRToPos=function(t,r){t=Math.floor(t),r=Math.floor(r);var e=136.5*t-l,i=r*h+(t%2==1?79:0)-c;return d.set(e+a,-i-n),d},t.getPosToCR=function(t,r){var e=Math.floor((t+l)/136.5),i=e%2==1?79:0,o=Math.floor((-r+c-i)/h);return d.set(e,o),d},t}());r._RF.pop()}}}));
