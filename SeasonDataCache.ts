System.register("chunks:///_virtual/SeasonDataCache.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPointMgr.ts","./StorageUtil.ts","./TimeUtil.ts","./ConfigSeason_kv.ts","./ObjectUtil.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BagModel.ts","./PayDataCache.ts","./PayDefine.ts","./RoleDataCache.ts","./RoleDefine.ts","./SeasonSceneDataCache.ts"],(function(e){"use strict";var t,i,n,o,a,s,r,u,c,l,h,S,f,v,p,d,_,g,I;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy},function(e){n=e.RedPointMgr},function(e){o=e.default},function(e){a=e.default},function(e){s=e.ConfigSeason_kv},function(e){r=e.default},function(e){u=e.default},function(e){c=e.ActivityType,l=e.ActivityState,h=e.ActivityTaskState,S=e.ActivityEventDefine},function(e){f=e.BagModel},function(e){v=e.default},function(e){p=e.GiftType},function(e){d=e.RoleDataCache},function(e){_=e.RoleRedPointSystemEnum,g=e.RoleEventDefine},function(e){I=e.SeasonSceneDataCache}],execute:function(){i._RF.push({},"092981lNndFB6K60CVXsPjE","SeasonDataCache",void 0);e("SeasonDataCache",function(){var e=i.prototype;function i(){this.season_start_time=void 0,this.treasureList=[],this.drawCount=void 0,this.drawCount2=void 0,this.is_open=void 0,this.start_time=void 0,this.end_time=void 0,this.max_season_id=0,this.server_list=[],this.station_level=1,this.station_exp=0,this.ship_level=1,this.ship_exp=0,this.equip_box_level=void 0,this.equip_box_exp=void 0,this.cur_ship_skin=1,this.skin_list=[],this.figure_list=[],this.equip_books=[],this.book_new=[],this.equip_list=[],this.shipRoominfo={figure:{},role_attr:[],final_atk:[],room_list:[],ext:[]},this.tabInfo={tab:1,unlock_list:[{k:1,s:""}]},this.outline_last_time=0,this.outline_reward_list=[],this.outline_plot_list=[],this.powerInfo=[],this.hallInfo={},this.isInNight=!1,normalEvent.on(S.OnActivityListUpdate,this.activityChange,this),normalEvent.on(S.OnActivityInfoUpdate,this.activityChange,this),normalEvent.on(S.OnActivityInfoTaskUpdate,this.activityTaskChange,this),normalEvent.on(g.ROLE_RED_POINT_LIST_UPDATE,this.checkMapRecordRP,this),normalEvent.on(g.ROLE_RED_DETAIL_UPDATE,this.checkMapRecordRP,this)}return e.clear=function(){},e.activityChange=function(e){this.checkPop()},e.activityTaskChange=function(){this.checkMapTaskRP(),this.checkMapGiftRP(),this.checkPuzzleRP()},e.checkPop=function(){var e=IS(u).GetActivityInfo(c.SeasonPuzzle);if(e&&e.state==l.EndShow){var t,i="ActivitySeasonPuzzlePreview"+IS(d).GetRoleId();if("1"==(null!=(t=o.get(i))?t:""))return;uiMgr.ViewIsAddPop("SeasonPreviewPuzzleTipView")||(uiMgr.addPopView("SeasonPreviewPuzzleTipView"),o.set(i,"1"))}var n=IS(u).GetActivityInfo(c.Season);if(n&&n.state==l.Open){var a,s="ActivitySeasonMainPreview"+IS(d).GetRoleId();if("1"==(null!=(a=o.get(s))?a:""))return;uiMgr.ViewIsAddPop("SeasonPreview")||(uiMgr.addPopView("SeasonPreview"),o.set(s,"1"))}},e.checkShipSkinCanShow=function(e){var t=configSeason_ship.getDataByKey(e);if(null==t)return!1;var i=t.open_time;return!!r.isEmpty(i)||a.checkOpenTime(i)},e.getSkinLevelByID=function(e){var i=0;if(1==configSeason_ship.getDataByKey(e).default_unlock&&(i=1),null==this.skin_list)return i;for(var n,o=t(this.skin_list);!(n=o()).done;){var a=n.value;if(a.skin_id==e){i=a.level;break}}return i},e.getShipSkinState=function(e){var t=configSeason_ship_skin.getDataByKeys("mount_id",e,"skin_level",this.getSkinLevelByID(e));return t||printLogErr("skinid="+e),null==t.expend||0==t.expend.length?e==IS(i).cur_ship_skin?4:3:IS(f).getGoodsCountByGoodsGtid(t.expend[0][0])>=t.expend[0][1]?5:e==IS(i).cur_ship_skin?4:0==t.attr.length?1:2},e.checkPosUnlock=function(e){for(var n,o=IS(i).shipRoominfo,a=t(null!=(s=o.room_list)?s:[]);!(n=a()).done;){var s,r=n.value;if(e==r.room_id)return 1==r.state}},e.getActiveInfoByPos=function(e){for(var n,o=IS(i).shipRoominfo,a=t(null!=(s=o.room_list)?s:[]);!(n=a()).done;){var s,r=n.value;if(e==r.room_id)return r}},e.getSkillWearPos=function(e){for(var n,o=IS(i).shipRoominfo,a=t(null!=(s=o.room_list)?s:[]);!(n=a()).done;){var s,r=n.value;if(r.equip_skill.length>0&&e==r.equip_skill[0].skill_id)return r.room_id}return 0},e.getEmptyPosList=function(){for(var e,n=[],o=IS(i).shipRoominfo,a=t(null!=(s=o.room_list)?s:[]);!(e=a()).done;){var s,r=e.value;1==r.state&&0==r.equip_skill.length&&n.push(r.room_id)}return n.sort((function(e,t){return e-t})),n},e.getEmptyPos=function(){return this.getEmptyPosList()[0]},e.getPetWearPos=function(e){for(var n,o=IS(i).shipRoominfo,a=t(null!=(s=o.room_list)?s:[]);!(n=a()).done;){var s,r=n.value;if(r.equip_pet.length>0&&e==r.equip_pet[0].pet_id)return r.room_id}return 0},e.getEmptyPetPosList=function(){for(var e,n=[],o=IS(i).shipRoominfo,a=t(null!=(s=o.room_list)?s:[]);!(e=a()).done;){var s,r=e.value;1==r.state&&0==r.equip_pet.length&&r.room_id<4&&n.push(r.room_id)}return n.sort((function(e,t){return e-t})),n},e.getPetEmptyPos=function(){return this.getEmptyPetPosList()[0]},e.getUsingEquipList=function(){for(var e,i=[],n=t(this.equip_list);!(e=n()).done;){var o=e.value;0!=o.location&&i.push(o)}return i},e.getShipShowFigureInfo=function(){var e=s.SEASON_INITIAL_ATTR,n=e[0][1],o=e[1][1],a=e[2][1],r=e[3][1];n=IS(i).cur_ship_skin;for(var u,c=IS(i).getUsingEquipList(),l=t(c);!(u=l()).done;){var h=u.value;1==h.location&&0!=h.config_id?o=h.config_id:2==h.location&&0!=h.config_id?a=h.config_id:3==h.location&&0!=h.config_id&&(r=h.config_id)}for(var S,f=IS(i).figure_list,v=t(f);!(S=v()).done;){var p=S.value;3==p.k&&0!=p.v?n=p.v:4==p.k&&0!=p.v?o=p.v:5==p.k&&0!=p.v?a=p.v:6==p.k&&0!=p.v&&(r=p.v)}return{shipId:n,flag:o,gunId:a,ram:r}},e.getTreasureInfoById=function(e){for(var i,n=t(this.treasureList);!(i=n()).done;){var o=i.value;if(o.id==e)return o}return{id:0,star:0,state:0}},e.checkRedPoint=function(){var e=0,t=IS(u).GetActivityInfo(c.Season);return t&&t.state==l.Open?(e+=IS(i).checkTowerRP(),e+=IS(i).checkShipRP(),e+=IS(i).checkTreasureRP(),e+=IS(i).checkShipRoomRP(),IS(n).changeValue("Season",e),e):(IS(n).changeValue("Season",e),e)},e.checkTowerRP=function(){var e=0,t=IS(f).getGoodsCountByGoodsGtid(270005),o=configSeason_station_level.getDataByKey(IS(i).station_level+1);if(o){var a=o.expend[0][1];e=t>=(a-=IS(i).station_exp)?1:0}else e=0;return IS(n).changeValue("Season/Tower",e),IS(n).changeValue("Season/Tower/build",e),t>=a?1:0},e.checkShipRP=function(){var e=0;return e+=IS(i).checkShipBodyRP(),e+=IS(i).checkShipEquipRP(),IS(n).changeValue("Season/Equip",e),e},e.checkShipBodyRP=function(){for(var e,o=0,a=configSeason_ship_skin.getDataByList("skin_level",1),s=t(a.entries());!(e=s()).done;){var r=e.value,u=(r[0],r[1]);IS(i).checkShipSkinCanShow(u.mount_id)&&(5==IS(i).getShipSkinState(u.mount_id)&&(o+=1))}return IS(n).changeValue("Season/Equip/body",o),o},e.checkShipEquipRP=function(){var e=0;return e+=IS(i).checkShipEquipBuildRP(),e+=IS(i).checkShipEquipLevelRP(),IS(n).changeValue("Season/Equip/equip",e),e},e.checkShipEquipLevelRP=function(){var e=0,t=IS(i).equip_box_exp,o=IS(i).equip_box_level;if(15==o)return IS(n).changeValue("Season/Equip/equip/level",e),e;var a=configSeason_treasure_level.getDataByKey(o);if(!a)return IS(n).changeValue("Season/Equip/equip/level",e),e;if(t>=a.expend.length)return IS(n).changeValue("Season/Equip/equip/level",e),e;var s=a.expend[t];return s&&s.length>0&&IS(f).getGoodsCountByGoodsGtid(s[0])>=s[1]&&(e=1),IS(n).changeValue("Season/Equip/equip/level",e),e},e.checkShipEquipBuildRP=function(){var e=0,t=configSeason_ship_level.getDataByKey(IS(i).ship_level),o=IS(f).getGoodsCountByGoodsGtid(270006);return t&&o>=t.cost[1]&&(e=1),IS(n).changeValue("Season/Equip/equip/build",e),e},e.checkTreasureRP=function(){var e=0;return e+=IS(i).checkTreasureListRP(),e+=IS(i).checkTreasureFindRP(),IS(n).changeValue("Season/Treasure",e),e},e.checkTreasureListRP=function(){for(var e,o=0,a=t(null!=(s=IS(i).treasureList)?s:[]);!(e=a()).done;){var s,r=e.value.id,u=IS(i).getTreasureInfoById(r).star,c=configSeason_treasure.getDataByKeys("id",r,"level",u);if(c.cost&&c.cost.length>0)if(IS(f).getGoodsCountByGoodsGtid(c.cost[0][0])>=c.cost[0][1]){o=1;break}}return IS(n).changeValue("Season/Treasure/List",o),0},e.checkTreasureFindRP=function(){var e;return e=IS(f).getGoodsCountByGoodsGtid(270008)>0?1:0,IS(n).changeValue("Season/Treasure/Find",e),e},e.checkShipRoomRP=function(){var e,t,o=0;if(0==(null!=(e=null==(t=IS(i).shipRoominfo)?void 0:t.room_list)?e:[]).length)return o;for(var a=1;a<6;a++){var s=IS(i).getActiveInfoByPos(a);r.isEmpty(s)||(a<=3&&(0==s.equip_skill.length||0==s.equip_pet.length)||0==s.equip_skill.length)&&(o+=1)}return IS(n).changeValue("Season/Crew",o),IS(n).changeValue("Season/Crew/Room",o),o>0?1:0},e.checkMapRP=function(){var e=0,t=IS(u).GetActivityInfo(c.Season);return t&&t.state!=l.Open&&(e=0),e+=IS(i).checkMapAPRP(),e+=IS(i).checkMapTaskRP(),e+=IS(i).checkMapGiftRP(),e+=IS(i).checkMapRecordRP(),IS(n).changeValue("Season/Map",e),e},e.checkMapAPRP=function(){var e,t,i=0;return i+=null!=(e=null==(t=IS(I).roleInfo)?void 0:t.action_point)?e:0},e.checkMapTaskRP=function(){var e=0,t=IS(u).GetActivityInfo(c.Season);if(null==t)return 0;for(var i in t.task_list)t.task_list.hasOwnProperty(i)&&t.task_list[i].state==h.CanGet&&(e+=1);return IS(n).changeValue("Season/Map/Task",e),e},e.checkMapGiftRP=function(){var e=0,i=IS(u).GetActivityInfo(c.Season);if(!i)return IS(n).changeValue("Season/Map/Gift",e),0;for(var o,a=IS(v).GetAcivityGift(p.Activity,i.type,i.round),s=t(a);!(o=s()).done;){var r=o.value,l=IS(v).GetPayGiftInfo(r.id);if(0==r.price&&(!l||2!=l.rewardState)){e=1;break}}return IS(n).changeValue("Season/Map/Gift",e),e},e.checkMapRecordRP=function(){var e=IS(d).getRedNumByModule(_.System_Season,1);return IS(n).changeValue("Season/Map/Record",e),e},e.checkShipSkinRP=function(){var e=IS(i).book_new.length;return IS(n).changeValue("Season/Skin",e),e},e.checkPuzzleRP=function(){var e=IS(u).GetActivityInfo(c.SeasonPuzzle);if(e){var i=[],o=IS(u).GetRoundCfg(c.SeasonPuzzle,e.round),a=configActivity_task_group.getDataByKey(o.task_list[0]).task_list;a.concat(configActivity_task_group.getDataByKey(o.task_list[1]).task_list);for(var s,r=t(a);!(s=r()).done;){var l=s.value;if(e.task_list.hasOwnProperty(l))i.push(e.task_list[l]);else{var S={cfg:configActivity_task.getDataByKey(l),state:0,count:0};i.push(S)}}for(var f=0;f<i.length;f++)if(i[f].state==h.CanGet)return IS(n).changeValue("Season",1),1}return IS(n).changeValue("Season",0),0},i}());i._RF.pop()}}}));

