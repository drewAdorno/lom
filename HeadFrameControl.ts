System.register("chunks:///_virtual/HeadFrameControl.ts",["cc","./FrameDataCache.ts"],(function(e){"use strict";var a,n;return{setters:[function(e){a=e.cclegacy},function(e){n=e.FrameDataCache}],execute:function(){a._RF.push({},"5f31dyikElGipAVPvdtv8lX","HeadFrameControl",void 0);e("default",function(){var e=a.prototype;function a(){netManager.addEventListener("head_frame.head_frame_info_s2c",this.updateFrameInfo,this),netManager.addEventListener("head_frame.head_frame_wear_s2c",this.updateWearInfo,this),netManager.addEventListener("head_frame.head_frame_red_point_s2c",this.updateFrameRed,this)}return e.clear=function(){},e.send_47_1=function(){netManager.send("head_frame.head_frame_info_c2s",{})},e.updateFrameInfo=function(e){IS(n).setFrameInfo(e)},e.send_47_2=function(e){var a={cfg_id:e};netManager.send("head_frame.head_frame_wear_c2s",a)},e.updateWearInfo=function(e){IS(n).setCurFrameId(e.current_head_frame)},e.send_47_3=function(e){var a={cfg_id:e};netManager.send("head_frame.head_frame_red_point_c2s",a)},e.updateFrameRed=function(e){IS(n).updateRedState(e.cfg_id)},a}());a._RF.pop()}}}));
