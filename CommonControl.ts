System.register("chunks:///_virtual/CommonControl.ts",["cc","./PlatformUtil.ts","./EquipModel.ts","./NativeToJs.ts","./StringUtil.ts","./CommonDefine.ts","./MessageView.ts"],(function(e){"use strict";var t,n,i,o,s,r,a,c,u,_,l,f,g,d;return{setters:[function(e){t=e.cclegacy,n=e.input,i=e.Input,o=e.KeyCode},function(e){s=e.PlatformUtil},function(e){r=e.EquipModel},function(e){a=e.NativeToJs},function(e){c=e.default},function(e){u=e.GetGoodsSource,_=e.EquipOpenAddGoodsSource,l=e.StealFarmGetSoruce,f=e.CommonEventDefine},function(e){g=e.default,d=e.TYPE_CLOSE}],execute:function(){t._RF.push({},"e9821eQrZZICZ9nSeAVPZvZ","CommonControl",void 0);e("default",function(){var e=t.prototype;function t(){var e=this;netManager.addEventListener("error.error_info_s2c",this.on_error_info_s2c,this),netManager.addEventListener("system.system_gm_s2c",this.on_system_gm_s2c,this),netManager.addEventListener("system.system_marquee_s2c",this.on_system_marquee_s2c,this),netManager.addEventListener("goods.goods_show_s2c",this.on_goods_show_s2c,this),netManager.addEventListener("system.system_open_gm_s2c",this.on_abcd_s2c,this),n.on(i.EventType.KEY_DOWN,(function(t){e.onKeyDown(t.keyCode)}),this)}return e.clear=function(){var e=this;n.off(i.EventType.KEY_DOWN,(function(t){e.onKeyDown(t.keyCode)}),this),console.log("清理CommonControl")},e.on_abcd_s2c=function(e){"Invalid"!=e.result&&uiMgr.openViewByUrl(e.result)},e.on_error_info_s2c=function(e){var t=e.code;if(-1!=t){var n=configErrorInfo.getDataByKey(t);g.showFlyTip(n?n.info:e.msg)}else g.showFlyTip(e.msg)},e.on_system_gm_s2c=function(e){},e.on_system_marquee_s2c=function(e){var t=e.content;if(4!=e.type){if(1&e.tips){var n="";if(null!=e.content.arg_list&&e.content.arg_list.length>0){var i="%s";0!=e.content.id&&(i=GetLanguage(e.content.id)),n=c.format_p_lang_info(i,e.content)}else n=t.arg_list[0].name;g.showRollTip(n)}2&e.tips&&g.showBoxTip({tip:t.arg_list[0].name,title:GetLanguage(200048)})}else GlobalDefine.SMALLVERSION!=t.arg_list[0].name&&g.showBoxTip({tip:GetLanguage(200196),btnCnt:2,func:function(e){"type_yes"==e&&s.restartGame()},ensure:GetLanguage(200129)})},e.on_goods_show_s2c=function(e){u.includes(e.type)||(e.type!=_?e.type!=l?e.reward_list&&e.reward_list.length>0&&uiMgr.openView("GoodsGetView",e.reward_list):uiMgr.openView("ThiefGetView",e.reward_list):IS(r).onGetTicketByOpenBox(e.reward_list))},e.onKeyDown=function(e){if(e==o.MOBILE_BACK){var t=uiMgr.checkOnlyOpenView(),n=uiMgr.getView("MainView").curType;if(IS(g).nodeBoxTips.active)return void IS(g).closeBoxTip(d);if(!t||null!=n&&n>0){if(t)uiMgr.getView("MainView").setIndex(n);else{var i=uiMgr.GetTopOpenView(["MainView","MessageView","GuideView","BattleHubView"]);null!=i?uiMgr.close(i.name):uiMgr.getView("MainView").setIndex(n)}return}a.exitGame()}GlobalDefine.SERVER_LIST_TYPE>1&&3!=GlobalDefine.SERVER_LIST_TYPE||normalEvent.emit(f.KEY_DOWN,e)},t}());t._RF.pop()}}}));

