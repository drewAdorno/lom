System.register("chunks:///_virtual/ItemGrid.ts",["cc","./ConfigGlobal.ts","./BagDefine.ts","./BagModel.ts","./NodeUtil.ts","./ItemIcon.ts"],(function(i){"use strict";var t,e,n,o,s,d,a,m,h;return{setters:[function(i){t=i.cclegacy,e=i.Sprite,n=i.Label,o=i.Button},function(i){s=i.ConfigGlobal},function(i){d=i.GoodsType},function(i){a=i.BagModel},function(i){m=i.default},function(i){h=i.IconAseetType}],execute:function(){t._RF.push({},"0a4d5mC2XRLxYbDEsx/37QG","ItemGrid",void 0);var c=i("ItemGridAutoNum",-1);i("ItemGrid",function(){function i(i,t,s){var d=this;void 0===s&&(s=null),this.imgFram=void 0,this.imgIcon=void 0,this.num=void 0,this.node=void 0,this.view=void 0,this.itemId=void 0,this.name=void 0,this.view=i,this.node=t,this.imgFram=m.findChildComponent(this.node,"imgFrame",e),this.imgIcon=m.findChildComponent(this.node,"imgIcon",e),this.num=m.findChildComponent(this.node,"num",n),this.name=m.findChildComponent(this.node,"txtName",n),this.view.addComponentCallbackListener(this.node,o.EventType.CLICK,(function(){s?s():IS(a).OpenItemTips(d.itemId,d.node)}))}var t=i.prototype;return t.SetItemId=function(i,t){if(void 0===t&&(t=0),this.itemId=i,this.itemId&&this.itemId>0){var e=configGoods.getDataByKey(this.itemId);if(e.type==d.Fate){var n=configFate.getDataByKey(e.effect[0]);this.view.loadIcon(this.imgFram,"fate",s.fate_quality_pos[n.quality-1][1]),this.view.loadIcon(this.imgIcon,"icon_fate",n.icon,null,h.ICON_SPRITE)}else{var o=configColor.getDataByKey(e.quality);this.view.loadIcon(this.imgFram,"icon_equip",o.path),this.view.loadIcon(this.imgIcon,e.icon_group,e.icon)}this.name&&(this.name.string=e.name),this.num.string=t>0?t.toString():""}else printLogErr("道具id错误 = "+this.itemId)},t.SetItemNum=function(i,t){return void 0===i&&(i=c),void 0===t&&(t=!1),i=i==c?IS(a).getGoodsCountByGoodsGtid(this.itemId):i,this.num.string=t||i>0?String(i):"",i},t.SetGrey=function(i){this.imgFram.grayscale=i,this.imgIcon.grayscale=i},i}());t._RF.pop()}}}));
