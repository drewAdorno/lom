System.register("chunks:///_virtual/BubbleControl.ts",["cc","./BubbleDataCache.ts"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.cclegacy},function(e){n=e.BubbleDataCache}],execute:function(){t._RF.push({},"ab11fvR37dDN7zV/KeIaI64","BubbleControl",void 0);e("default",function(){var e=t.prototype;function t(){netManager.addEventListener("chat_bubble.chat_bubble_info_s2c",this.setBubbleInfo,this),netManager.addEventListener("chat_bubble.change_chat_bubble_s2c",this.updateWearInfo,this),netManager.addEventListener("chat_bubble.update_chat_bubble_s2c",this.updateBubbleInfo,this),netManager.addEventListener("chat_bubble.chat_bubble_red_point_s2c",this.updateBubbleRed,this)}return e.clear=function(){},e.send_52_1=function(){netManager.send("chat_bubble.chat_bubble_info_c2s",{})},e.setBubbleInfo=function(e){IS(n).setBubbleInfo(e)},e.updateBubbleInfo=function(e){IS(n).updateBubbleInfo(e)},e.send_52_2=function(e){var t={cfg_id:e};netManager.send("chat_bubble.change_chat_bubble_c2s",t)},e.updateWearInfo=function(e){IS(n).setCurBubbleId(e.wear_id)},e.send_52_4=function(e){var t={cfg_id:e};netManager.send("chat_bubble.chat_bubble_red_point_c2s",t)},e.updateBubbleRed=function(e){IS(n).updateRedState(e.cfg_id)},t}());t._RF.pop()}}}));
