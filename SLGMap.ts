System.register("chunks:///_virtual/SLGMap.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AssetPool.ts","./BaseAsset.ts","./SLGMapData.ts","./SLGMapLayer.ts"],(function(t){"use strict";var e,i,o,s,a,n,r,h,d,l,u,c,_;return{setters:[function(t){e=t.createClass},function(t){i=t.cclegacy,o=t._decorator,s=t.Vec2,a=t.BufferAsset,n=t.Node,r=t.isValid,h=t.Rect,d=t.screen},function(t){l=t.AssetPoolState},function(t){u=t.LoadState},function(t){c=t.SLGMapData},function(t){_=t.SLGMapLayer}],execute:function(){i._RF.push({},"db2c5x+Q5VGy5xTSgm3cVLO","SLGMap",void 0);o.ccclass,o.property;var p=new s;t("SLGMap",function(){function t(){this.freeTime=void 0,this.url=void 0,this.poolState=void 0,this.pool=void 0,this._loadState=u.Not,this._loadCb=void 0,this._root=void 0,this._building=void 0,this._obj=void 0,this._tree=void 0,this._parent=void 0,this.region=void 0,this.name=void 0,this.data=void 0,this.mapLayer=void 0,this._viewCenter=new s,this._size=new h,this.data=new c;var t=800/d.windowSize.height*d.windowSize.width;p.set(1.5*t*2,2400),this._size.width=this.data.width,this._size.height=this.data.height,this._size.center=new s(0,0)}var i=t.prototype;return i.loadSync=function(){return!(this.poolState>l.Useing)&&(null!=this.url&&(this._loadState==u.Not&&(this._loadState=u.Ready,this.resLoad(),!0)))},i.resLoad=function(){var t=this;this._loadState==u.Ready&&(this._loadState=u.Loading,this._loadCb=function(e){if(t._loadState=u.Finish,t._loadCb=null,!e.error&&null!=e.item&&null!=e.item.asset){var i=e.item.asset;t.data.loadData(i),t.onLoadDataComplete()}},resourceMgr.loadRes(this.url,a,this._loadCb))},i.onLoadDataComplete=function(){this.mapLayer=new _(this),this.initRoot(),this.updateViewCenter(this._viewCenter.x,this._viewCenter.y)},i.initRoot=function(){this._root=new n("map-"+this.name);var t=new n("building");t.parent=this._root;var e=new n("obj");e.parent=this._root;var i=new n("region");i.parent=e;var o=new n("tree");o.parent=this._root,this._building=t,this._tree=o,this._obj=e,this.region=i,null!=this._parent&&(this._root.parent=this._parent)},i.updateViewCenter=function(t,e,i){void 0===i&&(i=!1),this._viewCenter.set(t,e),this.mapLayer&&this.mapLayer.updateTileCenter(this._viewCenter,p,i)},i.destroy=function(){this.poolState!=l.Destroy&&(this.poolState=l.Destroy,this._loadState!=u.Finish?(this._loadState==u.Loading&&resourceMgr.cancelLoadRes(this.url,this._loadCb),this._loadCb=null):(this._loadState==u.Finish&&resourceMgr.releaseResRef(this.url),this._loadState=u.Ready),r(this._root)&&(this._root.destroy(),this._root=null),this.url=null)},i.free=function(){this.poolState==l.Useing&&this.pool.free(this)},i.cacheUse=function(){r(this._root)&&(this._root.active=!0)},i.onAfterCacheFree=function(){this._loadState!=u.Finish&&(this._loadState==u.Loading&&resourceMgr.cancelLoadRes(this.url,this._loadCb),this._loadCb=null,this._loadState=u.Not)},i.cacheReset=function(){r(this._root)&&(this._root.active=!1)},i.update=function(){this.mapLayer&&this.mapLayer.update()},i.getData=function(){return this.data},e(t,[{key:"root",get:function(){return this._root}},{key:"building",get:function(){return this._building}},{key:"tree",get:function(){return this._tree}},{key:"obj",get:function(){return this._obj}},{key:"parent",set:function(t){this._parent=t,this._root&&(this._root.parent=t)}},{key:"box",get:function(){return this._size}}]),t}());i._RF.pop()}}}));
