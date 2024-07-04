System.register("chunks:///_virtual/SeasonControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ControlMgr.ts","./SeasonDataCache.ts","./SeasonDefine.ts","./SeasonShipModel.ts","./SeasonFightView.ts"],(function(e){"use strict";var i,n,_,s,t,o,p,a,r;return{setters:[function(e){i=e.createForOfIteratorHelperLoose},function(e){n=e.cclegacy},function(e){_=e.controlMgr},function(e){s=e.SeasonDataCache},function(e){t=e.SeasonShipEventDefind,o=e.SeasonEventDefine,p=e.ShipEquipBoxChangeType},function(e){a=e.SeasonShipModel},function(e){r=e.default}],execute:function(){n._RF.push({},"df6a4ANU59I9bPy4yA5ck7J","SeasonControl",void 0);e("default",function(){var e=n.prototype;function n(){netManager.addEventListener("ship.ship_info_s2c",this.on_ship_info_s2c,this),netManager.addEventListener("ship.ship_station_up_s2c",this.on_ship_station_up_s2c,this),netManager.addEventListener("ship.ship_level_s2c",this.on_ship_level_s2c,this),netManager.addEventListener("ship.ship_skin_level_s2c",this.on_ship_skin_level_s2c,this),netManager.addEventListener("ship.ship_equip_box_level_s2c",this.on_ship_equip_box_level_s2c,this),netManager.addEventListener("ship.ship_equip_box_open_s2c",this.on_ship_equip_box_open_s2c,this),netManager.addEventListener("ship.ship_equip_info_s2c",this.on_ship_equip_info_s2c,this),netManager.addEventListener("ship.ship_equip_change_s2c",this.on_ship_equip_change_s2c,this),netManager.addEventListener("ship.ship_equip_shop_s2c",this.on_ship_equip_shop_s2c,this),netManager.addEventListener("ship.ship_equip_box_open_all_s2c",this.on_ship_equip_box_open_all_s2c,this),netManager.addEventListener("ship.ship_total_sp_info_s2c",this.on_ship_total_sp_info_s2c,this),netManager.addEventListener("ship.ship_total_sp_update_s2c",this.on_ship_total_sp_update_s2c,this),netManager.addEventListener("ship.ship_power_info_s2c",this.on_ship_power_info_s2c,this),netManager.addEventListener("ship.ship_use_id_s2c",this.on_ship_use_id_s2c,this),netManager.addEventListener("ship.ship_equip_book_update_s2c",this.on_ship_equip_book_update_s2c,this),netManager.addEventListener("ship.ship_figure_s2c",this.on_ship_figure_s2c,this),netManager.addEventListener("ship.ship_room_info_s2c",this.on_ship_room_info_s2c,this),netManager.addEventListener("ship.ship_room_update_s2c",this.on_ship_room_update_s2c,this),netManager.addEventListener("ship.ship_treasure_info_s2c",this.on_ship_treasure_info_s2c,this),netManager.addEventListener("ship.ship_treasure_uplv_s2c",this.on_ship_treasure_uplv_s2c,this),netManager.addEventListener("ship.ship_draw_info_s2c",this.on_ship_draw_info_s2c,this),netManager.addEventListener("ship.ship_draw_lotto_s2c",this.on_ship_draw_lotto_s2c,this),netManager.addEventListener("ship.ship_hang_up_box_info_s2c",this.on_ship_hang_up_box_info_s2c,this),netManager.addEventListener("s1.s1_act_info_s2c",this.on_s1_act_info_s2c,this),netManager.addEventListener("s1.s1_hall_s2c",this.on_s1_hall_s2c,this),netManager.addEventListener("s1.s1_empire_occupy_tip_s2c",this.on_s1_empire_occupy_tip_s2c,this),netManager.addEventListener("s1.s1_air_drop_tip_s2c",this.on_s1_air_drop_tip_s2c,this),netManager.addEventListener("act.act_s1_preview_time_s2c",this.on_act_s1_preview_time_s2c,this),_.addControl(this)}return e.clear=function(){printLog("SeasonControl")},e.onLogin=function(){this.reqShipInfo(),this.reqShipRoomInfo(),this.reqShipTreasureInfo(),this.reqShipEquipInfo(),this.reqSeasonActInfo()},e.onReconnect=function(){this.reqShipInfo(),this.reqShipRoomInfo(),this.reqShipTreasureInfo(),this.reqShipEquipInfo(),this.reqSeasonActInfo()},e.reqShipInfo=function(){netManager.send("ship.ship_info_c2s",{})},e.reqShipStationUp=function(e){netManager.send("ship.ship_station_up_c2s",{item_num:e})},e.reqShipSkinLevelUp=function(e){netManager.send("ship.ship_skin_level_c2s",{skin_id:e})},e.reqShipSPInfo=function(e){netManager.send("ship.ship_total_sp_info_c2s",{type:e})},e.reqShipUse=function(e){netManager.send("ship.ship_use_id_c2s",{use_ship_id:e})},e.reqShipEquipBoxLevelUp=function(){netManager.send("ship.ship_equip_box_level_c2s",{})},e.reqShipEquipBoxOpen=function(){netManager.send("ship.ship_equip_box_open_c2s",{})},e.reqShipEquipMultiOpen=function(e,i){netManager.send("ship.ship_equip_box_open_all_c2s",{num:e,quality:i})},e.reqShipEquipInfo=function(){netManager.send("ship.ship_equip_info_c2s",{})},e.reqShipEquipWear=function(e){netManager.send("ship.ship_equip_wear_c2s",{equip_id:e})},e.reqShipEquipSell=function(e){netManager.send("ship.ship_equip_shop_c2s",{equip_ids:e})},e.reqShipFigure=function(e,i){netManager.send("ship.ship_figure_c2s",{figure:{k:e,v:i}})},e.reqShipRoomInfo=function(){netManager.send("ship.ship_room_info_c2s",{})},e.reqShipRoomInfoUpdate=function(e,i,n){netManager.send("ship.ship_room_update_c2s",{room_id:e,type:i,target:n})},e.reqShipTreasureInfo=function(){netManager.send("ship.ship_treasure_info_c2s",{})},e.reqShipTreasureLevelUp=function(e){netManager.send("ship.ship_treasure_uplv_c2s",{id:e})},e.reqShipDrawCardInfo=function(e){netManager.send("ship.ship_draw_info_c2s",{pool_type:e})},e.reqShipDrawCard=function(e,i){netManager.send("ship.ship_draw_lotto_c2s",{type:e,pool_type:i})},e.reqSeasonActInfo=function(){netManager.send("s1.s1_act_info_c2s",{})},e.reqOutlineBoxInfo=function(){netManager.send("ship.ship_hang_up_box_info_c2s",{})},e.reqOutlineReward=function(){netManager.send("ship.ship_hang_up_box_reward_c2s",{})},e.reqHallInfo=function(e){netManager.send("s1.s1_hall_c2s",{season_id:e})},e.reqItemTransform=function(e){netManager.send("ship.ship_transform_c2s",{item_list:e})},e.reqSeasonPreviewTime=function(){netManager.send("act.act_s1_preview_time_c2s",{})},e.on_ship_info_s2c=function(e){var i=IS(s);i.station_level=e.station_level,i.station_exp=e.station_exp,i.ship_level=e.ship_level,i.ship_exp=e.ship_exp,i.equip_box_level=e.equip_box_level,i.equip_box_exp=e.equip_box_exp,i.equip_books=e.equip_books,i.skin_list=e.skin_list,i.figure_list=e.figure_list,i.cur_ship_skin=e.use_ship_id,i.checkRedPoint(),normalEvent.emit(t.TYPE_SHIP_INFO_UPDATE)},e.on_ship_station_up_s2c=function(e){var i=IS(s);i.station_level=e.station_level,i.station_exp=e.station_exp,i.checkRedPoint(),normalEvent.emit(t.TYPE_SHIP_INFO_UPDATE)},e.on_ship_level_s2c=function(e){var i=IS(s);i.ship_level=e.ship_level,i.ship_exp=e.ship_exp,i.checkShipRP(),i.checkShipRoomRP(),normalEvent.emit(t.TYPE_SHIP_LEVEL_INFO_UPDATE),normalEvent.emit(t.TYPE_SHIP_INFO_UPDATE)},e.on_ship_skin_level_s2c=function(e){for(var n,_=IS(s),o=[],p=!0,a=i(_.skin_list);!(n=a()).done;){var r=n.value;r.skin_id==e.skin.skin_id?(p=!1,o.push(e.skin)):o.push(r)}p&&o.push(e.skin),_.skin_list=o,_.checkShipRP(),normalEvent.emit(t.TYPE_SHIP_BODY_SKIN_INFO_UPDATE,e.skin.skin_id)},e.on_ship_total_sp_info_s2c=function(e){},e.on_ship_total_sp_update_s2c=function(e){},e.on_ship_power_info_s2c=function(e){var n=IS(s);if(uiMgr.getOpenView("SeasonMapSceneView")){for(var _,o=0,p=0,a=i(n.powerInfo);!(_=a()).done;){var h=_.value;0==h.type&&(o=h.power)}for(var u,c=i(e.power_info);!(u=c()).done;){var l=u.value;0==l.type&&(p=l.power)}p-o!=0&&r.showFightTip(p-o)}n.powerInfo=e.power_info,normalEvent.emit(t.TYPE_SHIP_POWER_INFO_UPDATE)},e.on_ship_use_id_s2c=function(e){IS(s).cur_ship_skin=e.use_ship_id,normalEvent.emit(t.TYPE_SHIP_BODY_SKIN_INFO_UPDATE,e.use_ship_id)},e.on_ship_equip_book_update_s2c=function(e){for(var n,_=IS(s),t=i(e.add_list);!(n=t()).done;){var o=n.value;_.equip_books.push(o),configSeason_ship_appearance.getDataByKey(o)&&_.book_new.push(o)}_.checkShipSkinRP()},e.on_s1_act_info_s2c=function(e){var i=IS(s);i.is_open=e.is_open,i.start_time=e.start_time,i.end_time=e.end_time,i.server_list=e.serv_list,i.max_season_id=e.max_season_id,normalEvent.emit(o.SEASON_ACT_INFO_UPDATE)},e.on_ship_equip_box_level_s2c=function(e){var i,n=IS(s);n&&(0!=n.equip_box_level&&n.equip_box_level!=e.equip_box_level?i=p.lvUp:n.equip_box_exp!=e.equip_box_exp&&(i=p.expAdd)),IS(s).equip_box_level=e.equip_box_level,IS(s).equip_box_exp=e.equip_box_exp,normalEvent.emit(t.SHIP_EQUIP_BOX_INFO_UPDATE,i),normalEvent.emit(t.TYPE_SHIP_INFO_UPDATE),n.checkShipEquipLevelRP()},e.on_ship_equip_box_open_s2c=function(e){IS(a).doAfterOpenBox([e.equip_id])},e.on_ship_equip_info_s2c=function(e){IS(s).equip_list=e.equip_list,normalEvent.emit(t.SHIP_EQUIP_LIST_UPDATE)},e.on_ship_equip_change_s2c=function(e){var n=IS(s);if(2==e.type)for(var _,o=i(e.change_list);!(_=o()).done;){var p=_.value;n.equip_list.push(p)}else if(3==e.type){for(var r,h={},u=[],c=i(e.change_list);!(r=c()).done;){var l=r.value;h[l.equip_id]=l}for(var d,f=i(n.equip_list);!(d=f()).done;){var v=d.value;h[v.equip_id]||u.push(v)}n.equip_list=u}else if(1==e.type){for(var S,E={},q=[],g=i(e.change_list);!(S=g()).done;){var I=S.value;E[I.equip_id]=I}for(var m,P=i(n.equip_list);!(m=P()).done;){var M=m.value;E[M.equip_id]?q.push(E[M.equip_id]):q.push(M)}n.equip_list=q}IS(a).getAutoOpen()||1==e.sub_type&&uiMgr.openView("SeasonShipEquipEditView",e.change_list[0].equip_id),IS(a).can_Send_server=!0,normalEvent.emit(t.SHIP_EQUIP_LIST_UPDATE,e.type)},e.on_ship_equip_shop_s2c=function(e){IS(a).getAutoOpen()&&0==IS(a).getEmptyEquipIdList().length&&normalEvent.emit(t.TYPE_SHIP_EQUIP_BUILD_START),normalEvent.emit(t.TYPE_SHIP_EQUIP_SELL,e.reward)},e.on_ship_equip_box_open_all_s2c=function(e){var i=e.equip_ids,n=e.reward;IS(a).can_Send_server=!0,uiMgr.getOpenView("SeasonMainView")&&(uiMgr.getOpenView("SeasonMainView").can_Send_server=!0),n&&n.length>0&&normalEvent.emit(t.TYPE_SHIP_EQUIP_SELL,n),null==i||i.length<=0?IS(a).getAutoOpen()&&normalEvent.emit(t.TYPE_SHIP_EQUIP_BUILD_START):(i.sort((function(e,i){var n=IS(a).getEquipInfoByEquipId(e),_=IS(a).getEquipInfoByEquipId(i),s=configSeason_equipment.getDataByKey(null==n?void 0:n.config_id),t=configSeason_equipment.getDataByKey(null==_?void 0:_.config_id);return(null==s?void 0:s.quality)!=(null==t?void 0:t.quality)?(null==s?void 0:s.quality)>(null==t?void 0:t.quality)?-1:1:(null==n?void 0:n.equip_lv)!=(null==_?void 0:_.equip_lv)?(null==n?void 0:n.equip_lv)>(null==_?void 0:_.equip_lv)?-1:1:e<i?-1:1})),IS(a).doAfterOpenBox(i))},e.on_ship_figure_s2c=function(e){for(var n,_=IS(s),o=[],p=!0,a=i(_.figure_list);!(n=a()).done;){var r=n.value;r.k==e.figure.k?(p=!1,o.push(e.figure)):o.push(r)}p&&o.push(e.figure),_.figure_list=o,normalEvent.emit(t.TYPE_SHIP_FIGURE_CHANGE_UPDATE)},e.on_ship_room_info_s2c=function(e){var i=IS(s);i.shipRoominfo={figure:e.figure,role_attr:e.role_attr,final_atk:e.final_atk,room_list:e.room_list,ext:e.ext},i.checkShipRoomRP(),normalEvent.emit(t.TYPE_SHIP_ROOM_INFO_UPDATE)},e.on_ship_room_update_s2c=function(e){for(var n,_=IS(s),o=_.shipRoominfo.room_list,p=[],a=i(e.update_rooms);!(n=a()).done;){for(var r,h=n.value,u=!0,c=i(o);!(r=c()).done;){var l=r.value;l.room_id==h.room_id?(u=!1,p.push(h)):p.push(l)}u&&p.push(h)}_.shipRoominfo.room_list=p,_.checkShipRoomRP(),normalEvent.emit(t.TYPE_SHIP_ROOM_INFO_UPDATE)},e.on_ship_treasure_info_s2c=function(e){var i=IS(s);i.treasureList=e.treasure_list,i.checkTreasureListRP(),normalEvent.emit(t.TYPE_TREASURE_LIST_UPDATE)},e.on_ship_treasure_uplv_s2c=function(e){for(var n,_=IS(s),o=_.treasureList,p=[],a=!0,r=i(o);!(n=r()).done;){var h=n.value;h.id==e.treasure_info.id?(a=!1,p.push(e.treasure_info)):p.push(h)}a&&p.push(e.treasure_info),_.treasureList=p,_.checkTreasureListRP(),normalEvent.emit(t.TYPE_TREASURE_LIST_UPDATE)},e.on_ship_draw_info_s2c=function(e){var i=IS(s);1==e.pool_type?i.drawCount=e.count:2==e.pool_type&&(i.drawCount2=e.count),normalEvent.emit(t.TYPE_TREASURE_DRAW_INFO_UPDATE)},e.on_ship_draw_lotto_s2c=function(e){var i=IS(s);1==e.pool_type?i.drawCount=e.count:2==e.pool_type&&(i.drawCount2=e.count),normalEvent.emit(t.TYPE_TREASURE_DRAW_RESULT,e)},e.on_ship_hang_up_box_info_s2c=function(e){var i=IS(s);i.outline_last_time=e.last_time,i.outline_reward_list=e.reward_list,i.outline_plot_list=e.plot_list,normalEvent.emit(t.TYPE_OUTLINE_INFO_UPDATE)},e.on_s1_hall_s2c=function(e){IS(s).hallInfo[e.season_id]=e,normalEvent.emit(o.SEASON_HALL_INFO_UPDATE)},e.on_s1_empire_occupy_tip_s2c=function(e){uiMgr.openView("SeasonBattleRoyalResultView",e)},e.on_s1_air_drop_tip_s2c=function(e){uiMgr.openView("SeasonBattleAirDropResultView",e)},e.on_act_s1_preview_time_s2c=function(e){IS(s).season_start_time=e.start_time,normalEvent.emit(o.SEASON_START_TIME_INFO_UPDATE)},n}());n._RF.pop()}}}));
