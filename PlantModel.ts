System.register("chunks:///_virtual/PlantModel.ts",["cc","./TimeUtil.ts","./ObjectUtil.ts","./PrivilegeDataCache.ts","./PrivilegeDefine.ts","./PlantDataCache.ts","./PlantDefine.ts"],(function(n){"use strict";var t,e,i,r,a,o,c,l;return{setters:[function(n){t=n.cclegacy},function(n){e=n.default},function(n){i=n.default},function(n){r=n.PrivilegeDataCache},function(n){a=n.PrivilegeCardEffect},function(n){o=n.PlantDataCache},function(n){c=n.CropState,l=n.PlantEventDefine}],execute:function(){t._RF.push({},"1cac5TCk0dFhZJUupXAHGLP","PlantModel",void 0);n("PlantModel",function(){var n=t.prototype;function t(){}return n.clear=function(){},n.getFarmLevel=function(){return IS(o).farmLevel},n.getFarmExp=function(){return IS(o).farmExp},n.getallLandInfo=function(){return IS(o).landIdToInfo},n.getLandInfoById=function(n){return IS(o).landIdToInfo[n]},n.checkLandUnlock=function(n){return null!=IS(o).landIdToInfo[n]},n.getLandCropInfo=function(n){var t=IS(o).landIdToInfo[n];if(null!=t)return t.crop},n.getCropShowByInfo=function(n){var t=n.state;if(t!=c.NOT_EXIT){var i=configFarm_greens.getDataByKey(n.cfg_id).transformation;if(t==c.COLLECTING||t==c.MATURE||t==c.STEALING||t==c.WAIT_FETCH)return{cropShow:i[i.length-1][1],step:i.length-1};for(var r,a,o=n.end_time-n.start_time,l=(e.serverTime-n.start_time+n.acc_time)/o,u=0,f=0;f<i.length&&l>=(r=i[f])[0]/1e4;f++)a=r[1],u=f+1;return{cropShow:a,step:u}}},n.getBuildingInfoById=function(n){return IS(o).buildingIdToinfo[n]},n.tryOpenFarm=function(n){null==uiMgr.getOpenView("PlantMainView")?uiMgr.openView("PlantMainView",n):normalEvent.emit(l.FARM_FORCE_CHANGE,n)},n.getStealingInfo=function(){if(!(IS(o).stolenList.length<=0))return i.clone(IS(o).stolenList).sort((function(n,t){return n.end_time<t.end_time?-1:1})),IS(o).stolenList[0]},n.getStealingList=function(){return IS(o).stolenList},n.checkHasNotStealing=function(){return IS(o).stolenList.length<=0},n.checkCanStealByStealingCount=function(){return IS(o).stolenList.length<=0+IS(r).getPrivilegeCardValue(a.STEALVALUE)},n.checkBeStealing=function(){var n=IS(o).landIdToInfo;if(null==n||n.length<=0)return!1;for(var t in n){var e=n[t].crop;if(!i.isEmpty(e)&&e.state==c.STEALING)return!0}return!1},n.checkRemindCanPlant=function(){return IS(o).checkLandHasTargetStatus(c.NOT_EXIT)&&IS(o).checkHasSeed()},n.getMeetConditionLand=function(n){var t=new Array,e=this.getallLandInfo();for(var r in e){var a=e[r],o=a.crop;if(i.isEmpty(o))"plant"==n&&t.push(a.id);else{var l=o.state||c.NOT_EXIT;if(l!=c.NOT_EXIT)if(l!=c.MATURE)if(l!=c.WAIT_FETCH){if(l==c.GROWING)this.getCropShowByInfo(o).step>0&&"grow"==n&&t.push(a.id)}else"fetch"==n&&t.push(a.id);else"pick"==n&&t.push(a.id)}}return t},t}());t._RF.pop()}}}));

