System.register("chunks:///_virtual/BagModel.ts",["cc","./RoleDataCache.ts","./BagControl.ts","./BagDataCache.ts","./BagDefine.ts","./FixMath.ts"],(function(e){"use strict";var o,t,n,i,r,u,s,d;return{setters:[function(e){o=e.cclegacy},function(e){t=e.RoleDataCache,n=e.RES_ID_LIST},function(e){i=e.default},function(e){r=e.BagDataCache},function(e){u=e.ItemIdDefine,s=e.GoodsType},function(e){d=e.FixMath}],execute:function(){o._RF.push({},"770d7NWFRdCLKJp5TEQ20V/","BagModel",void 0);e("BagModel",function(){var e=o.prototype;function o(){}return e.clear=function(){},e.getGoodsInfos=function(){return IS(r).goodsIdToInfo},e.getGoodsInfoByGoodsId=function(e){return IS(r).goodsIdToInfo[e]},e.getGoodsCountByGoodsId=function(e){var o=this.getGoodsInfoByGoodsId(e);return null==o||null==o.num?0:o.num},e.getGoodsInfosByGoodsGtid=function(e){var o=IS(r).goodsGtidToIds[e];if(null!=o&&0!=o.length){for(var t=new Array,n=0;n<o.length;n++)t.push(this.getGoodsInfoByGoodsId(o[n]));return t}},e.getGoodsCountByGoodsGtid=function(e){if(e==u.FakeRechare){var o=IS(t).GetRoleAttr(n[e])||0;return d.round(o/100)}if(e<1e3)return IS(t).GetRoleAttr(n[e])||0;var i=IS(r).goodsGtidToIds[e];if(null==i||0==i.length)return 0;for(var s=0,f=0;f<i.length;f++)s+=this.getGoodsCountByGoodsId(i[f]);return s},e.tryUseGoods=function(e,o){this.getGoodsCountByGoodsId(e)<o||IS(i).reqUseGoods(e,o)},e.OpenItemTips=function(e,o){var t=configGoods.getDataByKey(e);t.type==s.Artifact||t.type==s.Mount||t.type==s.Wing?uiMgr.openView("ItemPreviewView",e):3==t.type?uiMgr.openView("SkillInfoView",t.effect[0],!0):4==t.type?uiMgr.openView("PetInfoView",t.effect[0],!0):2==t.type?uiMgr.openView("EquipDetailView",e,!0):11==t.type?uiMgr.openView("PlayerSkinLookView",e,!0):12==t.type?uiMgr.openView("FateInfoView",t.effect[0],t.effect[1]):13==t.type?uiMgr.openView("ItemMultiTipsView",e):uiMgr.openView("ItemTipsView",e,o)},o}());o._RF.pop()}}}));
