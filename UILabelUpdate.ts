System.register("chunks:///_virtual/UILabelUpdate.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"a41bfpY9JlHH4Ap15iCXQor","UILabelUpdate",void 0);e("labelUpdate",new(function(){function e(){this.labels=[]}var t=e.prototype;return t.add=function(e,t){var l=this.labels.indexOf(e);l>=0?this.labels[l][1]=t:this.labels.push([e,t])},t.remove=function(e){var t=this.labels.indexOf(e);t>=0&&this.labels.splice(t,0)},t.update=function(){ftime.beginFTime(ftime.UILabelUpdate);for(var e=0;e<this.labels.length;e++){if(ftime.checkPass(ftime.UILabelUpdate))break;this.labels[e][1].call(this.labels[e][0]),this.labels.splice(e,1),e--}},t.clear=function(){this.labels.length=0},e}()));t._RF.pop()}}}));
