System.register("chunks:///_virtual/NodeUtil.ts",["cc"],(function(n){"use strict";var t,e,o;return{setters:[function(n){t=n.cclegacy,e=n.screen,o=n.isValid}],execute:function(){t._RF.push({},"9a512WCZiRLdpbGfsmoL2E6","NodeUtil",void 0);n("default",function(){function n(){}return n.findChild=function(n,t){var e=null==n?void 0:n.getChildByPath(t);return null==e?null:e},n.findChildComponent=function(n,t,e){var o=null==n?void 0:n.getChildByPath(t);return null==o?null:o.getComponent(e)},n.TransCocosPosToScreenPosY=function(n){return 720/e.windowSize.width*e.windowSize.height-n},n.findComponent=function(n,t){return o(n)?n.getComponent(t):null},n.addComponent=function(n,t){if(o(n)){var e=n.getComponent(t);return null==e?n.addComponent(t):e}return null},n}());t._RF.pop()}}}));
