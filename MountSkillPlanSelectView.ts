System.register("chunks:///_virtual/MountSkillPlanSelectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ItemIcon.ts","./HorseDataChche.ts","./RoleControl.ts","./RoleDataCache.ts","./RoleDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,l,a,r,h,c,d,f,u,k,S,v,I,m,g,C,_,p;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.UITransform,l=t.Node,a=t.ScrollView,r=t.Label,h=t.Layout,c=t.Overflow,d=t.Sprite,f=t.js},function(t){u=t.SelectedType,k=t.ListItem},function(t){S=t.default},function(t){v=t.default},null,function(t){I=t.IconAseetType},function(t){m=t.HorseDataCache},function(t){g=t.default},function(t){C=t.RoleDataCache},function(t){_=t.RoleEventDefine},function(t){p=t.BaseView}],execute:function(){n._RF.push({},"382cebzB+tHrbVt7tTSfqCH","MountSkillPlanSelectView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).btnUseSkill=void 0,i.btnNoUseSkill=void 0,i.curPlan=void 0,i.skinIDSel=void 0,i.curPlanSkillId=void 0,i.HorseUIList=void 0,i.horseInfo=[],i.txtName=void 0,i.name="MountSkillPlanSelectView",i.url="ui/module/role/MountSkillPlanSelectView",i}i(n,t);var k=n.prototype;return k.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onCloseClick()})),this.btnUseSkill=this.findChild("content/nodeSkill/btnUse"),this.addComponentCallbackListener(this.btnUseSkill,o.EventType.CLICK,(function(){IS(g).send_role_update_plan_c2s(t.curPlan,[{k:7,v:t.skinIDSel}])})),this.btnNoUseSkill=this.findChild("content/nodeSkill/btnNoUse"),this.addComponentCallbackListener(this.btnNoUseSkill,o.EventType.CLICK,(function(){IS(g).send_role_update_plan_c2s(t.curPlan,[{k:7,v:0}])}));var e=this.findChild("content/nodeSkill/ScrollView/view/content/item"),n=this.findChildComponent("content/nodeSkill/ScrollView/view/content",s);e.on(l.EventType.SIZE_CHANGED,(function(){n.height=e.getComponent(s).height}));var c=this.findChildComponent("content/nodeSelect/ScrollView",a);this.HorseUIList=this.addUIList(c,y),this.HorseUIList.selectedMode=u.SINGLE,this.txtName=this.findChildComponent("content/nodeSkill/common_ui_xiaotidi/txtName-001",r),this.refreshTxtMirrorByLayout(this.findChildComponent("content/nodeSkill/common_ui_xiaotidi",h))},k.onCloseClick=function(){this.close()},k.registerUpdateHandler=function(){this.addEvent(_.PLAN_HORSE_SKIN_EFFECT_SEL,this.onRefreshHorseSel,this),this.addEvent(_.PLAN_INFO_UPDATE,this.onPlanInfoUpdate,this)},k.onAfterOpen=function(){var t=this;this.txtName.schedule((function(){var i=t.txtName.node.getComponent(s);i.width>=368?(t.txtName.overflow=c.SHRINK,i.width=368):t.txtName.overflow=c.NONE}),0),this.curPlan=this.openArgs[0],this.rebuildHorseList(),this.skinIDSel=this.horseInfo[0].skin,this.refreshAll()},k.refreshAll=function(){this.refreshHorseShow(),this.refreshHorseSkill(),this.refreshUseSkillBtn()},k.refreshHorseShow=function(){var t=this.rebuildHorseList();this.HorseUIList.datas=this.horseInfo,this.HorseUIList.scrollTo(t)},k.onRefreshHorseSel=function(t){this.skinIDSel!=t&&(this.skinIDSel=t,this.refreshAll())},k.onPlanInfoUpdate=function(t){t==this.curPlan&&this.refreshAll()},k.rebuildHorseList=function(){var t=configMount_skin.getDataByList("skin_level",0),i=0;this.horseInfo=[];for(var n,o=e(t.entries());!(n=o()).done;){var s=n.value,l=(s[0],s[1]);if(IS(m).checkHorseCanShow(l.mount_id)){var a=IS(m).getSkinLevelByID(l.mount_id);this.horseInfo.push({skin:l.mount_id,level:a,state:IS(m).getHorseState(l.mount_id)})}}this.horseInfo.sort((function(t,i){return t.state>i.state?-1:1}));for(var r,h=e(this.horseInfo.entries());!(r=h()).done;){var c=r.value,d=c[0];c[1].skin==this.skinIDSel&&(i=d)}return i},k.refreshHorseSkill=function(){var t=this.findChildComponent("content/nodeSkill/Frame",d),i=this.findChildComponent("content/nodeSkill/Icon",d),e=this.findChildComponent("content/nodeSkill/txtName",r),n=this.findChildComponent("content/nodeSkill/ScrollView/view/content/item",r),o=configMount_skin.getDataByKeys("mount_id",this.skinIDSel,"skin_level",IS(m).getSkinLevelByID(this.skinIDSel));0==o.skin_skill.length&&(o=configMount_skin.getDataByKeys("mount_id",this.skinIDSel,"skin_level",IS(m).getSkinLevelByID(this.skinIDSel)+1));var s=configSkill.getDataByKey(o.skin_skill[0][0]);this.loadIcon(t,"icon_skill",f.formatStr("common_ICON_jinengkuang0%s",s.quality)),this.loadIcon(i,"icon_skill",s.icon,null,I.ICON_SPRITE),e.string=s.name;var l=configSkill_level.getDataByKeys("id",o.skin_skill[0][0],"level",o.skin_skill[0][1]);n.string=v.formatStr.apply(v,[l.desc].concat(l.desc_parm))},k.refreshUseSkillBtn=function(){var t=IS(C).planIdToInfo[this.curPlan].detail;this.curPlanSkillId=0;for(var i=0;i<t.length;i++)7==t[i].k&&(this.curPlanSkillId=t[i].v);if(IS(m).getSkinLevelByID(this.skinIDSel)<=0)return this.btnUseSkill.active=!1,void(this.btnNoUseSkill.active=!1);this.btnUseSkill.active=this.curPlanSkillId!=this.skinIDSel,this.btnNoUseSkill.active=this.curPlanSkillId==this.skinIDSel},k.onBeforeClose=function(){},k.onDestroy=function(){},n}(p));var y=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).imgFrame=void 0,i.imgIcon=void 0,i.imgLock=void 0,i.nodeUse=void 0,i.nodeSel=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.imgFrame=S.findChildComponent(this.node,"frame",d),this.imgIcon=S.findChildComponent(this.node,"icon",d),this.imgLock=S.findChild(this.node,"lock"),this.nodeUse=S.findChild(this.node,"nodeUse"),this.nodeSel=S.findChild(this.node,"sel")},n.onRender=function(t,i){this.data=t;var e=configMount.getDataByKey(this.data.skin).icon_small,n=configMount.getDataByKey(this.data.skin).quality,o=configColor.getDataByKey(n).path;this.view.loadIcon(this.imgFrame,"icon_equip",o),this.view.loadIcon(this.imgIcon,"icon_item",e),this.checkState();var s=this.view;this.nodeSel.active=s.skinIDSel==this.data.skin},n.checkState=function(){this.imgLock.active=!1,this.imgFrame.grayscale=!1,this.imgIcon.grayscale=!1,this.nodeUse.active=!1,1==this.data.state&&(this.imgLock.active=!0,this.imgFrame.grayscale=!0,this.imgIcon.grayscale=!0);var t=configMount_skin.getDataByKeys("mount_id",this.data.skin,"skin_level",IS(m).getSkinLevelByID(this.data.skin));0==t.skin_skill.length&&(t=configMount_skin.getDataByKeys("mount_id",this.data.skin,"skin_level",IS(m).getSkinLevelByID(this.data.skin)+1));var i=this.view;this.nodeUse.active=this.data.skin==i.curPlanSkillId},n.onItemClick=function(){normalEvent.emit(_.PLAN_HORSE_SKIN_EFFECT_SEL,this.data.skin)},e}(k);n._RF.pop()}}}));
