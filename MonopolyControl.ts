System.register("chunks:///_virtual/MonopolyControl.ts",["cc","./MonopolyDataCache.ts","./MonopolyDefine.ts"],(function(o){"use strict";var n,t,e;return{setters:[function(o){n=o.cclegacy},function(o){t=o.MonopolyDataCache},function(o){e=o.MonopolyEventDefine}],execute:function(){n._RF.push({},"b2e00YwQ0VOzb+KhWprmEOZ","MonopolyControl",void 0);o("default",function(){var o=n.prototype;function n(){netManager.addEventListener("act.act_monopoly_info_s2c",this.on_act_monopoly_info_s2c,this),netManager.addEventListener("act.act_monopoly_dice_s2c",this.on_act_monopoly_dice_s2c,this),netManager.addEventListener("act.act_monopoly_dice_time_s2c",this.on_act_monopoly_dice_time_s2c,this),netManager.addEventListener("act.act_monopoly_dice_grid_s2c",this.on_act_monopoly_dice_grid_s2c,this),netManager.addEventListener("act.act_monopoly_double_s2c",this.on_act_monopoly_double_s2c,this)}return o.clear=function(){printLog("MonopolyControl")},o.onReconnect=function(){},o.onLogin=function(){},o.reqMonoInfo=function(){netManager.send("act.act_monopoly_info_c2s",{})},o.on_act_monopoly_info_s2c=function(o){IS(t).monopolyInfo={circle:o.circle,pos:o.pos,dice_time:o.dice_time,double_card_open:o.double_card_open,event:o.event,grid_list:o.grid_list},normalEvent.emit(e.MONO_INFO_BACK)},o.reqMonopolyDice=function(){netManager.send("act.act_monopoly_dice_c2s",{})},o.on_act_monopoly_dice_s2c=function(o){IS(t).monopolyInfo.circle=o.circle,IS(t).monopolyInfo.pos=o.pos,IS(t).monopolyInfo.event=o.event,normalEvent.emit(e.MONO_GRID_DICE_BACK,o)},o.on_act_monopoly_dice_time_s2c=function(o){IS(t).monopolyInfo.dice_time=o.dice_time,normalEvent.emit(e.MONO_DICE_TIME_UPDATE)},o.on_act_monopoly_dice_grid_s2c=function(o){if(!(null==o.grid||o.grid.length<=0)){var n=IS(t).monopolyInfo.grid_list;if(null!=n){for(var c={},_=0;_<o.grid.length;_++)c[o.grid[_].pos]=o.grid[_];for(var i=0;i<n.length;i++)c[n[i].pos]&&(n[i]=c[n[i].pos]);normalEvent.emit(e.MONO_GRID_UPDATE,o)}}},o.reqMonopolyDouble=function(){netManager.send("act.act_monopoly_double_c2s",{})},o.on_act_monopoly_double_s2c=function(o){normalEvent.emit(e.MONO_DOUBLE_INFO_BACK,o)},n}());n._RF.pop()}}}));
