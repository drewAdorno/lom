System.register("chunks:///_virtual/ActivityMergeServersControl.ts",["cc","./ActivityMergeServersDataCache.ts"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.cclegacy},function(t){n=t.default}],execute:function(){e._RF.push({},"03656MjJt9DEJ8/f8N+HPxi","ActivityMergeServersControl",void 0);t("default",function(){var t=e.prototype;function e(){netManager.addEventListener("act.act_guild_pay_info_s2c",this.update_24_173,this),netManager.addEventListener("act.act_cohesion_info_s2c",this.update_24_175,this)}return t.clear=function(){},t.send_24_173=function(t){netManager.send("act.act_guild_pay_info_c2s",{act_type:t})},t.update_24_173=function(t){IS(n).updateGuildInfo(t)},t.send_24_174=function(t,e){netManager.send("act.act_guild_pay_get_reward_c2s",{act_type:t,reward_id:e})},t.send_24_175=function(t){netManager.send("act.act_cohesion_info_c2s",{act_type:t})},t.update_24_175=function(t){IS(n).updateCohesionInfo(t)},t.send_24_176=function(t,e){netManager.send("act.act_cohesion_get_reward_c2s",{act_type:t,reward_id:e})},e}());e._RF.pop()}}}));
