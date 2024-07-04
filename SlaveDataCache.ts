System.register("chunks:///_virtual/SlaveDataCache.ts",["cc","./RedPointMgr.ts","./index57.ts","./ConfigGlobal.ts","./CommonDefine.ts","./RoleDataCache.ts","./RoleDefine.ts","./SlaveControl.ts","./UIDefine.ts"],(function(e){"use strict";var t,n,i,o,a,l,r,u,s,R,d;return{setters:[function(e){t=e.cclegacy,n=e.js},function(e){i=e.RedPointMgr},null,function(e){o=e.ConfigGlobal},function(e){a=e.CommonEventDefine},function(e){l=e.RoleDataCache},function(e){r=e.RoleEventDefine,u=e.RoleRedPointSystemEnum},function(e){s=e.default},function(e){R=e.OpenFunction,d=e.PanelTabType}],execute:function(){t._RF.push({},"31758Fjr0BNtLv458ohB0GA","SlaveDataCache",void 0);var h=o.capture_slave_reward_limit,c=o.capture_slave_collecttime;e("SlaveDataCache",function(){var e=t.prototype;function t(){this.selfRoleInfo=void 0,this.masterInfo=void 0,this.slavesInfo=void 0,this.hasSeeOnlineReward=!1,this.hasSeeOutlineReward=!1,this.outLineSumSecond=void 0,this.onLineSumSecond=void 0,this.outLineReward=void 0,this.onLineReward=void 0,this.timerNextReq=void 0,normalEvent.on(r.ROLE_OPEN_FUNCTION_UPDATE,this.onRoleOpenFunctionUpdate,this),normalEvent.on(r.ROLE_RED_DETAIL_UPDATE,this.onRoleRedDetailUpdate,this)}return e.clear=function(){normalEvent.off(r.ROLE_OPEN_FUNCTION_UPDATE,this.onRoleOpenFunctionUpdate,this),normalEvent.off(r.ROLE_RED_DETAIL_UPDATE,this.onRoleRedDetailUpdate,this)},e.onRoleOpenFunctionUpdate=function(e){e==R.FUNC_CAPTURE_SLAVE&&this.updateSlaveRedpoint()},e.onRoleRedDetailUpdate=function(e){e==u.System_Slave&&this.updateSlaveRedpoint()},e.updateSlaveRedpoint=function(){IS(i).changeValue(n.formatStr("MainView/tab-%s/slave",d.Main_Mystery),this.getSlaveRedPoint()),normalEvent.emit(a.UPDATE_MAIN_MYSTERY_RED_POINT)},e.getSlaveRedPoint=function(){return IS(l).CheckFuncOpen(R.FUNC_CAPTURE_SLAVE)?this.getSlaveReportRed()+this.getSlaveRewardCanFetchRed()+this.getSlaveFullRewardRed():0},e.getSlaveReportRed=function(){return IS(l).getRedNumByModule(u.System_Slave,1)},e.getSlaveOnLineCanFetchRed=function(){return this.hasSeeOnlineReward||null==this.onLineReward||this.onLineReward.length<=0?0:this.onLineSumSecond>=c?1:0},e.getSlaveOutLineCanFetchRed=function(){return this.hasSeeOutlineReward||null==this.outLineReward||this.outLineReward.length<=0?0:this.outLineSumSecond>=c?1:0},e.getSlaveRewardCanFetchRed=function(){return this.getSlaveOnLineCanFetchRed()+this.getSlaveOutLineCanFetchRed()},e.getSlaveOnlineFullRewardRed=function(){return null==this.onLineReward||this.onLineReward.length<=0?0:this.onLineSumSecond>=h?1:0},e.getSlaveOutlineFullRewardRed=function(){return null==this.outLineReward||this.outLineReward.length<=0?0:this.outLineSumSecond>=h?1:0},e.getSlaveFullRewardRed=function(){return this.getSlaveOnlineFullRewardRed()+this.getSlaveOutlineFullRewardRed()},e.clearTimer=function(){null!=this.timerNextReq&&(normalTimer.stop(this.timerNextReq),this.timerNextReq=null)},e.tryRefreshTimer=function(){if(IS(l).CheckFuncOpen(R.FUNC_CAPTURE_SLAVE))if(this.onLineSumSecond>=h)this.clearTimer();else{if(this.onLineSumSecond>=c)return this.clearTimer(),void(this.timerNextReq=normalTimer.start(h-this.onLineSumSecond,1,(function(){IS(s).reqCaptureSlaveReward(1)})));this.clearTimer(),this.timerNextReq=normalTimer.start(c-this.onLineSumSecond,1,(function(){IS(s).reqCaptureSlaveReward(1)}))}},t}());t._RF.pop()}}}));
