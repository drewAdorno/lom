System.register("chunks:///_virtual/RelicModel.ts",["cc","./StringUtil.ts","./RelicDataCache.ts"],(function(n){"use strict";var t,e,i;return{setters:[function(n){t=n.cclegacy},function(n){e=n.default},function(n){i=n.RelicDataCache}],execute:function(){t._RF.push({},"8fa8ddRJNZBKbfiiOiBkc8l","RelicModel",void 0);n("RelicModel",function(){var n=t.prototype;function t(){}return n.clear=function(){},n.checkRelicTypeUnlock=function(n){return IS(i).typeToUnlock[n]||!1},n.getRelicInfoById=function(n){return IS(i).relicIdToInfo[n]},n.getRelicInfoByCfgId=function(n){var t=IS(i).relicIdToInfo;for(var e in t)if(t[e].cfg_id==n)return t[e]},n.getRelicInfoByLocation=function(n){var t=IS(i).relicIdToInfo;for(var e in t)if(t[e].location==n)return t[e]},n.getFindCount=function(){return IS(i).findCount},n.getCfgIdsBytype=function(n){return IS(i).typeToCfgIds[n]},n.getMaxRelicCount=function(){return IS(i).maxRelicCount},n.getCurTab=function(){return IS(i).curTab},n.getCurTabInfo=function(){return this.getTabInfo(IS(i).curTab)},n.getTabInfo=function(n){if(null!=n)return IS(i).tabToInfo[n]},n.getTabName=function(n){var t=this.getTabInfo(n),i=t&&t.name;return i&&""!=i||(i=e.formatStrWithMirrorDeal(GetLanguage(200488),GetLanguage(200662+n))),i},n.getRelicInfoByTabAndLocation=function(n,t){var e=this.getTabInfo(n);if(null!=e){var i=e.pos_info;if(null!=i)for(var o=0;o<i.length;o++)if(i[o].k==t)return this.getRelicInfoByCfgId(i[o].v)}},t}());t._RF.pop()}}}));

