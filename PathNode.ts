System.register("chunks:///_virtual/PathNode.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,s;return{setters:[function(t){e=t.createClass},function(t){s=t.cclegacy}],execute:function(){s._RF.push({},"ce53ffujmlGs5H56+6nFeyU","PathNode",void 0);t("PathNode",function(){function t(t){this.pos=void 0,this.links=[],this.gCost=100,this.hCost=0,this.parent=null,this._heapIndex=0,this.pos=t}return t.prototype.compareTo=function(t){var e=this.fCost-t.fCost;return 0==e&&(e=this.hCost-t.hCost),-e},e(t,[{key:"heapIndex",get:function(){return this._heapIndex},set:function(t){this._heapIndex=t}},{key:"fCost",get:function(){return this.gCost+this.hCost}}]),t}());s._RF.pop()}}}));
