System.register("chunks:///_virtual/SceneLine2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts"],(function(t){"use strict";var e,i,n,o,s;return{setters:[function(t){e=t.createForOfIteratorHelperLoose},function(t){i=t.cclegacy,n=t.Vec2,o=t.Vec3},function(t){s=t.default}],execute:function(){i._RF.push({},"a1a9fXSWxxGd5gWJpjn/aHt","SceneLine",void 0);var h=new n;t("SceneLine",function(){function t(t){this.node=void 0,this.nodeT1=void 0,this.nodeT2=void 0,this.points=[],this.velocity=new n,this.nodePoints=[],this.pool=[],this.node=t,this.nodeT1=s.findChild(t,"t1");for(var e=s.findChild(t,"t2"),i=0;i<20;i++){var o=nodeInstantiate.instantiate(e);o.parent=t,o.active=!1,this.pool.push(o)}this.nodeT2=e}var i=t.prototype;return i.onUpdate=function(){},i.seek=function(t,e,i,o){var s=n.distance(i,e);if(s<o){if(o-=s,t.length>2){t.splice(t.length-1,1);var a=t[t.length-2];return void this.seek(t,i,a,o)}t.splice(0,1)}else n.subtract(this.velocity,i,e),this.velocity.normalize().multiplyScalar(o),n.add(h,e,this.velocity),this.points.push(new n(h.x,h.y)),o=40,this.seek(t,h,i,o)},i.closeLine=function(){if(0!=this.points.length){this.nodeT1.active=!1;for(var t,i=e(this.nodePoints);!(t=i()).done;){var n=t.value;n.active=!1,this.pool.push(n)}this.nodePoints.length=0,this.points.length=0}},i.showLine=function(t){this.closeLine(),this.nodeT1.position=new o(t[t.length-1].x,t[t.length-1].y,0),this.seek(t,t[t.length-1],t[t.length-2],40),this.nodeT1.active=!0;for(var i,n=e(this.points);!(i=n()).done;){var s=i.value,h=void 0;this.pool.length>0?h=this.pool.pop():(h=nodeInstantiate.instantiate(this.nodeT2)).parent=this.node,h.position=new o(s.x,s.y,0),h.active=!0,this.nodePoints.push(h)}},t}());i._RF.pop()}}}));

