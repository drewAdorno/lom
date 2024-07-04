System.register("chunks:///_virtual/BattleSkillPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./EnumDefine.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./index57.ts","./GameSetting.ts","./MessageView.ts","./MainViewModel.ts","./RoleDataCache.ts","./SkillDataCache.ts","./SkillModel.ts","./UIDefine.ts"],(function(i){"use strict";var t,e,n,a,s,l,o,h,d,c,r,u,f,g,p,v,k,m,y,M,C;return{setters:[function(i){t=i.createForOfIteratorHelperLoose},function(i){e=i.cclegacy,n=i.Button,a=i.Sprite,s=i.js,l=i.Vec2},function(i){o=i.ChapterType},function(i){h=i.RunMode,d=i.RunState},function(i){c=i.RedPointType},function(i){r=i.RedPointMgr},function(i){u=i.default},null,function(i){f=i.default,g=i.GameSettingKey},function(i){p=i.default},function(i){v=i.MainViewModel},function(i){k=i.RoleDataCache},function(i){m=i.SkillDataCache},function(i){y=i.SkillModel},function(i){M=i.PanelTabType,C=i.OpenFunction}],execute:function(){e._RF.push({},"6cc4a/VFVZJ1499ecmfceHc","BattleSkillPanel",void 0);i("BattleSkillPanel",function(){function i(i,t){this.view=void 0,this.node=void 0,this.skillList=[],this.autoItem=void 0,this.view=i,this.node=t,this.onInit()}var e=i.prototype;return e.onInit=function(){for(var i=1;i<=6;++i){var t=u.findChild(this.node,"skill"+i);this.skillList.push(new R(this.view,t,i))}this.autoItem=new w(u.findChild(this.node,"auto"),this.view)},e.onUpdate=function(i){for(var e,n=t(this.skillList);!(e=n()).done;){e.value.onUpdate(i)}},e.reset=function(){this.updateSkill(),this.autoItem.reset()},e.updateSkill=function(){for(var i,e=t(this.skillList);!(i=e()).done;){i.value.reset()}},i}());var w=function(){function i(i,t){var e=this;this.view=void 0,this.nodeOn=void 0,this.nodeOff=void 0,this.imgBg=void 0,this.view=t,t.addComponentCallbackListener(i,n.EventType.CLICK,(function(){e.onClick()})),this.imgBg=u.findChildComponent(i,"bg",a),this.nodeOn=u.findChild(i,"on");var s=this.nodeOn.getComponent(a);this.view.loadIcon(s,"battle","zxgq_ui_jinengon"),this.nodeOff=u.findChild(i,"off");var l=this.nodeOff.getComponent(a);this.view.loadIcon(l,"battle","zxgq_ui_jinengoff")}var t=i.prototype;return t.onClick=function(){battleMain.runMode==h.Main&&(0!=configChapter_type.getDataByKey(battleMain.data.chapterType).manual_skill&&battleMain.runState==d.Running&&(battleMain.playerAuto=!battleMain.playerAuto,IS(f).set(g.AUTO_SKILL,battleMain.playerAuto),this.reset(),1==battleMain.collectRecord&&(battleMain.curRecord.manual=!0)))},t.reset=function(){this.imgBg.grayscale=!battleMain.playerAuto,battleMain.playerAuto?(this.nodeOn.active=!0,this.nodeOff.active=!1):(this.nodeOn.active=!1,this.nodeOff.active=!0)},i}(),R=function(){function i(i,t,e){var o=this;this.node=void 0,this.view=void 0,this.index=void 0,this.skillData=void 0,this.skill=void 0,this.imgBg=void 0,this.nodeLock=void 0,this.nodeEmpty=void 0,this.nodeExist=void 0,this.imgIcon=void 0,this.imgPower=void 0,this.imgRelease=void 0,this.btnItem=void 0,this.lastState=0,this.node=t,this.view=i,this.index=e,i.addComponentCallbackListener(t,n.EventType.CLICK,(function(){o.onClick()})),this.btnItem=u.findComponent(t,n),this.imgBg=u.findChildComponent(t,"bg",a),this.nodeLock=u.findChild(t,"lock"),this.nodeEmpty=u.findChild(t,"empty"),this.nodeExist=u.findChild(t,"exist"),this.imgPower=u.findChildComponent(this.nodeExist,"imgPower",a),this.imgPower.fillRange=0,this.imgRelease=u.findChildComponent(this.nodeExist,"imgRelease",a),this.imgRelease.fillRange=0,this.imgIcon=u.findChildComponent(this.nodeExist,"imgIcon",a),this.view.addRedPoint(s.formatStr("MainView/tab-%s/tab-%s/equip/pos-%s",M.Main_Role,M.Role_Skill,this.index),this.node,new l(25,25),c.Dot)}var t=i.prototype;return t.reset=function(){if(battleMain.data.chapterType==o.StrategyActivity||battleMain.data.chapterType==o.Farm?IS(r).changeValue(s.formatStr("MainView/tab-%s/tab-%s/equip/pos-%s",M.Main_Role,M.Role_Skill,this.index),0):IS(r).changeValue(s.formatStr("MainView/tab-%s/tab-%s/equip/pos-%s",M.Main_Role,M.Role_Skill,this.index),IS(m).getSkillEquipRedPoint(this.index)),this.skillData=battleMain.showMainCtr.player.data.ativeSkills[this.index-1],null==this.skillData)return this.nodeLock.active=!0,this.nodeEmpty.active=!1,this.imgBg.grayscale=!0,void(this.nodeExist.active=!1);this.skillData.skill_id>0?(this.nodeExist.active=!0,this.nodeLock.active=!1,this.nodeEmpty.active=!1,this.imgBg.grayscale=!1,this.imgRelease.node.active=!1,this.skill=battleMain.showMainCtr.player.data.getSkill(this.skillData.skill_id),this.lastState=-1,this.imgPower.fillRange=1-this.skill.currenPower/this.skill.config.maxPower,this.view.loadIcon(this.imgIcon,"icon_skill",this.skill.config.icon),this.imgIcon.grayscale=!1):(this.nodeExist.active=!1,-1==this.skillData.skill_id?(this.nodeLock.active=!0,this.nodeEmpty.active=!1,this.imgBg.grayscale=!0):(this.nodeLock.active=!1,this.nodeEmpty.active=!0,this.imgBg.grayscale=!1))},t.onClick=function(){if(null!=this.skillData)if(-1!=this.skillData.skill_id)if(0!=this.skillData.skill_id){if(battleMain.runMode==h.Main)0!=configChapter_type.getDataByKey(battleMain.data.chapterType).manual_skill&&null!=this.skill&&(this.skill.currenPower<this.skill.config.maxPower||(battleMain.runningToPart?p.showFlyTip(GetLanguage(200135)):(battleMain.showMainCtr.player.addUnlimitSkill(this.skill),1==battleMain.collectRecord&&(battleMain.curRecord.manual=!0))))}else{if(battleMain.data.chapterType!=o.Main)return;if(!IS(k).CheckFuncOpen(C.FUNC_SKILL)){var i=configNewFuncOpen.getDataByKey(C.FUNC_SKILL);return void p.showFlyTip(i.openCondition)}IS(v).TryJumpToMainViewPanel(M.Main_Role,M.Role_Skill)}else IS(y).tryShowPosLockTips(this.skillData.pos_id)},t.onUpdate=function(i){if(null!=this.skill)if(this.lastState==this.skill.state){if(1==this.skill.state)return this.imgRelease.fillRange=this.skill.currenRelease/this.skill.config.releaseTime,void(this.imgBg.node.angle+=360*i);var t=1-this.skill.currenPower/this.skill.config.maxPower;this.imgPower.fillRange=t}else{switch(this.skill.state){case 1:case 0:this.imgRelease.fillRange=0,this.imgPower.node.active=!1,this.imgRelease.node.active=!0;break;case 2:this.imgPower.node.active=!0,this.imgRelease.node.active=!1,this.imgPower.fillRange=1,this.imgBg.node.angle=0}this.lastState=this.skill.state}},i}();e._RF.pop()}}}));
