System.register("chunks:///_virtual/InstantiateMgr.ts",["cc","./ObjectUtil.ts"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.cclegacy},function(t){e=t.default}],execute:function(){t({IS:i,ISN:function(t){return i(r.get(t))},destroyIS:function(){c.forEach((function(t){t.clear()})),c.clear()},resetNewIS:function(){c.forEach((function(t,n){t.clear()})),c.clear();var t=e.copyArray(a);a.length=0,t.forEach((function(t){i(t)}))}}),n._RF.push({},"b533edsaFRLB4X5XQOt273u","InstantiateMgr",void 0);var c=new Map,r=t("instantiateByNameDic",new Map),a=t("instantiates",[]);function i(t,n){void 0===n&&(n=!0);var e=c.get(t);return n&&null==e&&(e=new t,c.set(t,e),a.push(t),r.set(t.prototype.constructor.name,t)),e}n._RF.pop()}}}));
