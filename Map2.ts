System.register("chunks:///_virtual/Map2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnumDefine.ts","./AssetPool.ts","./BaseAsset.ts","./NodeUtil.ts"],(function(t){"use strict";var i,s,o,e,n,a,h,b,p,g,l;return{setters:[function(t){i=t.inheritsLoose,s=t.createClass},function(t){o=t.cclegacy,e=t.isValid,n=t.Vec3,a=t.Vec2},function(t){h=t.BattleFlag},function(t){b=t.AssetPoolState},function(t){p=t.BaseAsset,g=t.LoadState},function(t){l=t.default}],execute:function(){o._RF.push({},"c40d5J9IrVDBpJui7R7BErw","Map",void 0);t("Map",function(t){function o(i,s){var o;return(o=t.call(this)||this).moveSpeed=0,o.bg0=void 0,o.bg0a=void 0,o.bg2=void 0,o.bg3=void 0,o.bg0Pos=new a,o.bg0aPos=new a,o.bg2Pos=new a,o.bg3Pos=new a,o.url=i,o.parent=battleMain.mapRoot,o.moveSpeed=s,battleMain.battleFlag&h.OPEN_GRAPHIC&&o.loadSync(),o}i(o,t);var p=o.prototype;return p.onLoadComplete=function(){this.bg0=l.findChild(this.node,"BG0"),this.bg0a=l.findChild(this.node,"BG0a"),this.bg2=l.findChild(this.node,"BG2"),this.bg3=l.findChild(this.node,"BG3"),this.bg0.setPosition(this.bg0.position.x,this.bg0.position.y+battleMain.mapCamera.offsetY),this.bg0a.setPosition(this.bg0a.position.x,this.bg0a.position.y+battleMain.mapCamera.offsetY),this.bg0Pos.set(this.bg0.position.x,this.bg0.position.y),this.bg0aPos.set(this.bg0a.position.x,this.bg0a.position.y),this.bg2Pos.set(this.bg2.position.x,this.bg2.position.y),this.bg3Pos.set(this.bg3.position.x,this.bg3.position.y),this.bg0a.parent=battleMain.mapTopRoot},p.cacheUse=function(){t.prototype.cacheUse.call(this),e(this.bg0a)&&(this.bg0a.parent=battleMain.mapTopRoot)},p.cacheReset=function(){e(this.bg0a)&&(this.bg0a.parent=this.node),t.prototype.cacheReset.call(this)},p.destroy=function(){this.poolState!=b.Destroy&&(e(this.bg0a)&&(this.bg0a.parent=this.node),t.prototype.destroy.call(this))},p._move=function(t){var i=this.bg0Pos;this.bg0.setPosition(i.x-t,i.y),i=this.bg0aPos,this.bg0a.setPosition(i.x-t,i.y),i=this.bg2Pos,this.bg2.setPosition(i.x+.7*t,i.y),i=this.bg3Pos,this.bg3.setPosition(i.x+.9*t,i.y)},p.onUpdate=function(i){if(t.prototype.onUpdate.call(this,i),battleMain.battleFlag&h.OPEN_GRAPHIC&&e(this.node))return this.moveSpeed>0?(this.node.translate(new n(-this.moveSpeed*i,0,0),0),void this._move(-this.node.position.x)):void this._move(battleMain.mapCamera.curOffsetPartX)},s(o,[{key:"isLoadFinish",get:function(){return this._loadState==g.Finish}}]),o}(p));o._RF.pop()}}}));
