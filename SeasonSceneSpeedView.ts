System.register("chunks:///_virtual/SeasonSceneSpeedView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigSeason_kv.ts","./BagModel.ts","./MessageView.ts","./SeasonSceneControl.ts","./SeasonSceneDataCache.ts","./BaseView.ts"],(function(e){"use strict";var t,n,i,o,s,a,d,r,c,u,f,l,h,C,v,S;return{setters:[function(e){t=e.inheritsLoose,n=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy,o=e.Button,s=e.Label,a=e.Vec2},function(e){d=e.ItemGrid},function(e){r=e.default},function(e){c=e.default},function(e){u=e.default},null,function(e){f=e.ConfigSeason_kv},function(e){l=e.BagModel},function(e){h=e.default},function(e){C=e.default},function(e){v=e.SeasonSceneDataCache},function(e){S=e.BaseView}],execute:function(){i._RF.push({},"ace44LKmDZNW4NNDyG+9Pl0","SeasonSceneSpeedView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).txtTime=void 0,t.goods=[],t.pos=new a,t.name="SeasonSceneSpeedView",t.url="ui/module/season/scene-view/SeasonSceneSpeedView",t}t(i,e);var d=i.prototype;return d.onInit=function(){var e=this,t=this.findChild("content/btnClose");this.addComponentCallbackListener(t,o.EventType.CLICK,(function(){e.close()}));var n=this.findChild("content/btnMove");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){e.close();var t=e.pos;IS(C).reqMove(1,{x:t.x,y:t.y})}));var i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){e.close()}));var a=this.findChild("content/info");this.txtTime=r.findChildComponent(a,"myInfo/txtTime",s);for(var d=0;d<3;d++){var c=r.findChild(a,"useList/item"+(d+1)),u=f.SEASON_BATTLE_SPEEDUP[d];this.goods[d]=new m(this,c,u)}},d.registerUpdateHandler=function(){},d.onAfterOpen=function(){var e=IS(v).teamInfo.state_end_time-u.serverTime;this.txtTime.string=GetLanguage(200136)+u.formatTimeForSecond(e);for(var t,i=n(this.goods);!(t=i()).done;){t.value.updateInfo()}},d.onBeforeClose=function(){},d.onDestroy=function(){},i}(S));var m=function(){function e(e,t,n){var i=this;this.node=void 0,this.itemGrid=void 0,this.txtDesc=void 0,this.data=void 0,this.node=t,this.data=n;var a=r.findChild(t,"itemGrid");this.itemGrid=new d(e,a,(function(){}));var u=r.findChild(t,"btnUse");e.addComponentCallbackListener(u,o.EventType.CLICK,(function(){IS(l).getGoodsCountByGoodsGtid(n[0])<=0?h.showFlyTip(GetLanguage(200069)):(IS(C).reqSpeedup(i.data[0]),e.close())})),r.findChildComponent(t,"txtDesc",s).string=c.formatStr(GetLanguage(401308),Math.floor(n[1]/100))}return e.prototype.updateInfo=function(){var e=IS(l).getGoodsCountByGoodsGtid(this.data[0]);this.itemGrid.SetItemId(this.data[0],e),this.itemGrid.SetItemNum(e,!0)},e}();i._RF.pop()}}}));
