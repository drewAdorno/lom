System.register("chunks:///_virtual/WelfareDataCache.ts",["cc","./RedPointMgr.ts","./WelfareDefine.ts"],(function(t){"use strict";var e,i,n;return{setters:[function(t){e=t.cclegacy},function(t){i=t.RedPointMgr},function(t){n=t.WelfareEvent}],execute:function(){e._RF.push({},"5f935k1JAhDj6+HZ5m2AOn1","WelfareDataCache",void 0);t("WelfareDataCache",function(){function t(){this.bindState=0,this.rewardState=0,this.fbShareReward=0,this.share_info={},this.fbLikeReward=0,this.bindRedPoint=0,this.shareRedPoint=0,this.likeRedPoint=0,this.fbRedPoint=0,this.VIPRedPoint=0}var e=t.prototype;return e.clear=function(){},e.setShareStatus=function(t,e){},e.updateRedPoint=function(){this.fbRedPoint=this.shareRedPoint+this.likeRedPoint>0?1:0,IS(i).changeValue("Welfare_Redpoint",this.bindRedPoint+this.fbRedPoint+this.VIPRedPoint),normalEvent.emit(n.WELFARE_RED_UPDATE)},e.GetRedPoint=function(){return this.bindRedPoint+this.fbRedPoint+this.VIPRedPoint>0?1:0},t}());e._RF.pop()}}}));
