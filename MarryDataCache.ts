System.register("chunks:///_virtual/MarryDataCache.ts",["cc","./ObjectUtil.ts","./ArtifactDataCache.ts","./EquipModel.ts","./HorseDataChche.ts","./RoleDataCache.ts","./RoleDefine.ts","./WingDataCache.ts","./MarryControl.ts","./MarryDefine.ts"],(function(t){"use strict";var e,n,r,a,i,o,s,f,l,u,c,h,g,_,S,I;return{setters:[function(t){e=t.cclegacy,n=t.Vec3,r=t.randomRangeInt},function(t){a=t.default},function(t){i=t.ArtifactDataCache},function(t){o=t.EquipModel},function(t){s=t.HorseDataCache},function(t){f=t.RoleDataCache},function(t){l=t.PlayerAttr},function(t){u=t.WingDataCache},function(t){c=t.default},function(t){h=t.RoleUpdateFlag,g=t.MarryStageExtElemDefine,_=t.MarryEventDefine,S=t.MarryStateExtElemDefine,I=t.MarryPhotoExtElemDefine}],execute:function(){e._RF.push({},"e61barWCT9P04e+89SEJC7i","MarryDataCache",void 0);t("default",function(){var t=e.prototype;function e(){this.enterPos=new n(r(-120,120),r(-590,82)),this.mapPos=new n(-350,-50,0),this.boxMap={},this.boxInfo=void 0,this.act_list={},this.roleMap={},this.roleUpdateFlag=h.Not,this.roleActions={},this.marryStageInfo=void 0,this.marryStateInfo=void 0,this.figureChangeData=void 0,this.answerInfo=void 0,this.photoInfo=void 0,this.roleActions[h.Add]=new Set,this.roleActions[h.Del]=new Set,this.roleActions[h.Move]=new Set,this.roleActions[h.Break]=new Set,this.roleActions[h.SetPos]=new Set}return t.clear=function(){},t.checkTreasureMapping=function(){return!(!this.boxInfo||0==this.boxInfo.round)},t.clearRoleActions=function(){this.roleActions[h.Add].clear(),this.roleActions[h.Del].clear(),this.roleActions[h.Move].clear(),this.roleActions[h.Break].clear(),this.roleActions[h.SetPos].clear()},t.SetMarryStageInfo=function(t){if(this.marryStageInfo={wedding_id:t.wedding_id,stage:t.stage,stage_time:t.stage_time,fire_val:t.fire_val,bride_list:t.bride_list,party_type:t.party_type},null!=t.ext)for(var e=0;e<t.ext.length;e++){var n=t.ext[e],r=g[n.k];null!=r&&(this.marryStageInfo[r.name]=n.v)}normalEvent.emit(_.MARRY_STAGE_STATE)},t.UpdateMarryStageInfo=function(t){var e;this.marryStageInfo&&(this.marryStageInfo.stage=t.stage,this.marryStageInfo.stage_time=null!=(e=t.stage_time)?e:this.marryStageInfo.stage_time);normalEvent.emit(_.MARRY_STAGE_STATE)},t.UpdateFireValue=function(t){var e,n;this.marryStageInfo&&(this.marryStageInfo.fire_val=null!=(e=t.fire_val)?e:0,this.marryStageInfo.fire_max=null!=(n=t.fire_max)?n:0,normalEvent.emit(_.MARRY_FIRE_UPDATE))},t.UpdateStageTimesInfo=function(t){0==t.code&&this.marryStageInfo&&(1==t.action?this.marryStageInfo.cheerNum=t.num:this.marryStageInfo.fireNum=t.num,normalEvent.emit(_.MARRY_STAGE_STATE))},t.GetMarryStageInfo=function(){return this.marryStageInfo},t.SetFakeMarryStageInfo=function(){var t=IS(f).GetRoleId(),e={wedding_id:0,stage:0,stage_time:0,fire_val:0,bride_list:[],member_list:[{figure:{hair_figure:IS(f).GetTypeUsedSkin(1),job_figure:IS(f).GetRoleAttr(l.ROLE_ATTR_CUR_JOB),mount_figure:IS(s).horse_id,artifact_figure:IS(i).artifact_id,equip_list:[{k:1,v:IS(o).getShowEquipCfgIdByLocation(1)},{k:2,v:IS(o).getShowEquipCfgIdByLocation(2)},{k:3,v:IS(o).getShowEquipCfgIdByLocation(3)},{k:5,v:IS(u).wing_id}],gender:IS(f).GetRoleAttr(l.ROLE_ATTR_GENDER),skin_list:[{k:2,v:IS(f).GetTypeUsedSkin(2)||0}]},role_id:t,role_name:IS(f).GetRoleName(),pos:{x:0,y:0},break:0}],party_type:0};IS(c).on_marry_scene_enter_s2c(e)},t.SetMarryStateInfo=function(t){if(this.marryStateInfo=a.clone(t),null!=t.ext)for(var e=0;e<t.ext.length;e++){var n=t.ext[e],r=S[n.k];null!=r&&(this.marryStateInfo[r.name]=n.v)}normalEvent.emit(_.MARRY_PARTY_INFO)},t.GetMarryStateInfo=function(){return this.marryStateInfo},t.SetPartyFigure=function(t){this.figureChangeData=t,normalEvent.emit(_.MARRY_PARTY_FIGURE_CHANGE)},t.GetPartyFigure=function(){var t;return null==(t=this.figureChangeData)?void 0:t.figure},t.SetQuestion=function(t){this.answerInfo=a.clone(t),normalEvent.emit(_.MARRY_MAIN_QUESTION)},t.UpdateQuestion=function(t){this.answerInfo&&(this.answerInfo.answer_id=t.answer_id,this.answerInfo.answer=t.answer),normalEvent.emit(_.MARRY_MAIN_QUESTION),normalEvent.emit(_.MARRY_MAIN_QUESTION_ANSWER)},t.GetAnswerInfo=function(){return this.answerInfo},t.GetWeddingTalk=function(t){var n=IS(e).GetMarryStateInfo();if(n){for(var r,a,i=0,o=0,s=configWedding_talk.getDataByKey(t),f=0;f<n.bride_list.length;f++)2==n.bride_list[f].figure.gender?o++:i++;return o>=2?(r=s.question3,a=s.answer3):i>=2?(r=s.question2,a=s.answer2):(r=s.question1,a=s.answer1),{question:r,answerList:a}}return null},t.SetPhotoData=function(t){if(this.photoInfo=a.clone(t),null!=t.ext)for(var e=0;e<t.ext.length;e++){var n=t.ext[e],r=I[n.k];null!=r&&(this.photoInfo[r.name]=n.v)}normalEvent.emit(_.MARRY_PHOTO_PAGE_UPDATE)},t.GetPhotoInfo=function(){return this.photoInfo},t.GetMarrySexType=function(){var t=IS(e).GetMarryStateInfo(),n=0,r=0;if(t)for(var a=0;a<t.bride_list.length;a++)2==t.bride_list[a].figure.gender?r++:n++;return 2==n||2==r?2:1},e}());e._RF.pop()}}}));
