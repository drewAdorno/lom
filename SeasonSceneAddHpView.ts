System.register("chunks:///_virtual/SeasonSceneAddHpView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ConfigSeason_kv.ts","./BagModel.ts","./MessageView.ts","./SeasonSceneControl.ts","./SeasonSceneDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,n,o,i,s,a,d,r,c,u,f,l,h,p,C,v;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){o=t.cclegacy,i=t.Button,s=t.ProgressBar,a=t.Vec2,d=t.Label},function(t){r=t.ItemGrid},function(t){c=t.default},function(t){u=t.default},null,function(t){f=t.ConfigSeason_kv},function(t){l=t.BagModel},function(t){h=t.default},function(t){p=t.default},function(t){C=t.SeasonSceneDataCache},function(t){v=t.BaseView}],execute:function(){o._RF.push({},"bf96dlTp89GaK2LHZ6mcFD4","SeasonSceneAddHpView",void 0);t("default",function(t){function o(){var e;return(e=t.call(this)||this).goods=[],e.pbHp=void 0,e.pos=new a,e.name="SeasonSceneAddHpView",e.url="ui/module/season/scene-view/SeasonSceneAddHpView",e}e(o,t);var d=o.prototype;return d.onInit=function(){var t=this,e=this.findChild("content/btnClose");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.close()}));var n=this.findChild("imgMask");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){t.close()}));var o=this.findChild("content/info");this.pbHp=c.findChildComponent(o,"myInfo/hp",s);for(var a=0;a<2;a++){var d=c.findChild(o,"useList/item"+(a+1)),r=f.SEASON_BATTLE_BLOODUP[a];this.goods[a]=new S(this,d,r)}},d.registerUpdateHandler=function(){},d.onAfterOpen=function(){var t=IS(C).teamInfo;this.pbHp.progress=t.hp/1e4;for(var e,o=n(this.goods);!(e=o()).done;){e.value.updateInfo()}},d.onBeforeClose=function(){},d.onDestroy=function(){},o}(v));var S=function(){function t(t,e,n){var o=this;this.node=void 0,this.itemGrid=void 0,this.txtDesc=void 0,this.data=void 0,this.node=e,this.data=n;var s=c.findChild(e,"itemGrid");this.itemGrid=new r(t,s,(function(){}));var a=c.findChild(e,"btnUse");t.addComponentCallbackListener(a,i.EventType.CLICK,(function(){IS(l).getGoodsCountByGoodsGtid(n[0])<=0?h.showFlyTip(GetLanguage(200069)):(IS(p).reqRecover(o.data[0]),t.close())})),c.findChildComponent(e,"txtDesc",d).string=u.formatStr(GetLanguage(302063),Math.floor(n[1]/100))}return t.prototype.updateInfo=function(){var t=IS(l).getGoodsCountByGoodsGtid(this.data[0]);this.itemGrid.SetItemId(this.data[0],t),this.itemGrid.SetItemNum(t,!0)},t}();o._RF.pop()}}}));
